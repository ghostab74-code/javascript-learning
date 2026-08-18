// Try these codes in dev tools!
// ordinary callbacks:

// function sayHello() {
// 	console.log("Hello!");
// }
// function executeFunction(callback){
// 	callback();
// }
// executeFunction(sayHello);

// function greet(name){
// 	console.log(`Hello ${name}`);
// }
// function processUser(callback) {
// 	 callback("Yourname");
// }
// processUser(greet);

// Anonymous callback:

function user(callback) {
	callback("Yourname")
}
user(function(name) {
	console.log(`Hello ${name}`);
})

//arrow functions:

const greet = (name) => {
    console.log(`Hello ${name}`);
};

greet("Yourname");

// forEach()
// forEach() is an array method that allows you to 
// perform an operation on every element of an array.

const fruits = ["apple", "banana", "orange"];

fruits.forEach(function(fruit) {
    console.log(fruit);
});
//fruit is the callback in the code above!
const fruits = ["apple", "banana", "orange"];

fruits.forEach(function(fruit, index, array) {

    console.log(fruit);

    console.log(index);

    console.log(array);

});

const cart = [
    { name: "Coffee", price: 5 },
    { name: "Bread", price: 3 },
    { name: "Milk", price: 2 }
];

const numbers = [1, 2, 3, 4, 5, 6];

// cart.forEach(function(product) {
//     console.log(product.name);
//     console.log(product.price);
// });

//forEach() with => function

cart.forEach((product) => {
	console.log(product.name, product.price);
});

// filter()

// filter() creates a new array containing only the 
// elements that pass a condition.



// if we wanted only even numbers we could use
// forEach()

const evenNumbers = numbers.filter(number => {
    return number % 2 === 0;
});

console.log(evenNumbers);

//------------------------

const products = [
    { name: "Laptop", price: 1200 },
    { name: "Mouse", price: 30 },
    { name: "Keyboard", price: 80 },
    { name: "Monitor", price: 300 }
];
const cheapProducts = products.filter(product => product.price < 100);

console.log(cheapProducts);

// reduce()

//   fundamental idea is:

//Take all elements of an array and 
//reduce them into one final value.

const total1 = numbers.reduce((sum, number) => {

    return sum + number;

}, 0);

console.log(total1);

const total2 = cart.reduce((sum, product) => {
    return sum + product.price;
}, 0);

console.log(total2);

// Method       Main Purpose                        Return
//-----------------------------------------------------------------------
// forEach()    Do something for every item         Usually undifined
//-----------------------------------------------------------------------
// filter()     Keep matching items                 New array
//-----------------------------------------------------------------------
// reduce()     Combine items into one result       Any value











