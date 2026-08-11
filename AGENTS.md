# Order of Mass project instructions

- For every completed change/build task in this project, finish by committing and pushing the scoped changes for GitHub Pages and deploying the configured Firebase targets, unless the user explicitly says not to deploy.
- Run the relevant automated checks before committing and deploying.
- Unless a defect is specific to one language's source parser, implement behavior fixes in the shared multilingual path so they apply to every supported language, including languages added later.
- Never include unrelated local files or user work in a commit. If a Git remote, upstream branch, Firebase target, authentication, or deployment configuration is missing, report the exact blocker instead of silently skipping deployment.
- Report the commit hash, pushed branch, GitHub Pages status, and Firebase deployment result in the final response.
