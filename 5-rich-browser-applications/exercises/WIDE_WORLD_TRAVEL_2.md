#### Working With Angular
### Wide World Travel Guides -- part 2: Adding a factory
---
### Requirements
- Complete [part 1](https://github.com/nashville-software-school/front-end-milestones/blob/master/5-rich-browser-applications/exercises/WIDE_WORLD_TRAVEL_1.md) first   
- Create a factory to provide the guide book data to your controller

----
### Setup
Add a `factories` directory to your existing file structure:
```
world_wide_travel
 |_ app
 |    |_ controllers
 |    |     |_ bookCtrl.js
 |    |
 |    |_factories
 |    |     |_ guideFactory.js
 |    |
 |    |_ app.js
 |
 |_ data
 |    |_ guides.json
 |
 |_ lib
 |    |_ gulpfile.js (or gruntfile.js)
 |
 |_ index.html
``` 
### Instructions
- Make a new branch called `guide-factory`  
- Separate the database interactions from the DOM interactions, and make your guidebook data available to your controller (and other, future controllers) by moving the http call for `guides.json` from `bookCtrl.js` into `guideFactory.js`
- Inject your factory into `bookCtrl.js` as a dependency

