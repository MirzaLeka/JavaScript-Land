
// Chalk is used for terminal string styling

const chalk = require('chalk');

const log = console.log; // just to type less


// basic example
console.log(chalk.blue('Hello world!'));


// // Combine styled and normal strings
log(chalk.blue('Hello') + ' World' + chalk.red('!'));


// Compose multiple styles using the chainable API
log(chalk.blue.bgRed.bold('Hello world!')); // red background


// Pass in multiple arguments
log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));


// Nest styles
log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));


// Nest styles of the same type even (color, underline, background)
log(chalk.green(
    'I am a green line ' +
    chalk.blue.underline.bold('with a blue substring') +
    ' that becomes green again!'
));


// ES2015 template literal
log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);

// ES2015 tagged template literal
log(chalk`
CPU: {red ${86}%}
RAM: {green ${3845259264 / 8504934400 * 100}%}
DISK: {rgb(255,131,0) ${2843206145301 / 10000000000000 * 100}%}
`);


// Use RGB colors in terminal emulators that support it.
log(chalk.keyword('orange')('Yay for orange colored text!'));
log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
log(chalk.hex('#DEADED').bold('Bold gray!'));


log();

/* Easily define your own themes */


const error = chalk.bold.red;
const warning = chalk.keyword('orange');
 
console.log(error('Error!'));
console.log(warning('Warning!'));


log();

/* Take advantage of console.log string substitution */

const name = 'Mike';
console.log(chalk.green('Hello %s'), name); // output: Hello Mirza


// Playground

const purple = chalk.keyword('purple');

console.log();

console.log('\t' + chalk.red('Ermin'));
console.log();

console.log('\t' + chalk.blue('Mirza'));
console.log();

console.log('\t' + chalk.white.bgRed.bold('Sinan'));
console.log();

console.log('\t' + purple.underline('Amar'));
console.log();

console.log('\t' + chalk.yellow('Harvey') + ' ' + chalk.green('Specter'));
