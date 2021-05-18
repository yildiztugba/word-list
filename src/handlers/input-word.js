import { data } from '../data.js';
import { isWord } from '../logic/is-word.js';
import { sortStrings } from '../logic/sort-strings.js';
import { updateList } from '../procedures/update-list.js';

const warnings = document.getElementById('warnings');

/**
 * Entry point for users adding a word to the list.
 * It is called each time the user clicks the "add word" button.
 *
 * @param {Event} event - The event triggered when the user clicks the button.
 */
export const handleInputWord = (event) => {
  /* -- entry point for adding or removing a word -- */
  // debugger;
  console.log('-- handler: input word --');

  /* -- check the target -- */
  if (event.target.type !== 'button') {
    return;
  }

  /* -- gather user input from DOM -- */
  const text = event.target.form.text.value;
  const action = event.target.value;

  /* -- use the input and data to implement the user story --

    if the user is adding a word
      make sure it is a word before pushing it
    if the user is removing a word
      make sure it is in the list before removing it
    if either of those mistakes were made
      update the warnings element to let the user know
      do not modify the words list
  */

  // ... write some code ...

  /* -- render new words -- */
  const sorted = sortStrings(data.words, data.sort);
  updateList(sorted);
};
