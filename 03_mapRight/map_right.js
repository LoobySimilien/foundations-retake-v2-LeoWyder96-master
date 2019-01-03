const mapRight = (arr, func) => {
     return arr.map(x => func(x))
     .reverse();
}










// pt 2 - mapRightRecursive needs to be defined with a function definition to pass the test specs, don't forget
// to define the parameters!

function mapRightRecursive(arr, func) {
    let currentArr = arr;
    let newArr = [];
    if(currentArr.length === 0) {
     return newArr;
    }
    let focusElem = currentArr[currentArr.length-1];
    newArr.unshift(func(focusElem));
    currentArr.slice(0, -1)
    mapRightRecursive(currentArr, func);
}