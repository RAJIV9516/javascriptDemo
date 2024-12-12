// ====================string===============
let header ="Templates literals";
let tags =["template literals","javascript","es6"];
let text = `<h2>${header}</h2><ul>`;

for(let x of tags){
    text += `<li>${x}</li>`;

}
text +=`</ul>`;

document.getElementById("container").innerHTML = text;

// a function passed as an argument to another function is called as a callback function.

// Array .forEach()

const numbers = [23,45,68,897];

numbers.forEach(calculate);
function calculate(y){
    console.log(y*100);
}

// forEach method task a callback function as an argument


let output = Math.PI;
output = Math.round(45.24545255);
// math.round to the nearest whole number
output = Math.ceil(45.234);
// Math.ceil round to the nearest heigher whole number
output = Math.floor(35.677);
// Math.ceil round to the nearest lower whole number
output = Math.truck(2.999);
// Math.trunk round the integer value
console.log(output);
