
// bind(), call() and apply() are used to point to which object should the desired method refer

const person = {
    firstName: "Mirza",
    lastName: "Leka",
    fullName () {
        return  `${this.firstName} ${this.lastName}`
         }
    };

function definePerson (age, language) {
 console.log(`My name is ${this.fullName()}. I'm ${age} years old and I love ${language}.`); 
}

// example using call()
 definePerson.call(person, 24, "JS"); // person is the object we are refering to and that's why we can use this.fullName()

// example using apply()
 definePerson.apply(person, [24, "JS"]); 
 
 // output: My name is Mirza Leka. I'm 24 years old and I love JS. x2

 // we can also pass null if there is no object
 // and pass Window object (Global) to invoke some Window function

 const harvey = {
     firstName: "Harvey",
     lastName: "Specter"
 }

 // We cam allow another object to access method fullName from person object
 console.log(person.fullName.call(harvey)); 

 // difference between call and apply:
// apply uses array as the second argument
