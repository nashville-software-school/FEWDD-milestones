# The Static Web JavaScript Quiz

## Setup

When you are ready to start the quiz, request the Github Classroom link from your instructor. After you've successfully created the repository on Github for your quiz, execute the following command.

```bash
mkdir -p ~/workspace/quizzes/static-web/javascript && cd $_
```

1. Your instructor will send you the Github Classroom link that will create a blank repository to hold your quiz.
1. Once your repository is created, you will see the *Quick Setup* page.
1. Copy the commands for the section labeled **…or create a new repository on the command line**
1. Paste those commands into your terminal and press **return** to make sure the last command gets executed.
1. Now run the following commands.

```
git checkout -b quiz
touch index.html
touch quiz.js
```

You are now ready to work in the `quiz` branch.

When your work in complete, push up the branch (`git push origin quiz`) and submit the pull request on Github.

## Instructions

Create a `tree` function that should build a pine tree out of a character in the Chrome dev tools console. It accepts a single object as an argument. The object should have two key/value pairs.

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
