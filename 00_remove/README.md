# Remove

### Total Points: 5.00

**complement** - Create the function `complement` that takes a function as an argument.  Complement **returns a function** that itself returns the logical opposite of the function passed in as an argument.

```js
function returnTrue() {
  return true;
}

var returnFalse = complement(returnTrue);
returnFalse() // false; // complement returned a function that returns the logical opposite of the function passed to complement.
```

**remove** - Create the function `remove` that accepts an array and function argument.  

The `remove` function removes every element from the array for which the function called on that element returns the logical opposite of the input function (the function passed as an argument). You should use the `complement` function on the input function (the function passed as an argument) to make create a new function that returns the logical opposite of the input function.

Instead of using a traditional `for` loop, use [Array.prototype.forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

```js

function greaterThanTen(num){
  return num > 10;
}

var arrayOfValues = remove([1, 4, 10, 12, 14], greaterThanTen);
// arrayOfValues = [1, 4, 10] // all numbers that are the logical opposite of the greaterThanTen function (numbers less than 10).
```

