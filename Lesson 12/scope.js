var a = 1;
(function() {
console.log(a); // will output 1 because there is a global variable up there
})();


var y = 2;
 (function() {
    console.log(y); // will print out undefined because y isn't created till next line & it exists within the same scope
    var y = 20;
})();


var z = 3;
(function() {
  z = 5;
  console.log(z); // should print out 3, but we changed 3 to 5 and that means it will print out 5
})();           

// when inside a function javascript always searches for variable within that scope
// if there isn't any, it goes to the parent scope
// if variable declared inside function, it will print out value of that variable

var b = 1;
function outer(){
   	var b = 2
    function inner(){
        b++;
        var b = 3;
        console.log(b)
    }
    inner();
  console.log(b);
}
outer();