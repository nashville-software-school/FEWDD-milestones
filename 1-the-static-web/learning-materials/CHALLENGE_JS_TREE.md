# Challenge: JavaScript, HTML, CSS

## Setup

Quick Start: Run the following command in your terminal:

```bash
mkdir -p ~/workspace/challenges/ && cd $_
```

1. Once your repository is created on GitHub, you will see the *Quick Setup* page.
1. Copy the commands for the section labeled **…or create a new repository on the command line**
1. Paste those commands into your terminal and press **return** to make sure the last command gets executed.
1. Now run the following commands.

```
git checkout -b challenge
touch index.html
```

You are now ready to work in the `challenge` branch.

If you would like to have your work reviewed, push up the branch (git push origin challenge) and submit a pull request on Github and slack the instruction team requesting a review. Your work does not need to be complete to receive feedback.

## Instructions

It is absolutely critical that you read each of these requirements because as a professional you will be expected to completely understand what you are expected to do. If you submit code that does not fulfill the requirements, you will be sent to your room with no dinner.

Create a `tree` function that should build a pine tree out of a character in the Chrome dev tools console.

### It accepts a single object as an argument. The object should have two key/value pairs.

1. A key that specifies the height of the pine tree.
1. The value for the height of the tree should be from user input in a `<input type="text">` field in the DOM.
1. A key that specifies which character to use to build the pine tree.
1. The character to use should be from user input in a `<input type="text">` field in the DOM.

Once the user enters in a number, and a character, the user can either then just press the enter key _(as long as the cursor is in one of the input fields)_, or click a button that is labeled "Grow your tree" and the tree should be shown in the console. This requires you to add an event listener to the button, as well as an event listener for the enter/return key.

If either of the input fields does not have a value in it when the user presses the enter key, or presses the button, then display an alert stating that both fields must have a value.

<div>
    <input type="text" style="width: 40%" placeholder="How tall should the tree be?">
</div>
<div>
    <input type="text" style="width: 40%" placeholder="Which character should be used?">
</div>

<button>Grow your tree</button>

##### Example

Here's what the pine tree should look like when you specify a height of 7, and use the asterisk character.

```js
      *
     ***
    *****
   *******
  *********
 ***********
*************
```

### Bonus - if you dare
1. Input a word or phrase and display the characters in the tree shape. There could be several different answers to this bonus, you decide.