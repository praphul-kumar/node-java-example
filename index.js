const path = require('path');
const java = require('java');

// Adding jar file path into classpath
const jarPath = path.join(__dirname, 'assets/', 'Dummy.jar');
java.classpath.push(jarPath);

// importing Java Class into NodeJS
const Dummy = java.import('com.example.Dummy');

// Calling static method hello() from Java Class Dummy.
Dummy.hello("Hello World");

// Calling static method sum Synchronously 
console.log(Dummy.sumSync(1, 3));

// Creating an object of Dummy Class
const dummy1 = new Dummy();

// calling instance method of Java class Dummy in NodeJS
const greet = dummy1.grettingsSync('Praphul');

console.log(greet);
