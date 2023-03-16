
//assigning a function to a variable 
const sayHello = function () {
    console.log("Hello, world");
}

sayHello();

//more typical way to create functions 
function HelloWorldAgain(num) {
    console.log(`Hello world again! ${num}`);

}

HelloWorldAgain("not a number!!!");

//using return 

function sayHelloToConsole(name) {
    return `Hello, ${name}`;
}

console.log(sayHelloToConsole("Bob"));

// check evenness

function isEven(num){
    return num % === 0;
}

const tenIsEven = isEven(10);
const elevenIsEven = isEven(11);

console.log(tenIsEven);
console.log(elevenIsEven);