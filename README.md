# To start:
1. Start server: `npm start`
2. Start Webpack for Sass: `npm run watch-css`

# Included packages:
1. [React Icons](http://gorangajic.github.io/react-icons/index.html)
2. [Node Sass Chokidar](https://www.npmjs.com/package/node-sass-chokidar) (Sass preprocessor)

# Dev Branch Strategy
There are three main branches in this project: Master, Test and Operations. **Master** contains all committed and merged contributions during development. **Test** is for testing out a feature branch in a production environment, prior to being deployed to operations. **Operations** or "Ops" is the domain that appears live to users under its [domain URL](https://abovetheinfluence.herokuapp.com/). 

For dev strategy, only Master can be merged into Operations with no exceptions. Master and other feature branches can be merged into Test. 

# Heroku:
- Access the [dashboard](https://dashboard.heroku.com/apps/abovetheinfluence).
- Visit the [domain](https://abovetheinfluence.herokuapp.com/).
- Rename the app and domain: `heroku apps:rename newnam`
- [Renaming apps from the CLI](https://devcenter.heroku.com/articles/renaming-apps)
- To deploy to heroku directly: stage, commit and push to heroku: `git push heroku master`
- Optionally, merge **Master** to **Operations** to deploy automatically to master.

# References:
- [Markdown Syntax](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#links)