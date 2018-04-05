# Getting Started with React

We will be using `create-react-app`

## JSX
XML-like syntax that allows mixing JS and HTML together

```
class HelloMessage extends React.Component {
  render() {
    return (
      <div>
        {console.log("I am JS")}
        Hello {this.props.name}
      </div>
    );
  }
}

//what to render and where
ReactDOM.render(
  <HelloMessage name="Brenda" />,
  mountNode
);
```

[Babel example](https://babeljs.io/repl/#?presets=react&code_lz=MYewdgzgLgBApgGzgWzmWBeGAeAFgRgD4AJRBEAGhgHcQAnBAEwEJsB6AwgbgChRJY_KAEMAlmDh0YWRiGABXVOgB0AczhQAokiVQAQgE8AkowAUAcjogQUcwEpeAJTjDgUACIB5ALLK6aRklTRBQ0KCohMQk6Bx4gA)

## Getting Started
1. `npm install -g create-react-app`
2. Chrome Dev Tools - React
   1. Inspect Element and view components.
      * https://Airbnb.com
      * http://bleacherreport.com
      * https://flipboard.com
      * https://imgur.com
      * https://github.com/facebook/react/wiki/Sites-Using-React
3. JSX and ES6 syntac highlight - Babel
4. React will compile (like Browserify). Using React-Create-App, Webpack runs behind the scenes (like Grunt, it is a task runner).
5. Within dev directory, `create-react-app helloWorld`
6. React has a virtual dom
   * Copy of dom for React comparison
   * Only makes changes if necessary

## Components
* Must have at least one method - `render()`
   * Render is the "what HTML to display"
   * `render(whatComponent, where to put)`
   * Within index.js (apply to the DOM)

    ```jsx
   ReactDOM.render(<App />, document.getElementById('root'));
   ```

   * Within other components:

   ```jsx
   return (
            <div className="box-container"></div>
   )
   ```

* Components get own file - best practice
* Use of `import Taco from './filename'`
* Use of `export default ComponentName`

## JSX
* Write HTML inside Javascript
* Otherwise, use `React.createElement()`
* **Remember** - `return` only returns one element.
   * Use parens for multilines (avoid automatic semi colons).
   * Wrap all in an element like `<div>`

## Some Rules
* To avoid confusion with class attribute must use: `className`
* React uses camel case.
* Classes are named with a capital letter: App.js
* Everything within `{ }` becomes an object

