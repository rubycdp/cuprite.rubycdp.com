#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'ferrum.rocks' > CNAME

git init
git add -A
git commit -m 'Build'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:rubycdp/capture-website.git master:gh-pages

cd -
