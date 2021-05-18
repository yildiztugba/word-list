import { handleSortWords } from '../handlers/sort-words.js';

document
  .getElementById('sort-type')
  .addEventListener('change', handleSortWords);
