
#  Map Right

## Total Points: 6.00  (3 pts for iterative, 3 pts for recursive)

## Description

Create a function called `mapRight` that accepts an array and a mapping function, and returns an array.  Instead of iterating over the array from left to right, have the `mapRight` function start from the last element in the array. The built-in `Array.prototype.map` function return an array of mapped values that are in the original order as the input array. The returned array for `mapRight` should be in **reverse order**.

Next, create a recursive function, `mapRightRecursive` with the same functionality. 

Do not use `Array.prototype.map` or `Array.prototype.reverse` in your solutions.

## Examples

```javascript
let doubler = function(x) {
  return x*2;
}

let mappedArr = mapRight([1,2,3,4,5], doubler);
console.log(mappedArr);
//logs [10,8,6,4,2]
```

## NOTE: 
**If you get stuck on the recursive solution, try not to spend longer than 15 minutes on your approach. Move on--we'd rather you get further in the checkpoint than for you to focus on these 3 pts. You can always come back!**
