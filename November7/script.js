let output
output  = Math.sign(-2556);
// Math .sign(x) return if x is negative (-1),null or positive(1);
output = Math.pow(2,3);
// Math.pow(x,y) return the value of x to the power of y;
output = Math.sqrt(90);
// return the sqrt of the number
output = Math.min(20,35,96,256,85); 
output = Math.max(50,89.65,568,951,56);

// Math.main() and Math.max() can be used to find the lowest or
// higest value in a list of argument:
output = Math.random();
// Math.random() return random number between 0 and 1;

output = Math.floor(Math.random()*10);
// return random number between 0 and 10;
output = Math.floor(Math.random()*100);

output = Math.floor(Math.random()*10)+1;

console.log(output);

function getRandomNUmber(min, max){
    return Math.floor(Math.random()*(max - min +1)+ min);
}
console.log(getRandomNUmber(10,20));

function getIncludedNumber(min, max){
    return Math.floor(Math.random()*(max - min +1)+ min);
}
console.log(getIncludedNumber(200,400));

// Map
const numbers =[1,2,3,4,5];

const newNumbers = numbers.map(double);

function double(x){
    return x*x;
}
console.log(numbers);
console.log(newNumbers);

const cars = ["Audi","Mercedes","jaguar","BMW","tata"];

let text =  `<ul>`;

cars.map((key) =>{
    text += `<li>${key}</li>`;
});

text += `</ul>`;

document.body.innerHTML = text;