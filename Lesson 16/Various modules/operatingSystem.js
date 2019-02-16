
// The os module provides a number of operating system-related utility methods. 

const os = require('os');

console.log( os.totalmem() ); // returns total memory on your machine

console.log( os.freemem() ); // returns value of free memory on your machine

console.log( os.hostname() ); // returns host name of your computer

console.log( os.release() ); // returns operating system release version

console.log( os.arch() ); // returns the operating system CPU architecture for which the Node.js binary was compiled (example: x64)

console.log( os.cpus() ); // returns an array of objects containing information about each logical CPU core

console.log( os.platform() ); // returns the operating system platform as set during compile time of Node.js (example: win32 OR linux)

console.log( os.type() ); // returns a string identifying the operating system name (example: Windows_NT or Linux or macOSX)

console.log( os.userInfo() ); // returns info about the user, such as username, home directory and so on

// and so on