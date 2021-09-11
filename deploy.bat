$ErrorActionPreference = 'SilentlyContinue'
type nul >> "out/.nojekyll"
git add out/ 
git commit -m "Deploy Next.js to remote"
git subtree split --prefix out -b gh-pages
git push -f origin gh-pages:gh-pages
git branch -D gh-pages
git reset --hard HEAD~1
git stash pop