
class Counter {
  counter;

  constructor() {
    this.counter = 0;
  }

  getCurrentCount() {
    return this.counter;  
  }

  increaseCount() {
    return this.counter++;
  }

  decreaseCount() {
    return this.counter--;
  }

  resetCount() {
    return this.counter = 0;
  }
}

const c = new Counter;    

const add = () => {
  c.increaseCount();
  document.querySelector('p').textContent = `Current count: ${c.getCurrentCount()}`
}

const subtract = () => {
  c.decreaseCount();
  document.querySelector('p').textContent = `Current count: ${c.getCurrentCount()}`
}

const reset = () => {
  c.resetCount();
  document.querySelector('p').textContent = `Current count: ${c.getCurrentCount()}`
}
