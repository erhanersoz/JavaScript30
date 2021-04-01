# 06 - Type Ahead

![](https://github.com/erhanersoz/JavaScript30/blob/master/Screenshots/demo_06.gif?raw=true)

**Example of data filtering & simple RegExp**

## How it works?

**HTML**

```html
<form class="search-form">
  <input type="text" class="search" placeholder="City or State">
  <ul class="suggestions">
    <li>Filter for a city</li>
    <li>or a state</li>
  </ul>
</form>
```

**CSS**

```css
.hl {
  background: #ffc600;
}
```

**JS**

```js
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];
fetch(endpoint)
.then(blob => blob.json())
.then(data => cities.push(...data));
```
this adds the cities to the cities array.

```js
function findMatches(wordToMatch, cities){
  const regex = new RegExp(wordToMatch, "gi");
  return cities.filter(item => item.city.match(regex) || item.state.match(regex));
}
```
findMatches returns filtered cities by the search word. 

```js
function numberWithCommas(x){
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
```
numberWithCommas returns a string that each three digits of the number separated by ','.

```js
function displayMatches(){
  const word = this.value;
  const matchArray = findMatches(word,cities);
  const regex = new RegExp(word, "gi");
  const html = matchArray.map(item => {
    const cityName = item.city.replace(regex, `<span class="hl">${word}</span>`);
    const stateName = item.state.replace(regex, `<span class="hl">${word}</span>`);

    return `
    <li>
      <span class="name">${cityName}, ${stateName}</span>
      <span class="population">${numberWithCommas(item.population)}</span>
    </li>
    `;

  }).join("");

  suggestions.innerHTML = html;
}
```
displayMatches filters the cities based on the searched word and highlights the searched word.

```js
searchInput.addEventListener("change", displayMatches);
searchInput.addEventListener("keyup", displayMatches);
```
displayMatches will be triggered when searchInput changes.


## What I have learned?

- I have learned to use replace method with RegExp

## Notes

- [String.prototype.replace\(\)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
