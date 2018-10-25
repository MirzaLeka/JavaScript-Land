// Keeping an eye on this keyword

// 3 key functions:
    // bind()
    // call()
    // apply()

    /* Take the object below into a count. On line 17 we're calling addPerson method, which is inside of object.
    If we call this method without binding this keyword, like on the next line, *this* keyword inside addPerson method
    will refer to the button that will be clicked on client side (button we attached eventListener too) and not a pointer to a
    people object. Thus we cant't we can't use this keyword to access people array.
    */

const people = {
    people: [],
    bindEvents() { 
    this.button.addEventListener('click', this.addPerson);
    this.$ul.delegate("i.del", "click", this.deletePerson.bind(this));
},
    addPerson(value) { 
    console.log(this); // console logs HTML <button> </button> tags
    this.people.push(value || this.input.value); 
    this.render();
    this.input.value = '';
}
        }

   // example 2: 
        // like in the example above we can clearly see that this keyword refers to the button that when pressed
        // is calling the function addBanana, thus we can use this.innerHTML to change html or in this case add text 
        // to the button each time it's being clicked
   
   var numBanans = 0;
   window.onload = function() {

    var button = document.querySelector("button");
    button.onclick = addBanana;

   }

   function addBanana() {
       numBanans++;
       this.innerHTML = "Add a banana " + numBanans + ".";
   }

   // example 3
    // similar example, only this time we're calling addBanana from an anonymous function.
    // It's already known that inside a function, this is refering to the window (global) object, unless function is
    // an object method, which will refer to the object itself. To gain access to this keyword, we'll need to:
        // a) add this inside argument of addBanana function and use it inside addBanana function
        // b) add call keyword and insert pass this which is an alternative of a)

    window.onload = function() {

        var button = document.querySelector("button");
        button.onclick = function() { // this is anonymous function inside function, so this refers to window object
            // compute some stuff
            addBanana(); // can be fixed with addBanana.call(apply)
        }
    }

    function addBanana() {
        numBanans++;
        this.innerHTML = "Add a banana " + numBanans + ".";

    // since this keyword is now refered to an actual button inside html, we could use to access other DOM elements, like:
        this.closest("element").remove(); // which will remove the closest "element" the button we cliecked on is inside in    
    }

    // first argument of bind, apply and call is always this, thus if we write function.call(), empty argument is refering to this
    // Similarily, bind(null) or apply(null) will give not give object a value of ull