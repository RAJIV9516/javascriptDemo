// object literal

const person = {
    name: "Rajiv",
    age: 30,
    city: "Bhopal",
};
// to know the data type of person
console.log(typeof person);
console.log(person.name)
console.log(person.age)
console.log(person.city)

// Array
const number = [10,20,30,85];

console.log(number[0]);
console.log(number[1]);

// Function
// Function declaration
function sayHello(){
    console.log("Hello Everyone !");
    alert("Hello");
    document.write("Hello");

}

// function calling

sayHello();

// when parameters declaring a function
// parameters
function addition(num1,num2){
    return num1+num2;

}

// argument while calling the function
console.log(addition(20,30));
document.getElementById("demo").innerHTML = addition(100,700);

let number1 = 456;

function cube(){
    return number1 *number1*number1;
}
console.log(cube());

// function experession

const multiply = function(x,y){
    return x * y;
}
console.log(multiply(5,8));

// arrow function

const divide  =(a,b)=>{
    return a/b;
}

console.log(divide(100,20));


