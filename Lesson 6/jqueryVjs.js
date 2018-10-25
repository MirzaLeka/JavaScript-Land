
/* Vanilla JS vs Jquery */

// More at http://youmightnotneedjquery.com //

// Jquery - select element
$("element");

// Vanilla JS - select element
document.querySelector("element");

// remove element

$("element").remove();

document.querySelector("element").remove();
    // Alternative
var elem = document.querySelector("element");
elem.parentNode.removeChild(elem);

// prepend

$("element").prepend("otherElement");

document.querySelector("element").prepend("otherElement");

// before

$("element").before("otherElement");

document.querySelector("element").before("otherElement");

// append

$("parent").append("element");

document.querySelector("parent").appendChild("element");

// children

$("element").children();

document.querySelector("element").children;

// find children

$("element1").find("element2");

var elem1 = document.querySelector("element1");
elem1.document.querySelectorAll("element2");

// find elements

$(".my #awesome selector");

document.querySelectorAll(".my #awseome selector");

// add class

$("element").addClass("className");

document.querySelector("element").add("className");

// remove class

$("element").removeClass("className");

document.querySelector("element").remove("className");

// has class

$("element").hasClass("className");

document.querySelector("element").classList.contains("className");

// toggle class

$("element").toggleClass("className");

document.querySelector("element").toggle("className");

// set attribute

$("element").attr("type", "text");

document.querySelector("element").setAttribute("type", "text");

// get attribute

$("element").attr('type');

document.querySelector("element").getAttribute("type");

// select parent

$("element").parent();

document.querySelector("element").parentNode;

// next sibling

$("element").next();

document.querySelector("element").nextElementSibling;

// previous

$("element").prev();

document.querySelector("element").previousElementSibling;

// closest ancestor that matches given selector

$("element").closest("div");

document.querySelector("element").closest("div");

// matches

$("elment").is( $("otherElement") );

var elem1 = document.querySelector("element1");
var elem2 = document.querySelector("element2");

elem1 === elem2; 

// replaceWith

$("element").replaceWith("otherElement");

document.querySelector("element").replaceWith("otherElement");

// clone

$("element").clone();

document.querySelector("element").cloneNode(true);

// change text

$("element").text("YOUR TEXT");

document.querySelector("element").textContent = "YOUR TEXT";

// change HTML

$("element").html("<tag> </tag>");

document.querySelector("element").innerHTML = "<tag> </tag>";

// outer HTML

$("parent").append( $("element").clone() ).html();

document.querySelector("element").outerHTML = "<tag> </tag>";

// change CSS

$("element").css("color", "red");

document.querySelector("element").style.color = "red";

// hide

$("element").hide();

document.querySelector("element").style.display = "none";

// show

$("element").show();

document.querySelector("element").style.display = "block";

// fade In

$("element").fadeIn();

/* CSS
.element{
    display: none;
    opacity: 0;
    transition: .8s;
} */

var elem = document.querySelector("element");
elem.style.display = "block";
requestAnimationFrame( () => elem.style.opacity = 1 );

// animate

$("elem").animate({
    width: "70%",
    opacity: 0.4,
    marginLeft: "0.6in",
    fontSIze: "3em",
    borderWidth: "10px"
}, 1500);


var elem = document.querySelector("element");
elem.animate([
    { // Initial state
        transform: "translateY(-1000px) scaleY(2.5) scaleX(.2)",
        transformOrigin: '50% 0',
        filter: 'blur(40px)',
        opacity: 0
    },
    { // Final state
        transform: 'translateY(0) scaleY(1) scaleX(1)',
        transformOrigin: '%50 %50',
        filter: "blur(0)",
        opacity: 1
    }
], 1500); // time


// events on

$("element").on(eventName, eventHandler);

document.querySelector("element").addEventListener(eventName, eventHandler);

// events off

$("element").off(eventName, eventHandler);

document.querySelector("element").removeEventListener(eventName, eventHandler);

// ready

$(document).ready(function() {});
    // alternative
$(function()  {});

window.onload = function() {};

// AJAX

$.ajax("someURL/api", {
    success: (data) => { /* Do stuff with data */ }
});

fetch("someURL/api")
    .then(response => response.json())
    .then( (data) => {
        // do stuff with data
    });

    // Some of these things are almost not supported by IE and Edge, but this can be polyfilled with script below
    
    // <script src="https://cdn.polyfill.io/v2/polyfill.min.js"></script> //

    // Brings polyfilled code that browser requires. Important to add to script tag.















