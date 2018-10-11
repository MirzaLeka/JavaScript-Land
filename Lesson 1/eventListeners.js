
// Event listeners

//Syntax: element.addEventListener(event, function, useCapture);

let div = document.querySelector("div");
let p = document.querySelector("p");

p.addEventListener('click', function () { div.style.background = "pink"; } );

// alternative to addEventListener is the following:

// p.onclick(function () { div.style.background = "pink"; } );

// bad side of the syntax above is that you can only have one listener and every next listener will overwrite the previous,
// unlike event listeners where you can have as many listeners as you want
// onclick doesn't support capture either

// On the plus side onclick works in all browsers, while event listener doesn't work in IE 8 and older versions


// Example of events: click, focus, blur, mouseover, mouseout, etc.