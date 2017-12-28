# Overly Excited Function Exercises

## Requirements

For this exercise, you need to create a single JavaScript function named `addExcitement` that will use `console.log()` to print out a sentence to the browser console.

1. If you haven't done so yet, create the `workspace/javascript/overly-excited` directory structure in your home directory. Open your terminal and enter in the following command.

    ```sh
    mkdir -p ~/workspace/javascript/overly-excited
    ```

1. Now that you have created the directory, you want to change to that directory so that you can add files to it.

    ```sh
    cd ~/workspace/javascript/overly-excited
    ```

1. Create an `index.html` file in this directory with the [touch](http://www.linfo.org/touch.html) command.
1. Create an `overly-excited.js` file in this directory with the touch command.
1. Copy the following code and paste it into the `index.html` file. Notice that the `overly-excited.js` file is properly linked so that when you load this HTML file in a web browser, the logic in that file will be executed.

    ```html
    <!DOCTYPE html>
    <html>
    <head>
        <title>Overly Excited</title>
    </head>
    <body>

        <script src="overly-excited.js"></script>
    </body>
    </html>
    ```

1. Open the `index.html` file in your web browser.
1. At this point, you will simply see a blank web page because you have no content in the HTML file. Open your developer tools using the *Option+Command+I* keyboard shortcut.
1. At the top of the developer tools panel, you will see the word *Console*. Click on that word. The `console.log()` statement will output any message into this panel in your developer tools. You can try it out immediately by clicking in the Console panel, and typing `console.log("Hello, world!")`, and then pressing your return key.

## Stacking Words

Create an `addExcitement` function that should `console.log()` rows of words. It should take an array containing the words of a sentence and output them in the developer console.

> **Example output:**  
>  
> The   
> The walrus    
> The walrus danced      
> The walrus danced through     
> The walrus danced through the     
> The walrus danced through the trees         
> The walrus danced through the trees in            
> The walrus danced through the trees in the        
> The walrus danced through the trees in the light  
> The walrus danced through the trees in the light of   
> The walrus danced through the trees in the light of the    
> The walrus danced through the trees in the light of the moon  
> ...

Paste the following code into overly-excited.js

```js
// Create an array that contains the words in the sentence
let sentence = [];

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
function addExcitement (theWordArray) {

}

// Invoke the function and pass in the array
addExcitement(sentence);
```

## Adding Conditions to the Loop

Then add logic to `addExcitement` that places an exclamation point (!) after every third word. This will require you to do some basic math in JavaScript, and use an `if` statement.

Your job is to read the following English statement and write the equivalent in JavaSript code to make it work.

> If the current value of the [counter variable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for) can be evenly divided by 3 - using the JavaScript [remainder](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder) operator - then add a single exclamation point (!) to the output.

> **Example output:**  
>  
> The               
> The walrus            
> The walrus danced!                
> The walrus danced! through            
> The walrus danced! through the            
> The walrus danced! through the trees!         
> The walrus danced! through the trees! in          
> The walrus danced! through the trees! in the          
> The walrus danced! through the trees! in the light!           
> The walrus danced! through the trees! in the light! of            
> The walrus danced! through the trees! in the light! of the        
> The walrus danced! through the trees! in the light! of the moon!      
> ...


## Even More Excited

Add logic in the `addExcitement` function to the increase the number of exclamation points after every third word. The number of exclamation points (!) will be determined by how many times the counter variable can be divided by 3. 

> **Example output:**  
>  
> The                   
> The walrus            
> The walrus danced!            
> The walrus danced! through            
> The walrus danced! through the            
> The walrus danced! through the trees!!            
> The walrus danced! through the trees!! in         
> The walrus danced! through the trees!! in the             
> The walrus danced! through the trees!! in the light!!!            
> The walrus danced! through the trees!! in the light!!! of             
> The walrus danced! through the trees!! in the light!!! of the             
> The walrus danced! through the trees!! in the light!!! of the moon!!!!            
> ...

## Function Arguments

Add a new argument to the function so that a developer can specify which character should be displayed instead of it always being an exclamation point.

```js
// I want to use a question mark
addExcitement(sentence, "?");
```

> **Example output:**  
>  
> The                   
> The walrus            
> The walrus danced?            
> The walrus danced? through            
> The walrus danced? through the            
> The walrus danced? through the trees?? 
>
> etc.. 

## Another Sentence

Now you should define another variable that will hold an array of different words than your existing sentence. Perhaps name the variable `betterSentence`, or `nextSentence`.

Invoke your function for a second time, passing in the new sentence variable and a different special character.

```js
// Example
addExcitement(nextSentence, "&");
```

## Arrow Functions

Watch the video about arrow functions, and see if you can rewrite `addExcitement` using that syntax.

```js
// Complete this arrow function template to make your
// function work with it.
let addExcitement = () => { };
```
