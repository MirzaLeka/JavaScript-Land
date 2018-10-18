
// let's say we have a person object and we want to print first and last name

let person = {
	first: "Peter",
	last: "Parker",
	getFullName() {
		console.log(`My full name is ${this.first} ${this.last}`);
	}
};

// What we can do is simply call a getFullName function 
// this is much better than console.logging `My full name is ${this.first} ${this.last}` every time we want to log full name

person.getFullName();

// but issue with this is that we can't modify the first or last name.
// To pull that off what we can do is declare getters and setters

let person2 = {
	first: "Bruce",
	last: "Wayne",
	get fullName() {
		return `My full name is ${this.first} ${this.last}`		
	},
	set fullName(value) {
		let parts = value.split(" "); // split String on space and turn it into array, parts array

		this.first = parts[0]; // which is first name
		this.last = parts[1]; // which is last name

		// so now we set values for this.first and this.last for this object
	}
};

// now we can edit first and last name and print our own

person2.fullName = "Mirza Leka"; // SETTing value

console.log(person2); 

// This works lie a charm

// so instead of, when creating multiple objects, calling object1.name, object1.age, then object2 and so on
// we can create a get Method, which when invoked will print the name and age of that object for us
// and use set to set new values for name and age and save them in the object


/* Old school */

class Person{

constructor(name, age) {
this.name = name;
this.age = age;

	}

getName() {
	return this.name; // name of the object that is calling ths method
	}

setName(name) {
	this.name = name; // setting new values for the object that is calling this method
	}

}

let p = new Person("Sam Fisher", 52);

console.log("---------------------------");
console.log( p.getName() );

console.log(p);

p.setName("Solid Snake");
console.log( p.getName() );

console.log(p);