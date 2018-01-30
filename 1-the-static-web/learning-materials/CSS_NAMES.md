# CSS Naming Conventions

## CSS naming goals:
* describe what selector does by looking at the name
* where can selector be used
* element and class relationships

1. Follow style conventions and use `-` between words
   ``` style

      .redBox {
         color: red;
      }

      .red-box {
         color:red;
      }
   ```
      (Turn item red, item is a box)

### BEM (Block Element Modifer) Naming Convention
   1. Block elements: nav, header, footer, etc.

      ```style
         header { };
         footer { };
      ```

   1. Children of block elements

      ``` style
         .nav__li{ };
         .footer__p{ };
      ```

   1. Modified elements/styles

   ``` style
      .box--red { };
      .box--blue { };
   ```
   1. Block childrend with modifier.

      ```style
         header__nav--large{ };
         header__nav--small{ };
      ```

### JS Hooks Styles
   1. Preface with js
   ```
   .js-footer--text{ };
   ```
   1. Use `rel` attribute
   1. Do not use `data` attribute. Data attributes should be used to store custom data.

### And the number one way to provide clarity: Comments in the CSS
   1. CSS comments
   ```
   /* Comment go here */
   ```

