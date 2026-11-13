// Measure the actual wrapped header instead of assuming a desktop-only height.
(() => {
  const root = document.documentElement;
  const header = document.querySelector('.editor-top');
  const controls = document.querySelector('.editor-controls');
  const footer = document.querySelector('.editor-footer');
  function measure() {
    for (const [name, node] of [['header', header], ['controls', controls], ['footer', footer]]) {
      root.style.setProperty('--editor-' + name + '-height', (node ? node.getBoundingClientRect().height : 0) + 'px');
    }
  }
  const observer = new ResizeObserver(measure);
  [header, controls, footer].filter(Boolean).forEach(node => observer.observe(node));
  measure();
})();
