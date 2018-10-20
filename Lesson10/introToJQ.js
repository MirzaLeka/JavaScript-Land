
$(function() { // Shorter way of writting $(document).ready(function() { } );


/* Selectors */

// tag

// . - class

// # - id

// eq(n) or : eq(n) - selects nth element in class

// element[type="text"] - selects element/s with specific attribute


/* Show / Hide Parts */


// Chaining methods
$(".panel").eq(0).hide(300).show(500).hide(200).show(600).hide(300).show(500); // Hides and shows repeatedly 

// Sliding
$(".panel").eq(1).slideUp(1000).slideDown(1000); // Slides up and disappears. Slides down and reappears;

// Delay
$(".panel").eq(2).fadeToggle(1000).delay(1000).fadeToggle(1000); // Fades out. DELAY. Fades in.

// Toggle 
$(".panel").eq(3).slideToggle(1000).slideToggle(1000); // Slides and disappears. Slides again and appers.


/* Changing HTML */


// Changing text of element inside of another element
$(".panel:eq(0) .panel-body").text("ABC"); // this will trigger only panel-body inside first panel element


/* Changing CSS */


// Changing single CSS style
$(".panel-header").eq(0).css("background", "red");

// Changing multiple CSS styles
$(".panel-header").eq(1).css({
    background: "forestgreen",
    color: "red"
}); 

// Changing CSS to multiple elements
$('.panel-header:eq(2), .panel-header:eq(3)').css("color", "brown");


/* Event listeners */ 


// Click
$(".panel-header").eq(0).on('click', function() { // when you click on element
    $(this).css("background", "pink");
});

// Mouse Enter
$(".panel-header").eq(1).on('mouseenter', function() { // when cursor enters element
    $(this).css("background", "lightgreen");
});

// Mouse Over
$(".panel-header").eq(2).on('mouseover', function() { // when cursor is over element
    $(this).css("background", "orange");
});

// Mouse Out
$(".panel-header").eq(3).on('mouseout', function() { // when cursor leaves the element
    $(this).css("background", "lightblue");
});

// Toggling all panels with buttons
$(".panel-btn").on('click', function() {
    var panelId = $(this).attr("data-panelid"); // get button that has attribute data-panelid // note we're selecting a key of attribute and storing value into panelId variable
    $('#' + panelId).toggle(); // this will the id from .panel classes divs that matches value of panelId variable and toggle it. We used # to sepecifiy ID
});

});
