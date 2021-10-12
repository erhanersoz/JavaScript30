# 07 - Array Cardio Day 2

![](https://github.com/erhanersoz/JavaScript30/blob/master/Screenshots/demo_07.png?raw=true)

**:dart: Example of the array methods**

## How it works?

HTML

```html
  <p><em>Psst: have a look at the JavaScript Console</em> 💁</p>
```

JS

```js
const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];
```

```js
const isAdult = people.some(person => (((new Date()).getFullYear()) - person.year >= 19));
```
`isAdult` is true because some people are bigger than 18.

```js
const allAdults = people.every(person => (((new Date()).getFullYear()) - person.year >= 19));
```
`allAdults` is false because all people are not bigger than 18.

```js
const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];
```

```js
const comment = comments.find(comment => (comment.id === 823423));
```
The comment is `{ text: 'Super good', id: 823423 }`.

```js
const index = comments.findIndex(comment => (comment.id === 823423));
```
The index is `1`.

```js
const newComments = [
  ...comments.slice(0,index),
  ...comments.slice(index+1)
];
```
The newComments is `[
  { text: 'Love this!', id: 523423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
]`

## What I have learned?

- I have learned `Array.prototype.slice()` method.

## Notes

- [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
