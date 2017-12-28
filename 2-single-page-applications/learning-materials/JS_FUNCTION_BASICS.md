# Functions in JavaScript

Functions are reusable code. JavaScript written without functions executes one line of code at a time until complete.

```js
// Display the first and last name of the following people
let first_name = "Jamal";
let last_name = "Haynes";

console.log(`${first_name} ${last_name}`);

let first_name = "Debra";
let last_name = "Gordon";

console.log(`${first_name} ${last_name}`);

let first_name = "Svetlana";
let last_name = "Irinov";

console.log(`${first_name} ${last_name}`);

let first_name = "Sequina";
let last_name = "Rodriguez";

console.log(`${first_name} ${last_name}`);
```

The inefficiencies of this code are obvious - from needlessly repeating the same code, to the high probability of human error as we increase the number of times we need to perform the operation.

```js
let first_name = "Jessawynne";
let last_name = "Parker";

// Oops, I misspelled first_name. My program now has an error, or bug, in it.
console.log(`${fist_name} ${last_name}`); 
```

When the same lines of code need to be repeated, even just once, then you put those lines of code in a function. You provide a name for a function, and it needs to be descriptive enough to understand what its purpose is.

```js
function displayName (first_name, last_name) {
  /*
    Since the code needed to display a person's name is written
    only once, we never have to worry about a developer 
    misspelling a word, or missing a character because she
    needed to write the code for the 34th time.
  */
  console.log(`${first_name} ${last_name}`);
}

displayName("Jamal", "Haynes");
displayName("Debra", "Gordon");
displayName("Svetlana", "Irinov");
displayName("Sequina", "Rodriguez");
displayName("Jessawynne", "Parker");
```

## Pure Functions

A pure function is one that is consistent and has no effect on anything else in your system.

```js
const bugSquasher = function (bug, squasher) {
    return `The ${bug} was squashed by a ${squasher}`
}
```

That function will return the exact same value, given the same inputs every time.

```js
bugSquasher("Beetle", "Boot")
> The Beetle was squashed by the Boot

bugSquasher("Beetle", "Boot")
> The Beetle was squashed by the Boot // Yep, same output

bugSquasher("Spider", "thing next to my hand when I saw it")
> The Spider was squashed by the thing next to my hand when I saw it
```

## Impure Functions

Impure functions produce different results upon execution...

```js
const noise = function () {
  return Math.random()
}

console.log(noise())   // ​​​​​0.8521188650079663​​​​​
console.log(noise())   // 0.311073492244087​​​​​
```

or affect other parts of the system when executed.

```js
const updateDOM = function (message) {
    const el = document.getElementById("messages")
    el.innerHTML += message
}
```

