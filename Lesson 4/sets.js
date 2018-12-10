
	
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
	