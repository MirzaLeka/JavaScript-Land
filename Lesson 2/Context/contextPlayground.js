
const person = {
    firstName: "Mirza",
    lastName: "Leka",
    fullName () {
        return  `${this.firstName} ${this.lastName}`
         }
    };

function definePerson (...attr) {
    const [a, b] = attr;
 console.log(`My name is ${this.fullName()}. I'm ${a} years old and I love ${b}.`); 
}

 definePerson.apply(person, [24, "JS"]);

 const harvey = {
     firstName: "Harvey",
     lastName: "Specter"
 }

 // We cam allow another object to access method fullName from person object
 console.log(person.fullName.call(harvey)); 

 // difference between call and apply:
// apply uses array as the second argument

