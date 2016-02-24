# Javascript: Prototypal Inheritance

Prototypal inheritance is different from class based inheritance found in the traditional C-family of languages where a new object contains the properties of another class that it inherited from. In JavaScript, any object can specify what its prototype is, creating what's called a prototype chain.

```js
var Parent = function() {
  this.name = "Parent";
  this.foo = "bar";
  this.baz = true;
};

var Child = function() {
  this.name = "Child";
  this.bam = false;
};

/*
  Create a new instance of the Parent function and set
  it as the prototype of child. This set up a prototype
  chain as follows.

  Child ---> Parent ---> Object
 */
Child.prototype = new Parent();
```

So what is this `new` keyword? Well by creating a `new` function, there's a few things that happen.

1. JavaScript creates a new object.
1. Then a new execution context is created, and is set to the object being created. In our case, `this` will be the new `Parent` object we are creating.
1. Set the prototype on the object. By default it is the base `Object` in JavaScript, unless otherwise specified.
1. The constructor function is executed. So when it parses `new Parent()`, the code inside the function declaration for `Parent` executes.
1. It returns the new object, so we need to store that return value. In our case, the new `Parent` object is stored in `Child.prototype`, which establishes the prototype chain.

So now that we've defined a child in the constructor function `Child`, and also established that `Parent` is the prototype of `Child`, we can now create a new `Child` object.

```js
var child = new Child();
console.log("child", child);

/*
  The new child variable is now an object, that contains not
  only the properties established in its own constructor function
  but also the properties from the Parent.
 */

console.log(child.bam);  // false - defined in Child
console.log(child.foo);  // "bar" - defined in Parent
```

If you try to access a property on an object, JavaScript first looks on the object itself, then on its prototype, then on the prototype's prototype, etc., until it finds the property. If it exists nowhere on the prototype chain, you'll get `undefined`.

```js
var height = child.height;  // undefined
```

Let's look at a more complex example.

```js
/*
  A basic animal function
*/
function Animal () {
  this.family = "animal";
  console.log(this);
}

/*
  Explain why just calling Animal() here causes the
  console.log(this) above to output the Window object.
  First introduction to call sites in JavaScript.
 */
Animal();

/*
  So now we create a `new` Animal object and then
  afterwards, JavaScript lets you add another property.
  Clearly explain how creating a new object based on
  a function changes the value of `this`.

  Animal ---> Object
 */
var salamander = new Animal();
salamander.property = "slimy";
console.log('salamander',salamander);

/*
  Create another animal object and give it the same
  property, but with a different value.

  Notice that the properties show when we log the new
  objects we created, but not on the Animal object itself.
  It shows that we are creating new instances of the
  Animal function, not sharing it between salamander
  and kangaroo.
  */
var kangaroo = new Animal();
kangaroo.property = "jumpy";
console.log('kangaroo', kangaroo);

/*
  Now prototypes. We declare a new function and set its
  prototype to Animal. This will combine species (which
  is set on this object) and the family property (which
  is set on the prototype) and puts them both on Doge
 */
function Doge () {
  this.species = "Doge";
}
Doge.prototype = new Animal();

/*
  View the output of the console log below and make sure
  you expand the __proto__ object on it to see that family
  is inherited from the prototype.

  Doge ---> Animal ---> Object
 */
var doge = new Doge();
console.log('doge',doge);


/*
  More inheritance. We set the prototype of the Angus
  function to Doge.

  Angus ---> Doge ---> Animal ---> Object
 */
function Angus () {
  this.name = "Angus";
}
Angus.prototype = new Doge();

var angus = new Angus();
console.log('angus',angus);
```
