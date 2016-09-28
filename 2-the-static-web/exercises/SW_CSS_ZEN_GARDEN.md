# The Zen Garden Challenge

Visit http://www.csszengarden.com/ and explore some of the designs.

You will create your own version of the CSS Zen Garden. Download the HTML and CSS files from the site. The only rule: you may only change the CSS; not the HTML. 


## Setup

Run the following command in your terminal:

```bash
mkdir -p ~/workspace/quizzes/static-web/zengarden && cd $_
```

This will create a project folder and cd you into it.
When you are ready to start the quiz, request the Github Classroom link from your instructor  
+ Once your repository is created on GitHub, copy the list of commands under **"..or create a new repository on the command line"** by clicking on the clipboard icon  
+ Paste the commands into your terminal. This will create a README.md file, add it, commit it, connect your local reop to GitHub, and set you up to push up the changes. (If the last command, `git push origin master` isn't automatically executed, hit enter/return to run it).

All of your quiz work should be on a branch, NOT on master. To do this, type:

```bash
git checkout -b quiz
touch index.html
touch style.css
mkdir images
```

You are now ready to work in the `quiz` branch. 

When your work in complete, push up the branch (`git push origin quiz`) and submit the pull request on Github.

Note: In an effort to keep this project like the Zen Garden website, this exercise does not have a styles folder. 
