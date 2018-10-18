
// this refers to any object that currently owns the space that we use the
// this keyword in

// if we use this right here, it will represent the window object
console.log(this);

// let's create a new object 

var myCar = {
	maxSpeed : 280,
	driver: "Mirza",
	drive(speed, time) {
		console.log(speed/time);
	},
	test() {
		console.log(this); // will console.log entire myCar, because
		// this keyword is owned by myCar object
		
		// in other words *this* is the object (in this case)
		// same as this: console.log(myCar);
	}
	
};

var myCar2 = {
	maxSpeed : 377,
	driver: "Ermin",
	drive(speed, time) {
		console.log(speed/time);
	},
	test() {
		console.log(this); 
	}
	
};

myCar.test();
myCar2.test();

// so why use this keyword? Let's create third object and not use *this*

var myCar3 = {
	maxSpeed : 270,
	driver: "Sinan",
	drive(speed, time) {
		console.log(speed/time);
	},
	test() {
		console.log(myCar3); 
	},
	logDriver() {
	// since inside this function we don't have access to other properties,
	// we can use name of the object or just this keyword to access props
		console.log(`Driver's name is ${this.driver}`);
	}
	
};

myCar3.test();
// myCar3.test() will output myCar3 object, which menas it will print
// entire object, just like with *this* keyword.

// The benefit of *this* in this example is that we don't need to write 
// name of the object myCar, myCar2, myCar3, every time we want to print
// the object inside test function. Instead we just use *this* and it will
// refer to the object that is calling the method 


myCar3.drive(240, 24);
myCar3.logDriver();

// we can add a method/prop to object and print use this keyword to print whole
// object or one of it's properties

myCar3.getMaxSpeed = function() { // to declare method like this we need
	console.log(this.maxSpeed); // to use function expressions
}

myCar3.getMaxSpeed();


// if we console.log *this* in a function (that's not related to object)
// we'll get a global/window object 

// getThis();

function getThis(){
	console.log(this);
}

  
  // beyond this
  
 const video = {
	 title: "a",
	 tags: ["a","b","c"],
	 showTags() {
		 var _this = this; // we assigned object (*this*) to a variable
		 
		 console.log(_this);
		 
		 this.tags.forEach(function(tag){
		//	 console.log(this.tags); // outputs undefined. Why?
			 // because this is refering to the inner function and we
			 // know that this inside regular function refers to window
			 
		// because this.tag is out of range, we'll uss _this var we created	 
		console.log(_this.tags, tag); // this will output all 3 tags
		 });
	 }
 };
 
 video.showTags();
 
 // if instead of regular function we used arrow function inside forEach
 // things would work and we wouldn't need _this variable to access this 
 
 // we can also do this:
 
 /*
 		 this.tags.forEach(function(tag){
		console.log(this.tags, tag); // for each tag print tags array 
		 }, this);
 
 but this applies only for a few funcitons, like forEach
 */

