# Deploy your create-react-app to Github pages

1. Change favicon element in public folder (github does not like the default that comes with create-react-app)
1. If you don't already, create a repo on github and connect to your project.
1. Terminal: `npm install gh-pages --save-dev`
1. Terminal: `npm install` (update your project with the new package.json)
1. package.json - add (top level) `"homepage": "http://{YOUR GITHUB NAME}.github.io/{YOUR REPO NAME}"`
1. package.json - add the following scripts
```
"predeploy": "npm run build",
  "deploy": "gh-pages -d build"

```
1. Now you are ready. Terminal: `npm run deploy`
1. Make updates and ready to change webpage: `npm run deploy`

