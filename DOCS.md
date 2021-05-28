<!-- BEGIN TITLE -->

# DOCS

<!-- END TITLE -->

<!-- BEGIN TREE -->

![dependency graph](./dependency-graph.svg)

<!-- END TREE -->

<!-- BEGIN TOC -->

- handlers
  - [input-word.js](#srchandlersinput-wordjs)
  - [sort-words.js](#srchandlerssort-wordsjs)
- init
  - [index.js](#srcinitindexjs)
- listeners
  - [input-word.js](#srclistenersinput-wordjs)
  - [sort-words.js](#srclistenerssort-wordsjs)
- logic
  - [is-word.js](#srclogicis-wordjs)
  - [sort-strings.js](#srclogicsort-stringsjs)
- procedures
  - [update-list.js](#srcproceduresupdate-listjs)
- [data.js](#srcdatajs)

<!-- END TOC -->

<!-- BEGIN DOCS -->

---

# /handlers

### [./src/handlers/input-word.js](./src/handlers/input-word.js)

<a name="handleInputWord"></a>

## handleInputWord

Entry point for users adding a word to the list.
It is called each time the user clicks the "add word" button.

| Param | Type               | Description                                          |
| ----- | ------------------ | ---------------------------------------------------- |
| event | <code>Event</code> | The event triggered when the user clicks the button. |

### [./src/handlers/sort-words.js](./src/handlers/sort-words.js)

<a name="handleSortWords"></a>

## handleSortWords

Entry point for users sorting the list of words in this app.
It is called each time the input selection changes.

| Param | Type               | Description                                |
| ----- | ------------------ | ------------------------------------------ |
| event | <code>Event</code> | The event triggered by changing the input. |

---

[TOP](#DOCS)

---

# /init

### [./src/init/index.js](./src/init/index.js)

---

[TOP](#DOCS)

---

# /listeners

### [./src/listeners/input-word.js](./src/listeners/input-word.js)

### [./src/listeners/sort-words.js](./src/listeners/sort-words.js)

---

[TOP](#DOCS)

---

# /logic

### [./src/logic/is-word.js](./src/logic/is-word.js)

<a name="isWord"></a>

## isWord ⇒ <code>boolean</code>

Checks if a string is a word. A word contains only letters.

**Returns**: <code>boolean</code> - Whether or not the text is a word.

| Param | Type                | Description                      |
| ----- | ------------------- | -------------------------------- |
| text  | <code>string</code> | A string to check for wordiness. |

### [./src/logic/sort-strings.js](./src/logic/sort-strings.js)

<a name="sortStrings"></a>

## sortStrings ⇒ <code>Array.&lt;string&gt;</code>

Sorts an array of strings in different ways.
It does not modify the argument (no side-effects).

**Returns**: <code>Array.&lt;string&gt;</code> - a new sorted array containing the same strings as toSort

| Param      | Type                              | Default                                     | Description                                                                                                                                                                                                                                                                                                      |
| ---------- | --------------------------------- | ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [toSort]   | <code>Array.&lt;string&gt;</code> | <code>&#x27;&#x27;</code>                   | The array of strings to sort.                                                                                                                                                                                                                                                                                    |
| [sortType] | <code>string</code>               | <code>&quot;&#x27;oldest&#x27;&quot;</code> | How to sort the strings, 6 options. - oldest: from oldest to newest - newest: from newest to oldest - shortest: from shortest to longest - longest: from longest to shortest - a: alphabetical order - z: reverse alphabetical order if the sortType is not one of these 6 options, a copy of toSort is returned |

---

[TOP](#DOCS)

---

# /procedures

### [./src/procedures/update-list.js](./src/procedures/update-list.js)

<a name="updateList"></a>

## updateList

Renders an array of strings as an unordered list into the #list-container element

| Param      | Type                              | Default         | Description                               |
| ---------- | --------------------------------- | --------------- | ----------------------------------------- |
| [toRender] | <code>Array.&lt;string&gt;</code> | <code>[]</code> | an array of strings to render into the UI |

---

[TOP](#DOCS)

## [./src/data.js](./src/data.js)

<a name="data"></a>

## data

**Properties**

| Name  | Type                              | Description                                                         |
| ----- | --------------------------------- | ------------------------------------------------------------------- |
| words | <code>Array.&lt;string&gt;</code> | An array of words that the user has provided.                       |
| sort  | <code>string</code>               | A string indicating the order string should be displayed in the UI. |

<!-- END DOCS -->
