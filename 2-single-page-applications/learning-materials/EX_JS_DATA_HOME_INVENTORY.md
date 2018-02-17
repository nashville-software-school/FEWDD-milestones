# Data: Home Inventory

To practice working with data, you are going to build a home inventory program. You will create a database of unique, or cool, items in your home, their location, and why they are special. By the end of this practice exercise, you will be able to store a JSON database in the local storage of your browser so that it can be retrieved, and modified again, at any time in the future.

### Setup

In a new directory of your choosing, create an HTML file with a name of `index.html`, and a JavaScript file with a name of `storage.js`. Use a `<script>` tag to load your JavaScript file in the HTML.

In the JavaScript file, you are going to build the database using the guide below.

### Define your Database

A database is a collection of data sets which are often related to each other. Start by defining the collections of data. This is how you will be defining databases in JavaScript until you learn how to use 3rd-party database systems later in the course.

```js
const HomeInventoryDatabase = {
    furniture: [],
    crafts: [],
    electronics: []
}
```

With this data structure, `furniture` is going to be a set of similar data, likewise for `crafts` and `electronics`. We use these sets of data to store similar information together so that when we want to display information to a human, getting the information is fast and easy.

In professional database systems, each of those set (i.e. furniture, crafts, and electronics) are called tables of data. A database is a collection of tables.

### Defining Data Items

Each item that you want to store in your home inventory database will be defined as a standard object. First, I'm going to define two data items. One will be stored in the `crafts` tables in my database, and the other will be stored in the `furniture` table.

```js
// The ink well is a craft data item
const vintageInkwell = {
  name: "Vintage Ink Well",
  location: "Writing desk",
  description: "I enjoy this inkwell because it belonged to my grandfather and holds enough ink to survive weeks of writing."
}

// The writing desk is a furniture data item
const writingDesk = {
  name: "Shaker Writing Desk",
  location: "Bedroom",
  description: "This antique desk is special because I found and purchased it with my wife at an Ohio Amish auction."
}
```

Your task is to define at least 10 data items to represent things that you have in your home.

### Adding Data Items to the Database

Next, place each object that you have defined into the appropriate database table. I'm going to add the two items I created above into the appropriate tables. Remember, I'm using the term *table* because we're building a database, but the collections are actually arrays, so I can use the `push()` method.

```js
HomeInventoryDatabase.crafts.push(vintageInkwell)
HomeInventoryDatabase.furniture.push(writingDesk)
```

## Local Storage

Now it's time to make your database persistent. Making the data persistent is important because if you just use the code you've written so far, and make changes to the data sets, each time you reload your application in the browser, all of your modifications are gone.

Putting your database in the browser's local storage allows you to make modifications over time and have the data always be up to date with all of your changes.

### JSON.stringify to Store the Data

The `JSON` object allows you to take an in-memory object, and convert it to a string representation of the object that can be saved in local storage.

```js
/*
    Convert the Object into a string.
    Local storage can only store strings.
*/
const HomeInventoryDatabaseString = JSON.stringify(HomeInventory)

/*
    Create a key in local storage named HomeInventory, and store the string
    version of your inventory database as the value
*/
localStorage.setItem("HomeInventory", homeInventoryString)
```

### JSON.parse to Read the Data

To get the value back out of local storage so that it can be used in our application as an actual object again, we need to use the `getItem()` method. We send in an argument value that is the name of the key we want to retrieve.

```js
// Get the string version of the database
const databaseString = localStorage.getItem("HomeInventory")

// Use JSON.parse() to convert the string back into an object
const HomeInventoryDatabase = JSON.parse(databaseString)
```

The above two JavaScript statements can be combined once you feel comfortable with understanding how they work.

```js
// or, in combined syntax
const HomeInventoryDatabase = JSON.parse(localStorage.getItem("HomeInventory"))
```

## Adding to your Database

Now that you have stored your database, create a 2nd JavaScript file named `additional-storage.js` and include it in your HTML.

Write the code in this new file to complete the following tasks.

1. Load the database from local storage.
1. Parse the string into a JavaScript object.
1. Add one new object to each type array in your database (e.g. add a new piece of furniture).
1. Store the new database back into local storage.

## Submit Your Exercise
Upon completion, [submit your exercise](http://bit.ly/NSSExerciseSubmission) for review.