## Before Starting This Exercise

**Only begin this exercise if you have already completed Exercise 1.3 or you are waiting for it to be marked.**

Watch the following videos and skim the accompanying notes.

* Random Number Generator ([video](https://www.youtube.com/watch?v=DzP0h8f6fLI&list=PLVD25niNi0BnKbPM0lUEfNYcWixQZ98cY&index=13)|[note](https://github.com/MissStrong/ICS2O/blob/main/Notes/Unit%201/04.1%20Random%20Number%20Generator.md))
* Custom Variables ([video](https://www.youtube.com/watch?v=Qj0AOFwUXmE&list=PLVD25niNi0BnKbPM0lUEfNYcWixQZ98cY&index=14)|[note](https://github.com/MissStrong/ICS2O/blob/main/Notes/Unit%201/04.2%20Custom%20Variables.md))

## Instructions

Go to **script.js** under **Files** and complete the body of the `draw()` function so that:
* a circle appears on the canvas each time `draw()` runs.
* the circle appears in a random location on the canvas along the primary diagonal.
* the diameter of the circle is a random value from 0 to 100.
* the inside colour of the circle is a random colour.
* the border colour of the circle is a random greyscale colour.
* the border thickness of the circle is a random value from 0 to 10.

![](https://raw.githubusercontent.com/MissStrong/ICS2O/main/Images/Random_Circles4.gif)

**Reminder:** `random(n)` generates a random number from `0` to `n`, *but not including `n`*.

*Do not* modify anything in **index.html**. This HTML file needs to be there in order for the sketch to display properly.

When it works, click **Submit** in the top right corner. 

## script.js

Here is the original code in **script.js** for reference:

```javascript
function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(2); // Don't modify this line
}

function draw() {
  // What goes here?
}
```
