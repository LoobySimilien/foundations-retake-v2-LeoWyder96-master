// the sentenceMaker function needs to be defined with a function declaration to pass the test specs
// do not refactor the function declearation.


function sentenceMaker() {
    return Object.values(this)
    .filter(word=> {
      return typeof word === 'string';
    })
    .reduce((accum, curr) => {
      return accum + curr;
    }, 0);
}
