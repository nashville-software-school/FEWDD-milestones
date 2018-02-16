# Seasonal Sales

## Setup

These commands are a helpful quick start. You may choose to ignore them completely and create your own directory structure. If you choose to use this recommendation, just copy the commands below and paste. It doesn't matter what directory you are currently in.

```bash
mkdir -p ~/workspace/exercises/spa/seasonal-sales && cd $_
touch index.html
touch seasonal-sales.js
```

## Instructions

Your job is to build a department store's web page that lists products, the name of the department each one is in, and the price.

The two JSON representations above should be in two files: `products.json`, and `categories.json` (see below). Use Javascript's `XMLHttpRequest()` method to read the data from those files, and then build HTML representations of the data.

> Contents of `products.json` file

```js
{
  "products": [
    {
      "id": 0,
      "name": "Kids socks",
      "price": 4.99,
      "category_id": 1
    },
    {
      "id": 1,
      "name": "Mens socks",
      "price": 6.99,
      "category_id": 1
    },
    {
      "id": 2,
      "name": "Ladies socks",
      "price": 7.99,
      "category_id": 1
    },
    {
      "id": 3,
      "name": "Foot stool",
      "price": 14.99,
      "category_id": 2
    },
    {
      "id": 4,
      "name": "Lava lamp",
      "price": 9.99,
      "category_id": 2
    },
    {
      "id": 5,
      "name": "3 drawer dresser",
      "price": 64.99,
      "category_id": 2
    },
    {
      "id": 6,
      "name": "Air filter",
      "price": 6.99,
      "category_id": 3
    },
    {
      "id": 7,
      "name": "Surge protector",
      "price": 8.99,
      "category_id": 3
    },
    {
      "id": 8,
      "name": "Plastic storage bin",
      "price": 3.99,
      "category_id": 3
    },
    {
      "id": 9,
      "name": "Light bulb",
      "price": 1.99,
      "category_id": 3
    }
  ]
}
```

> Contents of `categories.json` file

```js
{
  "categories": [
    {
      "id": 1,
      "name": "Apparel",
      "season_discount": "Winter",
      "discount": 0.10
    },
    {
      "id": 2,
      "name": "Furniture",
      "season_discount": "Autumn",
      "discount": 0.25
    },
    {
      "id": 3,
      "name": "Household",
      "season_discount": "Spring",
      "discount": 0.15
    }
  ]
}
```

## Discounts

Now that you've populate the view with all of the products, put a `<select>` element at the top of the page that contains all possible values of the `season_discount` key in the categories file. As soon as you select one of the seasons, all prices on the page should immediately be discounted by the corresponding percentage.

For example, when _Spring_ is chosen, all products in the corresponding Household category should have their prices updated with a 15% discount off the base price.

## Submit Your Exercise
Upon completion, [submit your exercise](http://bit.ly/NSSExerciseSubmission) for review.