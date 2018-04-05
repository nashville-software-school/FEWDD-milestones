# Wide World Travel Guides

## Adding State

* Use `setState()` for the zip code and temperature.
* Allow the user to change the zip code.
* When the state changes, make a call to the weather api for a new temperature.
* Update temperature state.


### Be sure to `npm start`
This will build your app and show in the browser. Changes you make will be automatically displayed.

**Pro-Tip**
* Use `componentDidMount()` to call the method to get the weather.
* Whenever `setState()` is called, the component re-renders.
* You will be creating a `constructor` method and use `super()`
* Write out the flow. For example:
```
   // Flow Notes
   // component load and should show "loading"
   // then call to get joke
   // handle the error also
   // when joke shows up, display JokeSetup with tellme button
   // click on tellme, tellme should go away and
   // punchline should show along with "get new joke"
   ```