# Angular 103

## Handling authentication in Angular/Firebase application

The `onAuth` listener will be very helpful when dealing with authentication. You can utilize the `run()` method on a module, which executes every time the page is loaded, or a view is switched.

```js
var songApplication = angular.module("SongApp", []);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/start', {
        templateUrl: 'partials/song-list.html',
        controller: 'SongCtrl'
      }).
      when('/login', {
        templateUrl: 'partials/authenticate.html',
        controller: 'AuthCtrl'
      });
  }
]);

songApplication.run(["$location", function ($location) {
  var firebaseBaseRef = new Firebase("url");

  firebaseBaseRef.onAuth(function (authData) {
    if (authData) {
      $location.url("/start");
    } else {
      $location.url("/login");
    }
  });
}]);
```


