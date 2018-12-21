
// Super keyword is used whenever we want to inherit constructor from a superclass we are extending

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getDescription() {
    return `My name is ${this.name} and I'm ${this.age} years old`;
  }

}

// Student is also a Person, so we can inherit properties of Person, such as name & age
class Student extends Person {
  constructor(name, age, major) {
    super(name, age); // here we are using super keyword to pick up name and age attributes from the constructor of super class
    this.major = major;

    // Note that we need to put super keyword on top of the constructor or should I say before we start modifying constructor of subclass
  }

  // when invoked, this function will return true or false
  hasMajor() {
    return !!this.major; // if this.major == undefined/null, with ! we'll get true and with ! we'll get FALSE
    // but if it has a value like 'abc academy', then with ! value will be false and with !! it will be TRUE
  }
  
  // here we'll use super keyword to extend getDescription method and override it to serve our new needs
  getDescription() {
    let description = super.getDescription(); // we are saving in let description that which is returned from getDescription
    // so we are not completely overriding the function. We are improving it.

    // like I said, this.hasMajor() returns booleann
    if (this.hasMajor()) {
      description += ` and my major is ${this.major}.`; // if true, we will append major, if not will print original
    }

    return description;
  }

}

// Now let's test this

const user1 = new Person('Mike', 24);
const student1 = new Student('Sam', 25, 'Military Academy');

console.log(user1); // output: Person { name: 'Mike', age: 24 } => here we are getting Person. That's a constructor.
console.log(student1); // output: Student { name: 'Sam', age: 25, major: 'Military Academy' }

// Let's create another student without major

const student2 = new Student('Nick', 17);

console.log(student1.getDescription());
console.log(student2.getDescription());
