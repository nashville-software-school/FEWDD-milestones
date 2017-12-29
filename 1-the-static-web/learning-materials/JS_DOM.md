# Query & Manipulate the Browser DOM with JavaScript

## Query DOM

There are 3 main methods on the `document` object in JavaScript for querying information from the document object model of your HTML.

1. **getElementById** - This will return 1 DOM element or undefined.
1. **getElementsByClassName** - This will always return a collection. The collection will have 0-_n_ elements in it. 
1. **getElementsByTagName** - This will always return a collection. The collection will have 0-_n_ elements in it.

> **See for yourself:** The code below is in a [DOM Query JSFiddle](https://jsfiddle.net/chortlehoort/m3twofe2/) that you can run yourself. Just make sure you have your dev tools open to see the output.

```html
<html>
    <article>
        <section id="banana" class="fruit">
        Bananas
        </section>

        <section id="tomato" class="fruit">
        Tomato
        </section>

        <section id="cuttingBoard" class="tool">
        Cutting board
        </section>
    </article>
</html>
```

### By Id

To get a DOM element by its `id` attribute.

```js
const bananaElement = document.getElementById("banana")
```

![](./images/getElementById.png)

### By Class

To get DOM elements by their `class` attribute. The following method will select both elements that have a class attribute with a value of fruit - so two elements.

```js
const fruitElements = document.getElementsByClassName("fruit")
```

![](./images/getElementsByClassName.png)

### By Tag

To get a DOM element by its tag. The following method will select **all** section tags.

```js
const sectionElements = document.getElementsByTagName("section")
```

![](./images/getElementsByTagName.png)

## Manipulate DOM

To update the contents of a DOM element, you simply need to assign a value to the `innerHTML` property of that element.

If I wanted to change the text inside the DOM element with the `id` of `banana`, this would be the code.

```js
const bananaElement = document.getElementById("banana")

bananaElement.innerHTML = "Mango"
```

## String Templates

Up to this point, you've used `+` to concatenate strings together. Modern JavaScript allows you to use a feature called string templates to build a string by inserting variables directly into the string itself with a special syntax.

```js
// Old way
const monkey = "Coco"
const dolphin = "Winter"

console.log("We saw " + monkey + " the monkey, and " + dolphin + " the dolphin today")
```

```js
// New way
const monkey = "Coco"
const dolphin = "Winter"

// That first character in the string is called a backtick. It's by the esc key.
console.log(`We saw ${monkey} the monkey, and ${dolphin} the dolphin today`)
```

