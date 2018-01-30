# BEM Naming Conventions

BEM is an acronym for Block / Element / Modifier.

## Block

A block would be component that you use in your application.

Imagine you are building a blog application. An example of a block would be each individual article in a list of articles. You would place a CSS class name of `article` on each block.

```html
<article class="article">

</article>
```

## Element

The title, body, date, and author would all be elements of the block. You would place a CSS class name of `article__{element}` on each one.

```html
<article class="article">
    <section class="article__title">
      My First Article
    </section>
    <section class="article__body">
      Food truck pinterest chartreuse ennui. Chartreuse gluten-free
      slow-carb man bun, YOLO direct trade raw denim swag skateboard
      venmo mlkshk aesthetic woke gentrify af.
    </section>
    <section class="article__author">
      Bartholomew Pennington
    </section>
    <section class="article__date">
      03/03/2013
    </section>
</article>
```

## Modifier

If you want to have a featured article - one that has slightly different styling - you would have a modifier on the `article` class.

```html
<article class="article--featured">
    <section class="article__title">
      My First Article
    </section>
    <section class="article__body">
      Food truck pinterest chartreuse ennui. Chartreuse gluten-free
      slow-carb man bun, YOLO direct trade raw denim swag skateboard
      venmo mlkshk aesthetic woke gentrify af.
    </section>
    <section class="article__author">
      Bartholomew Pennington
    </section>
    <section class="article__date">
      03/03/2013
    </section>
</article>
```


