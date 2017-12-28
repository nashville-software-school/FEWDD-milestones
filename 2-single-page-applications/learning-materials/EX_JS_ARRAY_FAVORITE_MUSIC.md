# Array Methods: Favorite Music

## Setup

These commands are a helpful quick start. You may choose to ignore them completely and create your own directory structure. If you choose to use this recommendation, just copy the commands below and paste. It doesn't matter what directory you are currently in.

```bash
mkdir -p ~/workspace/exercises/spa/arraymethods && cd $_
touch index.html
touch arraymethods.js
```


## Requirements

Use JavaScript arrays and innerHTML to show the music you love.

* Create and modify arrays with join, push, reverse, sort, concat and unshift.
* Output lists to the DOM.


1. Create three separate arrays; one for **songs**, one for **albums**, and one for **artists**.
1. The song array should be initialized with 10 songs.
1. Each subsequent array should hold the corresponding data (artist and album).
    - For this exercise, each song is from a unique artist and album. 
1. Create a display area on the page for each of the sections (songs, artists & albums).
1. Each display area should have a title/headline.
1. Using a form; Add 2 more songs.
    + Each song should be added to the end of the song array.
    + Each artist should be added to the beginning of the artist array.
    + Each album should be added to the end of the album array.
1. For each output element arrange the corresponding data as follows:
    *   Output vertically descending alphabetically.
    *   Output vertically ascending alphabetically.
    *   Output vertically exactly as the data was added.
    *   Output vertically exactly as the data was added, inverted.
    *   Output horizontally descending alphabetically, separated by `, `.
    *   Output horizontally ascending alphabetically, separated by ` >> `.
    *   Output horizontally exactly as the data was added, separated by ` : `.
    *   Output horizontally exactly as the data was added, inverted, separated by ` | `.
1. Each output area should be separated by a headline tag.

#### Bonus
*   Handle both upper and lowercase inputs. The way this is accomplished is up to you. Additional array methods may have to be employed to complete this bonus item.