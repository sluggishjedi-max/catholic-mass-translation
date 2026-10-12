"""Offline regression tests for directory identity and source-field boundaries."""
import importlib.util
import unittest
from pathlib import Path
from unittest.mock import patch
from bs4 import BeautifulSoup

spec = importlib.util.spec_from_file_location('supported',Path(__file__).with_name('enrich-supported-churches.py'))
builder = importlib.util.module_from_spec(spec)
spec.loader.exec_module(builder)

class ChurchImportTests(unittest.TestCase):
    def test_same_dedication_different_official_pages_is_not_merged(self):
        first = builder.finish(builder.base('US','Holy Family','Archdiocese of Los Angeles','https://example.org/one/'))
        second = builder.finish(builder.base('US','Holy Family','Archdiocese of Los Angeles','https://example.org/two/'))
        records,changes = builder.merge([], [first,second])
        self.assertEqual(len(records),2)
        self.assertEqual(changes['added'],2)
        again,_ = builder.merge(records,[second,first])
        self.assertEqual(len(again),2)

    def test_removed_source_schedule_is_not_presented_as_current(self):
        initial = builder.finish({**builder.base('US','Saint Test','Diocese','https://example.org/parish/'),
                                  'massTimes':['Sunday: 10am'],'phone':'12345'})
        current = builder.finish(builder.base('US','Saint Test','Diocese','https://example.org/parish/'))
        records,_ = builder.merge([initial],[current])
        self.assertNotIn('massTimes',records[0])
        self.assertNotIn('massTimesStatus',records[0])
        self.assertNotIn('phone',records[0])

    def test_dublin_information_is_not_an_address_or_mass_time(self):
        markup = '''<div class="parish-church"><h3>Saint Test</h3>
        <div class="parish-churches__info"><h4>Information</h4>
        <p>The church is closed temporarily for repairs.</p></div>
        <div class="parish-churches__info"><h4>Address</h4><p>1 Church Road</p></div></div>
        <div class="parish-church"><h3>Map</h3></div>'''
        with patch.object(builder,'soup',return_value=BeautifulSoup(markup,'html.parser')):
            records = builder.dublin_detail({'url':'https://example.org/parish/','name':'Test parish'})
        self.assertEqual(len(records),1)
        self.assertEqual(records[0]['address'],'1 Church Road')
        self.assertEqual(records[0]['availabilityStatus'],'temporarily-closed')
        self.assertNotIn('massTimes',records[0])

    def test_glagow_other_residence_and_confessions_are_not_imported(self):
        markup = '''<div class="sp-simpleportfolio-description"><div class="clearfix">
        <h5>Location: 1 Church Road</h5><p>Assistant priests resident at Another Church 0141-123 4567</p>
        <p>Sunday Mass:<br>Morning: 10.00am<br>Confessions:<br>Saturday: 4.00pm</p></div></div>'''
        with patch.object(builder,'soup',return_value=BeautifulSoup(markup,'html.parser')):
            record = builder.glasgow_detail({'url':'https://example.org/parish/','name':'Saint Test'})[0]
        self.assertEqual(record['address'],'1 Church Road')
        self.assertNotIn('phone',record)
        self.assertEqual(record['massTimes'],['Sunday Mass: Morning: 10.00am'])

    def test_formatted_address_label_keeps_its_separate_value(self):
        self.assertEqual(builder.labelled_value(['Location:','1 Church Road','Parish Email:','office@example.org'],r'Location'),'1 Church Road')
        self.assertEqual(builder.labelled_value(['Location:','Parish Email:','office@example.org'],r'Location'),'')

    def test_source_coordinates_and_curated_seed_coordinates_have_different_ownership(self):
        current = builder.finish(builder.base('US','Saint Test','Diocese','https://example.org/parish/'))
        previous = builder.finish({**current,'lat':1.0,'lng':2.0})
        records,_ = builder.merge([previous],[current])
        self.assertNotIn('lat',records[0])
        seed = {**current,'lat':1.0,'lng':2.0,'coordinateProvenance':'retained-curated-seed',
                'coordinateSourceUrl':'https://example.org/seed/'}
        records,_ = builder.merge([seed],[current])
        self.assertEqual(records[0]['lat'],1.0)
        self.assertEqual(records[0]['coordinateProvenance'],'retained-curated-seed')

    def test_confession_and_funeral_only_notices_do_not_create_regular_masses(self):
        values = ['Saturday: 10.00amConfessions are heard after the 10am mass.',
                  'Weekday Mass: Only for funerals. (10am in another church)',
                  "Weekday Mass: 10.00am (unless there's a funeral in Holy Cross)"]
        self.assertEqual(builder.public_mass_times(values),
                         ['Saturday: 10.00am',"Weekday Mass: 10.00am (unless there's a funeral in Holy Cross)"])

if __name__=='__main__': unittest.main()
