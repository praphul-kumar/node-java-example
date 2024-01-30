const java = require('java');
const javalangSystem = java.import('java.lang.System');

javalangSystem.out.printlnSync('Hello World!');

console.log('Basic Arithmetic Operation in JAVA.');

const a = 10;
const b = 20;

javalangSystem.out.printlnSync(a + b);
javalangSystem.out.printlnSync(a - b);
javalangSystem.out.printlnSync(a * b);
javalangSystem.out.printlnSync(b / a);