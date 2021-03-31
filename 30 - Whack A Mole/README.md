# 30 - Whack A Mole

![](https://github.com/erhanersoz/JavaScript30/blob/master/Screenshots/demo_30.gif?raw=true)

## How it works?

**HTML**

```html
<h1>Whack-a-mole! <span class="score">0</span></h1>

<div class="btnContainer">
  <input type="button" class="button" onClick="startGame()" value="Start">
</div>
<div class="game">
  <div class="hole hole1">
    <div class="mole"></div>
  </div>
  <div class="hole hole2">
    <div class="mole"></div>
  </div>
  <div class="hole hole3">
    <div class="mole"></div>
  </div>
  <div class="hole hole4">
    <div class="mole"></div>
  </div>
  <div class="hole hole5">
    <div class="mole"></div>
  </div>
  <div class="hole hole6">
    <div class="mole"></div>
  </div>
</div>
```
<br/>

**CSS**

```css
.hole {
  flex: 1 0 33.33%;
  overflow: hidden;
  position: relative;
}

.hole:after {
  display: block;
  background: url(dirt.svg) bottom center no-repeat;
  background-size: contain;
  content: '';
  width: 100%;
  height:70px;
  position: absolute;
  z-index: 2;
  bottom: -30px;
}

.mole {
  background: url('mole.svg') bottom center no-repeat;
  background-size: 60%;
  position: absolute;
  top: 100%;
  width: 100%;
  height: 100%;
  transition:all 0.4s;
}

.hole.up .mole {
  top: 0;
}

.hammer {
  pointer-events: none;
  background: url('hammer.svg') bottom center no-repeat;
  background-size: contain;
  width: 64px;
  height: 64px;
  position: absolute;
  z-index: 5;
  transition: transform 0.1s;
  transform: rotate(25deg);
}

.kick {
  transform: rotate(-45deg);
}
```
<br/>

**JS**

```js
  const holes = document.querySelectorAll('.hole');
  const scoreBoard = document.querySelector('.score');
  const moles = document.querySelectorAll('.mole');
  let lastHole;
  let timeUp = false;
  let score = 0;
```
Defination

<br/>

```js
  function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }
```
The `randomTime` method generates a number between `min` and `max`.

<br/>

```js
  function randomHole(holes) {
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    if(hole === lastHole) {
      console.log("Ah nah thats the same one bud");
      return randomHole(holes);
    }
    lastHole = hole;
    return hole;
  }
```
The `randomHole` method returns random a `holes` element.

<br/>

```js
  function peep() {
    const time = randomTime(200, 1000);
    const hole = randomHole(holes);
    hole.classList.add("up");
    setTimeout(() => {
      hole.classList.remove("up");
      if(!timeUp) peep();
    }, time);
  }
```
The `peep` method shows a mole from a random hole for a random amount of time while `timeUp` is false.

<br/>

```js
  function startGame() {
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    peep();
    setTimeout(() => timeUp = true, 10000);
  }
```
The `startGame` method starts the game. The game stops after 10 seconds.

<br/>

```js
  function bonk(e) {
    if(!e.isTrusted) return; // cheater!
    score++;
    this.parentNode.classList.remove("up");
    scoreBoard.textContent = score;
  }

  moles.forEach(mole => mole.addEventListener("click", bonk));
```
The `bonk` method is triggered when a `mole` is clicked. The `bonk` method increases the score by 1.

<br/>

Hammer animation

```js
  const body = document.body;

  const hammer = document.createElement("div");
  hammer.classList.add("hammer");
  body.appendChild(hammer);

  body.addEventListener("mousemove", (e) => {
    hammer.style.left = e.pageX - 5 +"px";
    hammer.style.top = e.pageY - 25 +"px";
  });

  body.addEventListener("mouseleave", () => {
    hammer.style.display = "none";
  });

  body.addEventListener("mouseenter", () => {
    hammer.style.display = "block";
  });

  body.addEventListener("click", () => {
    hammer.classList.add("kick");
  });

  hammer.addEventListener("transitionend", () => {
    hammer.classList.remove("kick");
  });
```

<br/>

## What i have learned?

- I have learned the `Event.isTrusted` property.


## Notes

- [Event.isTrusted](https://developer.mozilla.org/en-US/docs/Web/API/Event/isTrusted)
