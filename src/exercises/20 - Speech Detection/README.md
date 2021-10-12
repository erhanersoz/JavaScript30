# 20 - Speech Detection

![](https://github.com/erhanersoz/JavaScript30/blob/master/Screenshots/demo_20.gif?raw=true)

**:microphone: Speech Detection**

## How it works?

**HTML**

```html
<div class="words" contenteditable>
</div>
```

<br/>

**JS**

```js
// new speech recognition object
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.interimResults = true; // show interim results
recognition.lang = "en-US";

const words = document.querySelector(".words");
let p = document.createElement("p");
words.appendChild(p);
```
Defination

<br/>

```js
recognition.addEventListener("result", e => {
  const transcript = Array.from(e.results)
  .map(result => result[0])
  .map(result => result.transcript)
  .join("");

  const poopScript = transcript.replace(/poop|poo|shit|dump/gi, "💩");
  p.textContent = poopScript;

  if(transcript.includes("get the weather")){
    console.log("Getting the weather");
  }

  if(e.results[0].isFinal) {
    p = document.createElement("p");
    words.appendChild(p);
  }
});
```
Fired when the speech recognition service returns a result — a word or phrase has been positively recognized and this has been communicated back to the app.

`transcript` is the detected speech. 

If the `transcript` includes poop, poop, shit, or dump, it returns 💩 instead.

If the trans`transcript`cript includes get the weather, it logs "Getting the weather" to console.

if the speaking is over adds the `p` to the `words`.

<br/>

```js
recognition.addEventListener("end", recognition.start);

recognition.start();
```
The `recognition.start()` method fires when the speech recognition service has disconnected.

The `recognition.start()` method starts the speech recognition service listening to incoming audio with intent to recognize grammars associated with the current `SpeechRecognition`.


## What I have learned?

- I have learned to use the `SpeechRecognition` interface.


## Notes

- [SpeechRecognition](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition)
