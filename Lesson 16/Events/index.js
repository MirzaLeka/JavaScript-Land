const { emitter } = require('./event');

// invoking emitter and emitting anything that is passed in llke, node index.js <word>
emitter.emit(process.argv[2]);