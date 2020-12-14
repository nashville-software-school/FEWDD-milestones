# Firebase Authentication

[Firebase](https://firebase.google.com/) is a development platform provided by Google. It offers a wide array of tools for app development, data/file storage and even machine learning. We will be using firebase for user authentication.

The subject of authentication, particularly authentication using a _third-party provider_ such as Firebase, is both broad and deep. There are several approaches to authentication and each approach is non-trivial to implement. While the approach we cover in this course is a perfectly feasible way to implement authentication, it is by no means an exhaustive look at the topic.

## Authentication vs Authorization

_Authentication_ is the process of verifying a user is who they say they are. This is often done by requesting the user to provide a username and password, but put more generally the user must demonstrate that they _know something that only they should know_ or that they _posses something that only they should have_.

_Authorization_ is the process of determining if a user should be _allowed to perform_ an action. Authorization requires that a user be authenticated since the application cannot check a user permissions until it knows who the user is.

## Firebase Authentication Setup

Firebase provides an _identity store_ for user emails and passwords. Using Firebase relieves our application of the burden (and risk) of storing user credentials. Firebase also offers a set of tools for setting password strength requirements, for letting users change passwords and many other common credential management tools that we would otherwise have to build. In this course we will only touch the surface of the tools that Firebase offers.

> **NOTE:** In addition to email/password authentication, Firebase provides tools to allow authentication via Google, Github and several other third-party auth providers. We will not cover these alternatives in this course, but there is extensive documentation on the Firebase website.

### Firebase Account

Before you get started using Firebase, you must create an account. Go to https://firebase.google.com/ and click the large `Getting started` button to create an account. You will need to login with a Google username/password. If you do not have a Google account, there is an option to create on on the Google sign in form.

### Firebase Project

A Firebase identity store is contained within a _Project_. Once you have logged into Firebase, click the `Add project` button to create new project.


### Project Id and Web API Key

Once you've created the project, you should see a menu on the left side of the screen. Select the gear image near the top of this menu and choose the `Project settings` options.

On the Project settings page take note of the `Project ID` and the `Web API Key`. Remember how you got here because you will need these values later.

### Setting up Authentication

1. From the Project Overview page, select `Authentication` in the menu on the left.
1. From the Authentication page, select the `Sign-in method` tab.
1. Hover your mouse over the `Email/password` sign-in provider and click the pencil icon.
1. In the window that appears, turn on the `Enable` switch, but make sure the `Email link (passwordless sign-in)` switch is turned off.
1. Click the `Save` button.


## Project Overview

Now that we have some initial setup out of the way, let's take some time to think about what we are going to build.

Our goal is to build an app using with React on the client and Firebase for our database and authentication.

![Firebase auth flow](./firebase-auth-architecture-small-1.png)

> Source: https://stackoverflow.com/questions/42336950/firebase-authentication-jwt-with-net-core/42410233#42410233

> **NOTE:** The process of authentication is very complex. It is very unlikely that you will understand very much of it right away.

### The Login Process

1. The react application (running on a user's browser) sends a request to the Firebase server containing the user's email and password.
1. Firebase communicates with the Google API server to confirm that the user's credentials are valid.
1. Once confirmed, Firebase sends the user information to the React application.
1. The react application stores the user information in the browser's `sessionStorage`. **The user is now _logged in_** to the app.
1. When the react application needs to make a request to the database server, it passes the user ID.



Your instructor will take you through the parts of the demo application and describe how it is setup to use Firebase authentication.





### Firebase Authentication Checklist

#### In Firebase

1. Create a new Firebase project.
1. Enable the `Email/Password` `Sign-in method` (an or other verifications)
1. Setup Rules


#### In the React Client App

1. Use npm to install the firebase library: `npm install firebase`.
1. Create a `FirebaseProvider` component and a `FirebaseContext` context in a `FirebaseProvider.js` file.
1. Add `login`, `logout` and `register` functions to the `FirebaseProvider`.
1. Add an `isLoggedIn` boolean to the `FirebaseProvider`'s state.
1. Add `firebaseConfig.js` with your Firebase project credentials.
1. Initialize firebase `index.js` with ```firebase.initializeApp(firebaseConfig);```
1. 