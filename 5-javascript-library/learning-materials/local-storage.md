# Local Storage

* HTML5 web storage within the browser.
* The storage limit is at least 5MB and information is never transferred to the server.
* Web storage is per origin (per domain and protocol). All pages, from one origin, can store and access the same data.

## Two types of web storage - as objects
* window.localStorage - stores data with no expiration date
* window.sessionStorage - stores data for one session (data is lost when the browser tab is closed)

Data in local storage must be a string. 
`const dataToSave = JSON.stringify(obj)`

When data is retrieved, it must be converted back to an obj
`const parsedString = JSON.parse(stringOfData)`

Example code: [html](ls.html) and [js](ls.js)

## Methods

* `localStorage.setItem("lastname", "Smith");`
* `localStorage.getItem("lastname");`
* `localStorage.removeItem("lastname");`
* `localStorage.clear()` - empties the entire storage object for that domain.
* `key` and `length` are available

## Strategy
* Create an object to store your data (database)
* Add propeties to the object to hold arrays/objects of objects (tables)
* Add objects/values to each of the arrays (data)


## Example
[Web Storage](https://mdn.github.io/dom-examples/web-storage/) 


## Resources
* [JavaScript Storage Interface sessionStorage localStorage Tutorial](https://www.youtube.com/watch?v=klLMeL7I4O0)
* [How To Store A JavaScript Array in Local Storage](https://www.youtube.com/watch?v=RbfG7NLKDgQ)
* [Using Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
* [Local Storage MDN](https://developer.mozilla.org/en-US/docs/Web/API/Storage/LocalStorage)


### Try It Out
* Keep in mind, **How dry can you make your code?**
1. Start with the example code to get you going. Keep it or not - the choice is yours.
1. Create a list of 10 tools with name and price. Each tool should be an object.
1. Loop through the tools and add to the `daisyBrothersToolshop` object.

1. Check for the `daisyBrothersToolshop` in local storage. 
1. If `daisyBrothersToolshop` does not exist, add it. Be sure to include the tools.

 
1. Create a page that displays the tools with an option to buy.
1. Select buy button and add tool to the order.
1. Create a page to show the order and use the local shared object to display items and user information. 
1. Allow user to delete items from the order page.


## Bonus
1. Create a user name, email, zipcode input and accept from user. Update local shared object with details.
1. Upon loading page, if shared object does not exist, show button to load tools. Once tools are loaded, remove button and show tools.
