# 23 - Speech Synthesis

![](https://github.com/erhanersoz/JavaScript30/blob/master/Screenshots/demo_23.png?raw=true)

**:loud_sound: The process of generating spoken language by machine on the basis of written input.**

## How it works?

**HTML**

```html
<div class="voiceinator">

  <h1>The Voiceinator 5000</h1>

  <select name="voice" id="voices">
    <option value="">Select A Voice</option>
  </select>

  <label for="rate">Rate:</label>
  <input name="rate" type="range" min="0" max="3" value="1" step="0.1">

  <label for="pitch">Pitch:</label>

  <input name="pitch" type="range" min="0" max="2" step="0.1">
  <textarea name="text">Hello! I love JavaScript 👍</textarea>
  <button id="stop">Stop!</button>
  <button id="speak">Speak</button>

</div>
```

<br/>

**JS**

```js
const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');
msg.text = document.querySelector('[name="text"]').value;
```
Defination

<br/>

```js
function populateVoices() {
  voices = this.getVoices();
  voicesDropdown.innerHTML = voices
    .filter(voice => voice.lang.includes('en'))
    .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
    .join('');
}

speechSynthesis.addEventListener("voiceschanged", populateVoices);
```
The `SpeechSynthesis.getVoices()` method of the `SpeechSynthesis` interface returns a list of `SpeechSynthesisVoice` objects representing all the available voices on the current device.

The ***populateVoices()*** method is fired when the list of SpeechSynthesisVoice objects that would be returned by the SpeechSynthesis.getVoices() method has changed. Then the method get all the available voices on the current device and adds it to the `voices` element if the language of the voice is English.

<br/>

```js
function setVoice() {
  msg.voice = voices.find(voice => voice.name === this.value);
  toggle();
}

voicesDropdown.addEventListener("change", setVoice);
```
The ***setVoice()*** method changes the speech voice.

<br/>

```js
function toggle(startOver = true) {
  speechSynthesis.cancel();
  if (startOver) {
    speechSynthesis.speak(msg);
  }
}

speakButton.addEventListener("click", toggle);
stopButton.addEventListener("click", () => toggle(false));
```
The ***toggle()*** method stops and plays the voice.

<br/>

```js
function setOption() {
  msg[this.name] = this.value;
  toggle();
}

options.forEach(option => option.addEventListener("change", setOption));
```
The ***setOption()*** method sets the speed and pitch at which the utterance will be spoken at.


## What i have learned?

- I have learned to use the `SpeechSynthesisUtterance` interface.
- I have learned to get all the available voices on the current device with the `SpeechSynthesis.getVoices()` method.


## Notes

- [SpeechSynthesis](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis)
- [SpeechSynthesisUtterance](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance)
