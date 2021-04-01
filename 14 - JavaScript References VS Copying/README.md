# 14 - JavaScript References VS Copying

![](https://github.com/erhanersoz/JavaScript30/blob/master/Screenshots/demo_14.png?raw=true)


## How it works?


**JS**

```js
let str1 = "Erhan";
let str2 = str1;
str1 = "Wes";
console.log(str1,str2); // Wes Erhan

let num1 = 14;
let num2 = num1;
num1 = 30;
console.log(num1,num2); // 30 14

let bool1 = true;
let bool2 = bool1;
bool1 = false;
console.log(bool1,bool2); // false true
```
Javascript has 5 data types that are passed by value: Boolean, null, undefined, String, and Number. We’ll call these primitive types.


```js
const players = ['Wes', 'Erhan', 'Poppy'];
const team = players;
team[2] = "Lux";
console.log(players, team); // ["Wes", "Erhan", "Lux"] ["Wes", "Erhan", "Lux"]

const person = {
  name: 'Wes Bos',
  age: 80
};
const captain = person;
captain.number = 99;
console.log(person, captain); // {name: "Wes Bos", age: 80, number: 99} {name: "Wes Bos", age: 80, number: 99}
```
Javascript has 3 data types that are passed by reference: Array, Function, and Object.


### How to Copy an Array in JavaScript?

- Array.prototype.slice\(\)
```js
const players2 = ['Wes', 'Erhan', 'Poppy'];
const team2 = players2.slice();
team2[2] = "Lux";
console.log(players2,team2); // ["Wes", "Erhan", "Poppy"] ["Wes", "Erhan", "Lux"]
```

- Array.prototype.concat\(\)
```js
const players2 = ['Wes', 'Erhan', 'Poppy'];
const team3 = [].concat(players2);
team3[2] = "Lux";
console.log(players2,team3); // ["Wes", "Erhan", "Poppy"] ["Wes", "Erhan", "Lux"]
```

- ES6 Spread
```js
const players2 = ['Wes', 'Erhan', 'Poppy'];
const team4 = [...players2];
team4[2] = "Lux";
console.log(players2,team4);  // ["Wes", "Erhan", "Poppy"] ["Wes", "Erhan", "Lux"]
```

- Array.from\(\)
```js
const players2 = ['Wes', 'Erhan', 'Poppy'];
const team5 = Array.from(players2);
team5[2] = "Lux";
console.log(players2,team5); // ["Wes", "Erhan", "Poppy"] ["Wes", "Erhan", "Lux"]
```


### How to Copy an Object in JavaScript?

- Object.assign\(\)
```js
const person2 = { name: 'Wes Bos', age: 80 };
const captain2 = Object.assign({},person2,{ number: 99, age: 12 });
console.log(person2,captain2); // { name: 'Wes Bos', age: 80 } { name: 'Wes Bos', age: 80, number: 99 }
```

- ES6 Spread
```js
const person2 = { name: 'Wes Bos', age: 80 };
const captain3 = {...person2};
captain3.age = 90;
console.log(person2,captain3); // { name: 'Wes Bos', age: 80 } { name: 'Wes Bos', age: 90 }
```

- Deep copy
```js
const wes1 = {
  name: 'Wes',
  age: 100,
  social: {
    twitter: '@wesbos',
    facebook: 'wesbos.developer'
  }
};

const dev1 = Object.assign({}, wes1);
dev1.name = "wesley";
dev1.social.twitter = "@wesley";
console.log(wes1.social.twitter); // @wesbos
console.log(dev1.social.twitter); // @wesbos


const wes2 = {
  name: 'Wes',
  age: 100,
  social: {
    twitter: '@wesbos',
    facebook: 'wesbos.developer'
  }
};

const dev2 = JSON.parse(JSON.stringify(wes2));
dev2.name = "Lux";
dev2.social.twitter = "@Lux";
console.log(wes2.social.twitter); // @wesbos
console.log(dev2.social.twitter); // @Lux
```

## What I have learned?

- I have learned ***Object.assign\(\)*** method and deep copying

## Notes
- [JavaScript data types and data structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
- [Array.prototype.slice\(\)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
- [Array.prototype.concat\(\)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)
- [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)
