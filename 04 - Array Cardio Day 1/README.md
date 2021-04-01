# 04 - Array Cardio Day 1

![](https://github.com/erhanersoz/JavaScript30/blob/master/Screenshots/demo_04.png?raw=true)

**:dart: Example of the array methods**

## How it works?

HTML

```html
  <p><em>Psst: have a look at the JavaScript Console</em> 💁</p>
```

JS

```js
const filtered =  inventors.filter(inventor => (inventor.year >= 1500 && inventor.year <= 1600));
console.table(filtered);

const fullNames = inventors.map(inventor => (`${inventor.first} ${inventor.last}`));
console.log(fullNames);

const sorted = inventors.sort((a,b) => (a.year > b.year ? 1 : -1));
console.table(sorted);

const totalYearsLived = inventors.reduce((currValue, {passed, year}) => (currValue += (passed - year)), 0);
console.log(totalYearsLived);
```

## What I have learned?

- I have learned Array.prototype.sort(), Array.prototype.reduce() and console.table() methods.

## Notes

- [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
