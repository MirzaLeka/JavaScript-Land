
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

 const cama = {
     firstName: "Ermin",
     lastName: "Cama"
 }

 // We cam allow another object to access method fullName from person object
 console.log(person.fullName.call(cama)); 

 // difference between call and apply:
// apply uses array as the second argument

