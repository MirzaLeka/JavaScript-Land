
// Event listeners

//Syntax: element.addEventListener(event, function, useCapture);

let div = document.querySelector("div");
let p = document.querySelector("p");

p.addEventListener('click', function () { div.style.background = "pink"; } );

// alternative to addEventListener is the following:

// p.onclick(function () { div.style.background = "pink"; } );


/* Pros and Cons */
// bad side of the syntax above is that you can only have one listener and every next listener will overwrite the previous,
// unlike event listeners where you can have as many listeners as you want
// onclick doesn't support capture either

// On the plus side onclick works in all browsers, while event listener doesn't work in IE 8 and older versions


// Example of events: click, focus, blur, mouseover, mouseout, etc.


/* Bubbling vs Recapturing */

// if we have two elements, one inside another, we can choose which element to run first.
        // like if we put state to recapturing (false), clicking on inner tag will first trigger event for the inner element
        // and then trigger the outer element

        // opposite of this is bubbling (true), which first triggers outer element and then it triggers inner element


        p.addEventListener('click', addText, false);

        div.addEventListener('click', addText2, false);

        // two elements call 2 different functions. once clicked on div, it will triger only div tag
        // but if you click on <p> due to recapturing (last argument is set to false), <p> will call the function first, then <div>

    function addText() {
        p.textContent += " Paragraph Text.";
    }

    function addText2() {
        p.textContent += " Div Container Text.";
    }

        // if we set options to bubbling (true), it will be the opposite