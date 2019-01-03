# Guess Prank

### Total Points: 6.00

Let's create a game where your friend submits a sentence.  The last character of the sentence is the value your friend is trying to guess.  We'll call this the end punctuation mark. It is common for the end punctuation to be a `?`, `!`, or `.` but we are only concerned about the last character of the string they submit, so it can be any character.

Here is where the game gets interesting and tricky! The last character your friend is trying to guess (the end punctuation mark) changes after each guess...  Let's take a look at the game in more depth!

<hr>

Create the function `endPunctuationGuessPrank` that returns a function.

The **function returned** from `endPunctuationGuessPrank` is responsible for deciding if your friend guessed the correct end punctuation. 


- In order to submit a proper guess, a sentence with an end punctuation mark is passed as an argument to the **function returned** from `endPunctuationGuessPrank`.  The last character is examined and tested against the previous guesses end punctuation.

- Here's where the trick comes into play! The first rule is that you can't win on your first guess (even if the sentence has the correct end punctuation!). On the first guess, the player will automatically lose.

- After the first guess is complete, the first guesses end punctuation becomes the end punctuation mark to guess. After the second guess, the second guesses end punctuation becomes the end punctuation to guess. This pattern continues. The previous guesses end punctuation becomes the "winning" guess on the next turn.

- After every guess, return the previous guesses in the return string.  Review the test specs, there is a lot of string concatenation (Tip: Copy and paste from the test spec string as much as you can, concatenate when needed)!

- On a correct guess, the function returns `'Congrats! You figured it out! You can\'t win on your first guess, and the correct answer changes after every guess.  The answer is always the end punctuation of your previous guess, well done!'`

- **After** the correct guess the function returns `'Game Over!'` **until** `endPunctuationGuessPrank` is invoked and returns a new function we can use for a new game.




**TIP**: The strings in the test specs are long, copy and paste the output strings from the test specs into your code to minimize errors!

Some examples:

```js
let endPunctuationGuess = endPunctuationGuesserPrank();

endPunctuationGuess('What is your favorite animal?');
// returns 'Try Again! Here is your current guess ? and your previous guesses: []. You always seem one guess too late...'

endPunctuationGuess('I can\'t wait for my birthday party!');

// returns 'Try Again! Here is your current guess ! and your previous guesses: [?]. You always seem one guess too late...'

endPunctuationGuess('There is nothing interesting about this sentence.');

// // returns 'Try Again! Here is your current guess . and your previous guesses: [? !]. You always seem one guess too late...'

endPunctuationGuess('I am one guess too late.');

// returns 'Congrats! You figured it out! You can\'t win on your first guess, and the correct answer changes after every guess.  The answer is always the end punctuation of your previous guess, well done!'

endPunctuationGuess('Let\'s continue playing')

// returns `'Game Over!'` since the correct guess was already guessed. To start a new game, endPunctuationGuesserPrank needs to be invoked and the function it returns is used for the new game.

```
