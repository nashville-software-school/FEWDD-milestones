# Wide World Travel Guides

## Part 2: Using props

**This is a continuation of part 1**

## Setup

Add the follow data as a variable. You will need to display all three pieces of information about each book.

```
{
  "guides": [{
    "type": "city",
    "title": "Paris on $10 a Day",
    "price": 18.99
  }, {
    "type": "city",
    "title": "Venice: Canals and Stuff",
    "price": 14.50
  }, {
    "type": "city",
    "title": "Visiting Hoboken: Why?",
    "price": 1.25
  }, {
    "type": "country",
    "title": "Touring Brazil's Empty Olympic Stadiums",
    "price": 13.50
  }, {
    "type": "country",
    "title": "'Murica: Only Commies Travel Abroad",
    "price": 20.00
  }, {
    "type": "country",
    "title": "Australia: Every Animal Here Can Kill You",
    "price": 18.00
  }, {
    "type": "region",
    "title": "Backpacking Europe on Two Showers a Week",
    "price": 12.48
  }, {
    "type": "region",
    "title": "Rainforests of Cental America",
    "price": 15.00
  }, {
    "type": "region",
    "title": "The Evil Genius Guide to Taking over the Tri City Area",
    "price": 13.49
  }]
}
```


### Be sure to `npm start`
This will build your app and show in the browser. Changes you make will be automatically displayed.


## Requirements

* Use React to list a collection of travel guides in the DOM.
* Pass the book information to the component as props.
* Build a component that will loop through the data and display all book titles, type of book, and the price for the book.

**Pro Tip**
Consider JS array methods.

**Bonus**
* Create a second component for the actual book information. Pass the individual book data as props and display.
* Contain the book information in a `card` format and incorporate a js library for styling.

