
class Person {

  static language() {
    console.log(' Javascript!'); // mo need to use process.stdout.write() 
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
    process.stdout.write(this.name + super.lovesToCode()); // obj.name + return result of lovesToCode()
  }

}

const dev = new Developer('Mirza');

// instance method
dev.lovesToCode(); 

// static method
Developer.language(); 

// because of > process.stdout.write() < method everything will be printed inline

// output: Mirza loves to code Javascript

// Note:  process.stdout.write() only works for Node.js and doesn't work for console in browser
