## Setup

### Create a new branch

`git checkout -b version10`

## Requirements

Refactor Music History, or choose to rebuild from scratch (whichever you deem most effecient), using Angular.

1. You will need two partials
    1. song-list.html
    1. song-details.html
1. You will need a controller for each partial
1. Use `ngRoute` to specify which URL route loads each partial
1. If you find that you are making similar requests to get your data in each of the controllers, make a factory for each controller to use.

### Song List View

#### Basic Version

Dump the filter form that you've used on previous versions, and just provide a text box above the song list that will use whatever the user types in to filter the list on song title, album or artist name.

#### Advanced Version

Use the built-in directives that Angular provides to display the list of albums and/or list of artists in your filter form. When the user selects an album or artist, filter the collection of songs that is being displayed based on the user's selection.

### Song Detail View

Display all the details of the song however you like.