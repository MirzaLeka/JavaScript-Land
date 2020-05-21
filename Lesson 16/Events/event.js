const { EventEmitter } = require('events');
const emitter = new EventEmitter();

// if emitter in index.js emitted word bla, the following code will execute
emitter.on('bla', () => {
    console.log('bla was called');
});

module.exports = { emitter };
