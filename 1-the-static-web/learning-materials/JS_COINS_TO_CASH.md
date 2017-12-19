### Coins to Cash

```
mkdir -p ~/workspace/javascript/exercises/coins-to-cash && cd $_
echo '<html>
  <body>
    <script src="./coinsToCash.js"></script>
  </body>
</html>' > index.html
touch coinsToCash.js
code .
```


Define an object and store it in a variable named `piggyBank`. The object should have the following keys defined.

* quarters
* nickels
* dimes
* pennies

For each coin type, give yourself as many as you like.

```js
// I like pennies
const piggyBank = { pennies: 342 }
let dollarAmount = 0
```

Once you have given yourself a large stash of coins in your piggybank, look at each key and perform the appropriate math on the integer value to determine how much money you have in dollars. Store that value in a variable named `dollarAmount`.

When done, output the value to the browser console.

For example, if my piggy bank only held those pennies from above, when I type the variable name of `dolllarAmount` into the console, the output would be.

```sh
> dollarAmount
$3.42
```

### Cash to Coins

```sh
mkdir -p ~/workspace/javascript/exercises/cash-to-coins && cd $_
echo '<html>
  <body>
    <script src="./cashToCoins.js"></script>
  </body>
</html>' > index.html
touch cashToCoins.js
code .
```

Now do the reverse. Convert the dollar amount into the coins that make up that dollar amount. The final result is an object with the correct number of quarters, dimes, nickels, and pennies.

```js
const dollarAmount = 0.10
const piggyBank = {}

// Your magic code here

console.log(piggyBank)
```

That should produce the following output.

```js
{
  quarters: 0,
  dimes: 1,
  nickels: 0,
  pennies: 0
}
```