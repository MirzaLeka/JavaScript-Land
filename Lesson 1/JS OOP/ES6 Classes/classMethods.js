
class Person {

  static language() {
    console.log('Javascript!');
  }

  lovesToCode() {
    return ' loves to code';
  }

}

class Developer extends Person {

  constructor(name) {
    super();
    this.name = name;
  }

  // override
  lovesToCode() {
    console.log(this.name + super.lovesToCode()); // obj.name + return result of lovesToCode()
  }

}

const dev = new Developer('Mirza');

// instance method
dev.lovesToCode(); // output: Mirza loves to code

// static method
Developer.language(); // output: Javascript
