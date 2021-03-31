# 01 - JavaScript Drum Kit

![](https://github.com/erhanersoz/JavaScript30/blob/master/Screenshots/demo_01.gif?raw=true)

**:musical_keyboard: This is a simple drum pad.**

**:drum: Drum kit includes a clap, a hi hat, a kick, an openhat, a boom, a ride, a snare, a tom and a tink.**

| KeyCode | Key | Sound   |
| ------- | --- | ------- |
| 65      | A   | clap    |
| 83      | S   | hihat   |
| 68      | D   | kick    |
| 70      | F   | openhat |
| 71      | G   | boom    |
| 72      | H   | ride    |
| 74      | J   | snare   |
| 75      | K   | tom     |
| 76      | L   | tink    |

> As seen in the table above, a sound is defined for each of the keys A, S, D, F, G, H, J, K, L. That sound is heard when the key is pressed.

## How it works?

HTML

```html
<div data-key="65" class="key">
    <kbd>A</kbd>
    <span class="sound">clap</span>
</div>

<audio data-key="65" src="sounds/clap.wav"></audio>
```

CSS

```css
.key {
    border: 0.4rem solid black;
    transition: all 0.07s ease;
}

.playing {
    transform: scale(1.1);
    border-color: #ffc600;
    box-shadow: 0 0 1rem #ffc600;
}
```

JS

```js
  window.addEventListener('keydown', playSound);
```

playSound will be triggered when a key is pressed.

```js
function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  audio.play();

  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  key.classList.add("playing");
}
```

Audio element and key element are select by e.keyCode (code of the key pressed)

:loud_sound: Audio plays.

Key animates.

## What I have learned?

- I have learned to play audio.
- I have learned transitionend event. But i haven't used it.

## Notes

- [\<audio\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio)
- [transition](https://developer.mozilla.org/en-us/docs/Web/CSS/transition)
