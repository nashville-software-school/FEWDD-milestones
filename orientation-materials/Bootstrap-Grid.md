# Bootstrap Grid

Refer to the documentation you are incorporating.
* [Bootstrap 4](https://getbootstrap.com/docs/4.0/layout/grid/)
* [React Bootstrap](https://react-bootstrap.github.io/layout/grid/)


Bootstrap requires a containing element to wrap site contents and house the grid system. How you incorporate is different, the principles are the same.

**Fixed Width**

```html
<div class="container">
  ...
</div>
```

or **Full Width**, spanning the entire width of the viewport

```html
<div class="container-fluid">
  ...
</div>
```

**Mobile First**
Disables zooming on mobile devices

```html
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
```


## The Grid
* Media Queries - based on different size view ports.
* Rows are made up of 12 columns.


Divide 12 by the number of visible columns (any combination adding up to 12).

```html
<div class="row">
    <div class="col-lg-4">Column 1</div>
    <div class="col-lg-4">Column 2</div>
    <div class="col-lg-4">Column 3</div>
</div>
```

OR use a **unit-less** value and let Bootstrap figure out the rest
```html
<div class="row">
    <div class="col">Column 1</div>
    <div class="col">Column 2</div>
    <div class="col-4">Column 3</div>
</div>
```

When no column widths are specified the `Col` component will render equal width columns.

### Media Break Points
The use of `sm, md, lg, xl` will define when a col will become responsive.
* xl Resizes as soon as the browser window reduces below 1200px
* lg Resizes as soon as the browser window reduces below 992px
* md Resizes as soon as the browser window reduces below 768px
* sm Resizes as soon as the browser window reduces below 576px
* col/xs No resize

### Customize the Grid
Using our built-in grid Sass variables and maps, it’s possible to completely customize the predefined grid classes. Change the number of tiers, the media query dimensions, and the container widths and then recompile.

##

## Images
**Bootstrap 4** Made responsive with `.img-fluid. max-width: 100%;` and `height: auto`; Image will scale with the parent element. [Documentation](https://getbootstrap.com/docs/4.0/content/images/)

**React Bootstrap** Apply the fluid attribute to scale an image to the parent element. [Documentation](https://react-bootstrap.netlify.app/components/images/#images)

## 

## Typography
[Bootstrap 4 documentation](https://getbootstrap.com/docs/4.0/content/typography/)