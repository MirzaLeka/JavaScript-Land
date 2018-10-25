
/* Traversal DOM Commands */


 $("li") // selects all <li> tag elements on the page

 $("li").first() // selects first <li> tag element on the page 
    // Alternative 
 $("li:first")

 $("li").last() // selects last <li> tag element on the page, in this case sublist, <li>3</li>

$("li").eq(n) // select nth <li> tag

$(ul).first().children() // finds first <ul> tag on the page and selects all of his <li> children, but not the grand children

$("li").first().siblings() // selects all <li> tag elements except the first

$("li").first().parent() // selects parent element of the first <li> element, in this case <ul>

$("li").first().parent().parent() // selects grand parent of <li> tag and in this case <ul> is not placed in any element like <div>,
// grandparent will be <body> tag

$("li").eq(4).parent().parent().prev() // 4th list element on the page has a parent that is <ul> tag. His parent is empty <li> tag
// with sublist and previous <li> tag to that <li> tag is <li>three<li> 

$("li").eq(4).parent().parent().prev().prev().next() // 4th list element on the page has a parent that is <ul> tag. His parent is empty
// <li> tag with sublist and previous <li> tag to that <li> tag is <li>three</li>. Previous <li> tag to <li>three</li> is <li>two</li>.
// Next tag to <li>two<li> tag is again <li>three</li>

$("li").first().next().next() // selects first <li> tag on the page, next element is <li>two</li> and another next is <li>three</li>

// // To avoid confusion I should probably use <li> tags with the same class


$("li").on('click', function() { // When you click on any <li> tag on the page, this function fires and removes next element
    $(this).next().remove(); // to the element you just clicked on
});  

$("li").siblings().remove(); // removing all siblings to <li> tag

$(this).parent().addClass("className") // so every element that shares the same parent() gets that class

$(this).closest(".list").addClass("className") // going up the chain till it finds class list and adds class to it

$(".list").find("li"); // find all <li> tags within .list class

$(".list").find("li").filter(":first").addClass("className"); // add class only to the first li

$(".list").find("li").filter(".special").renove(); // find any <li> in .list filter only the ones with special class and remove those elements

// Alternative, but not very efficient JS
$(".special").remove(); // because this searchs through a whole document, while the previous searches specifically for .special within .list 


// Examples

// Example with is (matching)
$("li").on("click", function(){
    $(this).hide();
    if ( $(this).is(".special") ) { // if this object has class special
        alert ("special"); // just text special
    }
});

 if ( !$(this).is(".special") ) { } // if not special

 // Remove <li> tags of sublist class 
 $(".sublist li").on("click", function(){
        $(this).remove();
});

// Alternative
$("li").on("click", function(){

    if ( $(this).parent().is('.sublist') ) { 
        $(this).remove();
    }

});
 


// Stop propagation

// One <div> inside another. We want to do different things when user clicks on one or the other

$(".outer").click(function() { 
alert("outer Div");
});

$(".inner").click(function(e) { // when clicked on will trigger only inner div
e.stopPropagation(); // this line will prevent alerting Div both outer and inner <div>
alert("inner Div");
});



















