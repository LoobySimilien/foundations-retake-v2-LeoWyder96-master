describe('endPunctuationGuesserPrank', () => {
  // TIP - Review the README.md File
  let endPunctuationGuess;
  
  beforeEach(() => {
    endPunctuationGuess = endPunctuationGuesserPrank();
  });

  it('returns a function', () => {
    expect(typeof endPunctuationGuess).toBe('function');
  });

// TIP - There is a lot of string concatenation, copy and paste from the test specs, concatenate values where you feel it is necessary. Read Errors from Testem carefully.

  it('you can\'t win on your first end punctuation guess', () => {
    expect(endPunctuationGuess('I hope I win this game')).toBe('Try Again! Here is your current guess e and your previous guesses: []. You always seem one guess too late...');
  });

  it('stores previous guesses and returns them in the Try Again guess string', () => {
    expect(endPunctuationGuess('Is it a nice day today?')).toBe('Try Again! Here is your current guess ? and your previous guesses: []. You always seem one guess too late...');
    expect(endPunctuationGuess('I\'m excited to program today!')).toBe('Try Again! Here is your current guess ! and your previous guesses: [?]. You always seem one guess too late...');
    expect(endPunctuationGuess('This is a a boring sentence.')).toBe('Try Again! Here is your current guess . and your previous guesses: [? !]. You always seem one guess too late...');
  });

  it('the correct "guess" is always the previous guess (except on the first attempt)', () => {
    expect(endPunctuationGuess('Let\'s go to the beach!')).toBe('Try Again! Here is your current guess ! and your previous guesses: []. You always seem one guess too late...');
    expect(endPunctuationGuess('What is your favorite Netflix show?')).toBe('Try Again! Here is your current guess ? and your previous guesses: [!]. You always seem one guess too late...');
    expect(endPunctuationGuess('When was the last time you watched your favorite show?')).toBe('Congrats! You figured it out! You can\'t win on your first guess, and the correct answer changes after every guess.  The answer is always the end punctuation of your previous guess, well done!');
  });

  it('after the correct guess is guessed, you can\'t play again until you re-run `endPunctuationGuesserPrank`', () => {
    expect(endPunctuationGuess('Let\'s go to the beach!')).toBe('Try Again! Here is your current guess ! and your previous guesses: []. You always seem one guess too late...');
    expect(endPunctuationGuess('I think I am going to win!')).toBe('Congrats! You figured it out! You can\'t win on your first guess, and the correct answer changes after every guess.  The answer is always the end punctuation of your previous guess, well done!');
    expect(endPunctuationGuess('Let\'s continue.')).toBe('Game Over!');
  });
});
