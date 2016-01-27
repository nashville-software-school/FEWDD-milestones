# Basic Array Methods

## Setup

These commands are a helpful quick start. You may choose to ignore them completely and create your own directory structure. If you choose to use this recommendation, just copy the commands below and paste. It doesn't matter what directory you are currently in.

### Vagrant machine

```bash
mkdir -p /vagrant/exercises/spa/event-handlers && cd $_
touch index.html
touch events.js
touch events.css
```

### Host machine (students not using Vagrant)

```bash
mkdir -p ~/workspace/exercises/spa/event-handlers && cd $_
touch index.html
touch events.js
touch events.css
```

## Instructions

1. Create an HTML page that contains a text area and a button labeled *Create*.
1. When the user enters in text into the text area and then clicks the create button, create a new card element in the DOM - similar to the quiz and group project. You decide the height/width of the card.
1. When the user selects a color from the first input, then the background color of that card, and no other cards, should change to the color chosen.
1. When the user selects a color from the second input, then the font color of that card, and no other cards, should change to the color chosen.
1. When the user clicks the *Delete* button, the containing card, and no other cards, should then be removed from the DOM. Not just made invisible, actually removed from the DOM.