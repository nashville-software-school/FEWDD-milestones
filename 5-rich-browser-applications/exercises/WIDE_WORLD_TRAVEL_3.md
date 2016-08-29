#### Working With Angular
### Wide World Travel Guides -- part 3: Adding routing
---
### Requirements
- Complete [part 1](https://github.com/nashville-software-school/front-end-milestones/blob/master/5-rich-browser-applications/exercises/WIDE_WORLD_TRAVEL_1.md) and [part 2]( TODO: Add link for second exercise) first   
- Use `ngRoute` to load the HTML for diplaying guide books from a partial into `index.html`

----
### Setup
Add a `partials` directory to your existing file structure:
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
 |_partials
 |    |_ guide-list.html
 |
 |_ index.html
``` 
### Instructions
- Make a new branch called `guide-routing`  
- Include the separate `angular-route` provider into `index.html`: `<script src="my-path-to-angular-route.min.js"></script>`
- Inject it into your app as a dependency: `var myApp = angular.module("MyAppName", ['ngRoute']);`
- Setup routing in app.js using the config method: `app.config(['$routeProvider'....etc`
- Remember to remove `ng-controller` references from index.html. Angular-route will now handle binding controllers to partials.

