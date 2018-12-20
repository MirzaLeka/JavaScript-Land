/*
	var user = {
		name : "Mirza",
		age: 24,
		favLngs: ["Javascript", "Java", "Pascal"],
		doingRightNow() {
			console.log(`${this.name} is coding JS`);
		}
	};
	
	var user2 = {
		name : "Ermin",
		age: 23,
		favLngs : ["C#"],
		doingRightNow() {
			console.log(`I don't know what ${this.name} is doing right now`);
		}
	};
	
	var user3 = {
		name : "Mirza",
		age: 31,
		favLngs : ["C#", "PHP", "JS"],
		doingRightNow() {
			console.log(`I don't know what ${this.name} is doing right now`);
		}
		
	}; */
	
	
	// so we have 3 objects, but if we keep adding objects we'll have a huge
	// code that is repeating for no reason
	
	// to avoid this what we can do is create a Constructor, which will
	// server as a template. In this template we'll define all the properties for each object 
	// and then an object (with it's values) calls a constructor those values turn into props
	
	
	// let's make a Constructor (captial letter)
	
	function User(name, age, doing, ...favLngs) { // here we'll define and set properties
		this.name = name; // what this means is which ever user access this constructor
		this.age = age; // like user1, user2, etc. name and age properties of that user will be equal to 
		// name and age arguments that we provide in constructor every time we initialize a new object 
		
		// so this is refering to an object that is accessing a constructor. in other words, this.name === user.name, user1.name, user2.name...
		this.favLngs = favLngs;
		this.doingRightNow = function() { // yeah we have 2 use expressions otherwise error
			if (doing == null) {
			console.log(`I don't know what ${name} is doing right now.`);	
			} else {
			console.log(`${name} is ${doing} right now`);
			}
			
		}
	}
	
	// now we create objects and put values inside constructor
	
	var user1 = new User("Mirza", 24, "coding", "JS", "Java", "Pascal");
	var user2 = new User("Ermin", 23, null, "C#");
	var user3 = new User("Mirza", 31, null, "C#", "PHP", "PHP");
	
	console.log(user1);
	user1.doingRightNow();
	
	console.log(user2);
	user2.doingRightNow();
	
	console.log(user3);
	