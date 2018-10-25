
	
	let names = new Set();
	
	names.add("Sam");
	
	// we can chain adds 
	names.add("Mirza").add("Ermin").add("Amar").add("Mirza"); 
	// sets removs duplicates for us
	
	names.delete("Sam"); // we can delete item by it's name 
	// we can't chain delete emthods because delete returns true or false 
	
	console.log("Size: " + names.size); // prints size of our set 
	
	// check if set contains a name 
	console.log( names.has("Sam") ); // returns a boolean
	
	// to delete all elements in set we use the following
	names.clear();

	// Also works with numbers, arrays and objects,

	names.add(47);
	
	console.log(names);


	/* Weak Sets = Sets with objects */

	let carSet = new WeakSet();

	let	car1 = {
		name: "Hyundai",
		model: "ix 35",
		year: 2015,
		maxSpeed: 240
	};

	let car2 = {
		name: "Golf",
		model: "4",
		year: 2004,
		maxSpeed: 220
	}

	carSet.add(car1).add(car2);

	console.log("Cars: ", carSet);


	
	/* Since Set removes duplicates by default we can use this to remove duplicates from any array */
	
	// We create an array
	let ninjas = ["Ryu", "Jinn", "Ken", "Ryu", "Kazuya", "Splinter", "Kazuya", "Ken"];
	
	console.log(ninjas);
	
	// We create a new Set and pass our array as an argument
	let refineNinjas = new Set (ninjas);
	
	// We'll see that our set is free of duplicates, however this is an object
	console.log(refineNinjas);
	
	// Now we need tranform our set back to an array using spread operator
	ninjas = [...refineNinjas];
	
	// At last ninjas array will be free of all duplicates
	console.log(ninjas);
	
	
	
	
	