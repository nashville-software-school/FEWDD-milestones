######  <a id="challenge-1"></a>
# Individual Challenge \#1

## Checkers using jQuery

### Setup
These commands are a helpful quick start. You may choose to ignore them completely and create your own directory structure. If you choose to use this recommendation, just copy the commands below and paste. It doesn't matter what directory you are currently in.

#### Vagrant machine

```bash
mkdir -p /vagrant/exercises/mjd/checkers && cd $_
```

#### Host machine (students not using Vagrant)

```bash
mkdir -p ~/workspace/exercises/mjd/checkers && cd $_
```

1. Use `npm` to install jQuery, Browserify, and any other packages you need to compile your modules.

### Instructions
Create a checkers game using only jQuery to manipulate the DOM. Augment your javascript files using Browserify. You should have a minimum of three javascript files that handle aspects of the game. Create at least two object constructors, one named Game and one named Player that will utilize methods and properties from your augmented files.

### Requirements

1. Create a grid of sixty-four boxes
1. Alternate colors of the boxes
1. Initialize the board with 12 pieces on either side
1. Only one side may move at a time
1. To move a piece you can drag and drop
1. Moves must comply with the following rules:
    1. Pieces may only move diagonally towards opponent
    1. Pieces may move only one square (unless capturing)
    1. When a piece is jumped it is removed from the board
    1. Allow for multiple jumps
    1. If piece is in a position to capture it must make the move (if more than one capture is available the player may choose)
    1. When a piece reaches the furthest row from the player it becomes a king
    1. Kings may move forward and backwards
    1. Kings may combine captures forward and backwards
    1. A player wins when their opponent can no longer make a move
1. When a win happens:
    1. Alert the players who won
    1. Disallow any further clicks on the game board
    1. Display a `play again` button that resets the game

*Bonus* Save game stats and output them when a player wins.