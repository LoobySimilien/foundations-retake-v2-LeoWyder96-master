// the complement function needs to be defined with a function declaration to pass the test specs
// do not refactor the function declearation. The complement function may need parameters in its definition
// we didn't add this to the definition so make sure to add them (if needed), read the test specs!

function complement(func) {
    let boolCheck = func()
    return function() {
     if (boolCheck === true) {
         return false;
     }
     return true;
    }
}

const remove = (arr, func) => {
    let newArr =[];
    arr.forEach(element => {
        if (complement(func(element)) === false) {
            newArr.push(element);
        }
    });
    return newArr
};




