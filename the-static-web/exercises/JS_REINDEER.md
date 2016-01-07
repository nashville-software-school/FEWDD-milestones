# Colored reindeer

## Setup

```bash
mkdir -p ~/workspace/exercises/the-static-web/reindeer && cd $_
touch index.html
touch reindeer.js
```

## Instructions

Paste the following code into the `<body>` of the HTML file.

```
<div id="reindeer">
</div>
```

Paste the following code into your JavaScript file.

```
var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];


var hohohoElement = document.getElementById("coloredReindeer");
```

Your task is to loop through all the reindeer in the array, and add the name of the reindeer to the single HTML `<div>` element provided. The name of the reindeer should be prepended with the corresponding color from the other array.

For example:

* Blue Dasher
* Red Dancer
* etc...

