# Foodie List

## Setup

These commands are a helpful quick start. You may choose to ignore them completely and create your own directory structure. If you choose to use this recommendation, just copy the commands below and paste. It doesn't matter what directory you are currently in.

```bash
mkdir -p ~/workspace/exercises/spa/foodie-list && cd $_
touch index.html
touch foodie-list.js
```

## Instructions

Your job is to build a a web page where a user can see all the restaurants they have been to and filter by city. They can also add additional restaurants.

The two JSON representations above should be in two files: `restaurants.json`, and `cities.json` (see below). Use Javascript's `XMLHttpRequest()` method to read the data from those files, and then build HTML representations of the data.

> Contents of `restaurants.json` file

```js
{
  "products": [
    {
      "id": 1,
      "restaurant": "Schaefer, DuBuque and Satterfield",
      "city_id": 4,
      "date_visited": "6/25/2017",
      "my_rating": 4.52
    }, {
      "id": 2,
      "restaurant": "Hegmann-Kuphal",
      "city_id": 5,
      "date_visited": "7/3/2016",
      "my_rating": 1.26
    }, {
      "id": 3,
      "restaurant": "Bergnaum-Bradtke",
      "city_id": 3,
      "date_visited": "3/20/2016",
      "my_rating": 2.87
    }, {
      "id": 4,
      "restaurant": "Weissnat LLC",
      "city_id": 4,
      "date_visited": "11/29/2015",
      "my_rating": 6.18
    }, {
      "id": 5,
      "restaurant": "Farrell, Wunsch and Schmidt",
      "city_id": 10,
      "date_visited": "10/9/2015",
      "my_rating": 7.93
    }, {
      "id": 6,
      "restaurant": "Romaguera Group",
      "city_id": 2,
      "date_visited": "12/30/2016",
      "my_rating": 3.09
    }, {
      "id": 7,
      "restaurant": "Kovacek Inc",
      "city_id": 1,
      "date_visited": "5/29/2017",
      "my_rating": 6.87
    }, {
      "id": 8,
      "restaurant": "Kessler-Bahringer",
      "city_id": 7,
      "date_visited": "6/6/2017",
      "my_rating": 1.91
    }, {
      "id": 9,
      "restaurant": "Dickens, Pacocha and Cronin",
      "city_id": 3,
      "date_visited": "8/4/2016",
      "my_rating": 4.69
    }, {
      "id": 10,
      "restaurant": "Steuber Group",
      "city_id": 8,
      "date_visited": "6/5/2016",
      "my_rating": 8.08
    }, {
      "id": 11,
      "restaurant": "Lind-Wilderman",
      "city_id": 11,
      "date_visited": "11/16/2016",
      "my_rating": 1.66
    }, {
      "id": 12,
      "restaurant": "Koch, Stehr and Koepp",
      "city_id": 11,
      "date_visited": "11/19/2017",
      "my_rating": 1.78
    }, {
      "id": 13,
      "restaurant": "Okuneva, Langosh and Ebert",
      "city_id": 9,
      "date_visited": "7/14/2015",
      "my_rating": 5.7
    }, {
      "id": 14,
      "restaurant": "Heidenreich-Ziemann",
      "city_id": 5,
      "date_visited": "1/29/2017",
      "my_rating": 5.99
    }, {
      "id": 15,
      "restaurant": "Strosin Inc",
      "city_id": 5,
      "date_visited": "8/25/2015",
      "my_rating": 5.24
    }, {
      "id": 16,
      "restaurant": "Harris and Sons",
      "city_id": 4,
      "date_visited": "3/29/2016",
      "my_rating": 4.06
    }, {
      "id": 17,
      "restaurant": "Kuhlman, Mraz and Lakin",
      "city_id": 9,
      "date_visited": "8/20/2016",
      "my_rating": 3.64
    }, {
      "id": 18,
      "restaurant": "Cronin Group",
      "city_id": 5,
      "date_visited": "4/6/2017",
      "my_rating": 6.2
    }, {
      "id": 19,
      "restaurant": "Baumbach-Beier",
      "city_id": 2,
      "date_visited": "12/16/2015",
      "my_rating": 2.25
    }, {
      "id": 20,
      "restaurant": "Durgan, Feest and Jast",
      "city_id": 8,
      "date_visited": "1/25/2017",
      "my_rating": 6.63
    }, {
      "id": 21,
      "restaurant": "Bartoletti-Gislason",
      "city_id": 9,
      "date_visited": "1/3/2018",
      "my_rating": 8.3
    }, {
      "id": 22,
      "restaurant": "Lind, Rempel and Legros",
      "city_id": 3,
      "date_visited": "1/15/2017",
      "my_rating": 8.23
    }, {
      "id": 23,
      "restaurant": "Boyer-Kuphal",
      "city_id": 3,
      "date_visited": "10/29/2016",
      "my_rating": 5.52
    }, {
      "id": 24,
      "restaurant": "Bins-Cole",
      "city_id": 6,
      "date_visited": "1/21/2018",
      "my_rating": 4.33
    }, {
      "id": 25,
      "restaurant": "Swift Inc",
      "city_id": 4,
      "date_visited": "2/8/2016",
      "my_rating": 3.42
    }, {
      "id": 26,
      "restaurant": "Bergnaum-Waters",
      "city_id": 9,
      "date_visited": "8/12/2017",
      "my_rating": 5.99
    }, {
      "id": 27,
      "restaurant": "Hayes Group",
      "city_id": 3,
      "date_visited": "2/25/2017",
      "my_rating": 4.65
    }, {
      "id": 28,
      "restaurant": "Walter-Lubowitz",
      "city_id": 4,
      "date_visited": "2/7/2018",
      "my_rating": 1.18
    }, {
      "id": 29,
      "restaurant": "Hayes-Lang",
      "city_id": 10,
      "date_visited": "2/24/2016",
      "my_rating": 2.57
    }, {
      "id": 30,
      "restaurant": "Schroeder-Kozey",
      "city_id": 5,
      "date_visited": "3/18/2017",
      "my_rating": 3.29
    }, {
      "id": 31,
      "restaurant": "Rodriguez, Jones and Rath",
      "city_id": 3,
      "date_visited": "3/14/2016",
      "my_rating": 6.0
    }, {
      "id": 32,
      "restaurant": "Jacobi-Price",
      "city_id": 11,
      "date_visited": "9/13/2015",
      "my_rating": 1.85
    }, {
      "id": 33,
      "restaurant": "Metz, White and Lowe",
      "city_id": 8,
      "date_visited": "10/7/2015",
      "my_rating": 1.85
    }
  ]
}
```

> Contents of `cities.json` file

```js
{
  "cities": [
    {
      "id": 1,
      "city": "Itupeva",
      "trip_purpose": "lectus vestibulum quam sapien varius ut blandit non interdum in"
    }, {
      "id": 2,
      "city": "Changsheng",
      "trip_purpose": "blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu"
    }, {
      "id": 3,
      "city": "Mingelchaur",
      "trip_purpose": "odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel"
    }, {
      "id": 4,
      "city": "Bigoudine",
      "trip_purpose": "eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec"
    }, {
      "id": 5,
      "city": "La Soledad",
      "trip_purpose": "dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat"
    }, {
      "id": 6,
      "city": "Shengshan",
      "trip_purpose": "mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id"
    }, {
      "id": 7,
      "city": "Nashville",
      "trip_purpose": "magna ac consequat metus sapien ut nunc vestibulum ante ipsum"
    }, {
      "id": 8,
      "city": "Rabat",
      "trip_purpose": "quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo"
    }, {
      "id": 9,
      "city": "Hamilton",
      "trip_purpose": "vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac"
    }, {
      "id": 10,
      "city": "El Llano",
      "trip_purpose": "augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec"
    }, {
      "id": 11,
      "city": "Longwu",
      "trip_purpose": "felis donec semper sapien a libero nam dui proin leo odio porttitor"
    }
  ]
}
```

## MVP

1. When the user first visits the page, all restaurants should be listed in order of their rating(ratings are from 1 to 10). The restaurants are displayed from highest rated to lowest rated.
1. There should be a `<select>` element on the page with the list of cities. When a user selects a city, the restaurants displayed should be filtered so that only the restaurants from the selected city are displayed. Make sure there is an option for `All` so that a user can go back to viewing all the restaurants.
1. If the user selects `Nashville`, there should an icon or text that appears on the page that shows the user that this is their hometown.
1. There should be a form for a user to add more restaurants with a `<select>` element for picking which city the new restaurant is in and all other required fields. When the user submits this form, the restaurant should appear on the page(unless the view is currently filtered to show a city where the newly restaurant is not in). All fields in the form should also be cleared so that the form is ready for the user to add the next restaurant.


## BONUS

1. Provide a way for the user to add new cities. You can either add another form on the page or incorporate it into the existing form for adding restaurants.
1. Add a way for a user to filter restaurants by rating.

## Submit Your Exercise
Upon completion, [submit your exercise](http://bit.ly/NSSExerciseSubmission) for review.
