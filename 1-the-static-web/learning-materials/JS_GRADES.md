# Student grades

## Setup

These commands are a helpful quick start. You may choose to ignore them completely and create your own directory structure. If you choose to use this recommendation, just copy the commands below. It doesn't matter what directory you are currently in.

```bash
mkdir -p ~/workspace/exercises/the-static-web/grades && cd $_
touch index.html
touch grades.js
```

## Requirements

Loop over an array of student grades (values from 50-100) and keep track of how many students get each grade in an object named `grades`.

* A score of 50-60 is an F
* A score of 61-70 is a D
* A score of 71-80 is a C
* A score of 81-90 is a B
* A score of 91-100 is an A

Start with array of random scores in your JavaScript

```js
const scores = [82, 71, 62, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87, 60]
const grades = {} // You'll need to change this line of code

for (let i = 0; i < scores.length; i++) {
    /*
      If the score is greater than 90, increment grades.A by 1.

      You can use a series of `if/then` blocks, but you could
      also achieve this with a switch statement.
    */
}
```

Use `console.log()` to output the following criteria to the browser console.

1. How many of each grade? Accomplish this with a `for..in` loop.
1. What is the lowest score? Sort the array and find out.
1. What is the highest score?
1. Which grade had the most students achieve it? Use an `if` statment, and a `currentGradeCount` variable, in your `for..in` loop to see if the current grade's value is higher than the last one.
1. Which grade had the fewest students achieve it?

## Submit Your Exercise
Upon completion, [submit your exercise](http://bit.ly/NSSExerciseSubmission) for review.