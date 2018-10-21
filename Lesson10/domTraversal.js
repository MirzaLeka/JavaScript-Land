
/* Traversal DOM Commands */


// $("li") - selects all <li> tag elements on the page

// $("li").first() - selects first <li> tag element on the page 
    // Alternative 
// $("li:first")

// $("li").last() - selects last <li> tag element on the page, in this case sublist, <li>3</li>

// $("li").eq(n) - select nth <li> tag

// $(ul).first().children() - finds first <ul> tag on the page and selects all of his <li> children, but not the grand children

// $("li").first().siblings() - selects all <li> tag elements except the first

// $("li").first().parent() - selects parent element of the first <li> element, in this case <ul>

// $("li").first().parent().parent() - selects grand parent of <li> tag and in this case <ul> is not placed in any element like <div>,
// grandparent will be <body> tag

// $("li").eq(4).parent().parent().prev() - 4th list element on the page has a parent that is <ul> tag. His parent is empty <li> tag
// with sublist and previous <li> tag to that <li> tag is <li>three<li> 

// $("li").eq(4).parent().parent().prev().prev().next() - 4th list element on the page has a parent that is <ul> tag. His parent is empty
// <li> tag with sublist and previous <li> tag to that <li> tag is <li>three</li>. Previous <li> tag to <li>three</li> is <li>two</li>.
// Next tag to <li>two<li> tag is again <li>three</li>

// $("li").first().next().next() - selects first <li> tag on the page, next element is <li>two</li> and another next is <li>three</li>

// // To avoid confusion I should probably use <li> tags with the same class

/*
$("li").on('click', function() { - When you click on any <li> tag on the page, this function fires and removes next element
    $(this).next().remove(); - to the element you just clicked on
});  */



















