
var people = {
    name: "Will",
    sayName() {
        alert(this.name);
    },
    setName(name) {
        this.name = name;
    }
}

// Where the problem is that people can change name prop on their own and maybe program won't run
// Users should only have access to sayName and setName functions

var people = (function(){

    let name = "Will"; // since this isn't a global variable, it can't be accessed from the outside

    function sayName() {
        alert(name);
    }

// because of a return statement, we Can access sayName function that alerts name, but we Can't change value of name variable
    return { 
        sayName
    }

})();