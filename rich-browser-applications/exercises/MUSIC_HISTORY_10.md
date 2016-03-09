## Setup

### Create a new branch

`git checkout -b version10`

## Requirements

### Using Firebase references

In the [Firebase Overview](https://www.firebase.com/docs/web/quickstart.html) documentation, there is a CDN link you can use in your Music History application. Add that to your HTML.

Then, in your JavaScript, you can create what's called a Firebase Reference.

```js
var myFirebaseRef = new Firebase("https://<YOUR-FIREBASE-APP>.firebaseio.com/");
```

You will use this reference for authentication

### Authentication

For this exercise, you are going to force users to log in before they can use Music History.

> [Firebase docs](https://www.firebase.com/docs/web/guide/login/password.html) for username and password authentication.

1. When the user first opens the application, there should be a username and password text field, a button labeled "Register", and a button labeled "Login".
1. If the user has filled in information in both text fields, and clicks the register button, you are going to [create an account in Firebase](https://www.firebase.com/docs/web/guide/login/password.html#section-creating-accounts) for that user.
1. If the user has filled in information in both text fields, and clicks the register button, you are going to [authenticate](https://www.firebase.com/docs/web/guide/login/password.html#section-logging-in) that user. Notice in the docs that Firebase sends back an object into the `authData` function parameter. That will contain all the information about the user.
1. In the navigation bar, add a "Log out" link or button.
1. When the user clicks on the logout element, you will [unauthenticate](https://www.firebase.com/docs/web/api/firebase/unauth.html) the user.
1. When a user has been successfully authenticated, you can listen to that change of state with the [onAuth](https://www.firebase.com/docs/web/api/firebase/onauth.html) method.
1. When you have authenticated a user, show the music filtering view.
1. When the user has been unauthenticated, show the login view again.