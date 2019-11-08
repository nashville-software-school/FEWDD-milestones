# Media Queries with Mobile First and SASS

> **Reference:** [Media Queries on MDN](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Media_queries)

Load styles based on media criteria. Think mobile first and specify the `min-width` value of the smallest device first and then work up from there.

##### index.html

```html
  <link rel="stylesheet" href="styles/responsive.css">

  <article class="colors">
    <span class="card-holder">
      <section class="first">Block A</section>
      <section class="second">Block B</section>
      <section class="third">Block C</section>
    </span>
  </article>
```

##### responsive.css

```css
article {
  text-align: center;
  font-size: 30px;
}

.first {
  background-color: cyan;
}

.second {
  background-color: yellow;
}

.third {
  background-color: magenta;
}

@media screen and (min-width: 320px) {
  .first, .second, .third {
    display: block;
    padding: 50px;
  }
}

@media screen and (min-width: 640px) {
  .first, .second, .third {
    display: inline-block;
    padding: 50px;
  }
}
```

### Grid-based layouts

1. [Bootstrap](http://getbootstrap.com/getting-started/)
2. [Foundation](http://foundation.zurb.com/)
3. [Materialize](http://materializecss.com/)
4. [Skeleton](http://getskeleton.com/)
5. [Frameless](https://github.com/jonikorpi/Frameless)



### Flexible images and media

1. [Fluid images](http://alistapart.com/article/fluid-images)
2. [Flexible images](http://webdesignerwall.com/tutorials/responsive-design-with-css3-media-queries)


## CSS pre-processing with SASS

1. Install [SASS](https://sass-lang.com/)


## Example
1. Create the `sass/main.scss` file.
2. In that file, place the following code.

```sass
$font-stack: Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}
```

1. Compile SASS on command line OR
2. Automaic compile with React.

## Practice
Add SASS to an existing project. This could be your Journal or Kennel. Be sure to create a branch. At a minimum add:
* primary color
* secondary color
* font-stack
* Navigation Styles
* Card Styles




