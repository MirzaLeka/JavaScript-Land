
// The Path module provides a way of working with directories and file paths

const path = require('path'); // core module


// path.parse() => Formats a path string into a path object

const pathObj = path.parse(__filename);

console.log(pathObj);
// Output (This is exclusive to my working directory)
/* 
{ root: 'D:\\',
  dir: 'D:\\Projects\\Javascript30\\Lesson 16',
  base: 'path.js',
  ext: '.js',
  name: 'path' }
  */

// Notes:
// __filename => path to the file you're in + name of the file
// __dirname => path to the directory you're in

console.log(__filename); // Output: D:\Projects\Javascript30\Lesson 16\path.js
console.log(__dirname); // Output: D:\Projects\Javascript30\Lesson 16\


// path.basename() => Returns the last part of a path. We add string path inside the brackets of basename()

const base = path.basename(__filename);

console.log(base); // Output: path.js => It looks at entire path and returns name of the file


// path.format() => Formats a path object into a path string
// Syntax: format('pathObject', 'Object', pathObject)

const format = path.format({ dir: 'D:\\Projects\\Javascript30', base: 'path.js' }); // format() puts these two together

console.log(format); // Output: D:\Projects\Javascript30\path.js


// path.extname() => Returns the file extension of a path

const ext = path.extname(__filename);

console.log(ext); // Output: .js => because this is a js file


// path.join() => Joins the specified paths into one

const path1 = path.join(__dirname, 'path.js'); // will join these two paths into one

console.log(path1); // Output: D:\Projects\Javascript30\Lesson 16\path.js

const path2 = path.join('Users', 'Refsnes', 'demo_path.js');

console.log(path2); // Output: Users\Refsnes\demo_path.js


// path.normalize() => Normalizes the specified path

const normal = path.normalize(__dirname);

console.log(normal); // Output: D:\Projects\Javascript30\Lesson 16


// path.relative() => Returns the relative path from one specified path to another specified path
// Syntax: ('path', 'string', path)

const relate = path.relative(__filename, 'I <3 JS', base);

console.log(relate); // Output: ..\I <3 JS


// path.resolve() => Resolves the specified paths into an absolute path

const toResolve = path.resolve(__filename);

console.log(toResolve); // Output: D:\Projects\Javascript30\Lesson 16\path.js


// path.delimeter (property) => Returns the delimiter specified for the platform

const delim = path.delimiter;

console.log(delim); // Output: ; (semicolon) => on Windows
