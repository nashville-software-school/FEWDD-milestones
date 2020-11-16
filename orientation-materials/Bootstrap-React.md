# Using React-Bootstrap


## Installs
[React-Bootstrap](https://react-bootstrap.github.io/) is built on top of [Bootstrap](https://getbootstrap.com/). You will need to install both.

```sh
npm install react-bootstrap bootstrap
```


Inlcude the `bootstrap.min.css` file in your project.
```
{/* The following line can be included in your src/index.js or App.js file*/}

import 'bootstrap/dist/css/bootstrap.min.css';

```
Import the individual react-bootstrap componets as you need them.

> src/components/example.js
```
import { Button } from 'react-bootstrap';
```

## I want to use Bootstrap, with a GoldenRod color theme
For more customization, install and use [SASS](https://sass-lang.com/).
```sh
npm install --save node-sass
```

To customize Bootstrap, create a file called src/custom.scss (or similar). Override variables and then import the Bootstrap source stylesheet.

> src/custom.scss
```
// Override default variables before the import
$body-bg: #000;

// Import Bootstrap and its default variables
@import '~bootstrap/scss/bootstrap.scss';
```

Finally, import the newly created `.scss` file **instead of the default Bootstrap .css** in the beginning of your src/index.js file

> src/index.js
```
import './custom.scss';
```

You can make variable and style adjustments in the `custom.scss` file. Do not modify Bootstrap’s source code. The changes will be re-compiled and applied to your project.

Bootstrap relies on variables to create a cohesive project. You may discover all you need is to modify those variables. A complete list of Bootstrap variables can be found `node_modules/bootstrap/js/scss/_variables`.



### Bootstrap Build or Custom Theme
Include a custom theme, something like [bootstrap.build](https://bootstrap.build/)

From bootstrap.build, export the theme files: `_variables.scss` and `custombuild.scss`

Include them in order.
Custom variables always come before the default settings of bootstrap and custom css is last (last one in wins).

> src/custom.scss
```
@import './variables';
@import 'bootstrap/scss/bootstrap.scss';
@import './custombuild.scss';
```

#### Note
If you are not making any changes to the theme, you may also simply link to the newly create bootstrap.min.css file.
