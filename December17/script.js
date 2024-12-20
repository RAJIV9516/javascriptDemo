const array1 = [1,2,3,4];
// array literal
console.log(array1);
const arr = new Array(23,45,6,8);
console.log(arr);
// using new keyword
const array2 =[];
array2[0] = "happy";
array2[1] = "go";
array2[2] = "rajiv";

console.log(array2);

const fruits = ["Apple", "Banana", "orange", "Watermelon"];

const mixed =[1,2,"hello",{name:"john"},[10,20,30]];

console.log(mixed[3].name);
console.log(mixed[4][1]);

let flen = fruits.length;
let text ="";

for(let i=0; i<flen; i++){
    console.log(fruits[i]);
    text +=`<li>${fruits[i]}</li>`

}
text  += "<ol>"


document.body.innerHTML = text;

// push and unshift
// push method adds an element to the end of the array
fruits.push("DragonFruits");
console.log(fruits);

// unshift method adds an element to the beginning of the array
fruits.unshift("strawberry");
console.log(fruits);

// pop and shift
// pop method removes an element from the end of the array
// fruits.pop();
// console.log(fruits);

// shift method remove an element from the 
// fruits.shift();
// console.log(fruits);

// slice method(starting index, ending index)
const extracted = fruits.slice(1,4);
console.log(extracted)
console.log(fruits);

// splic method(starting index,deletecount,oyher element)
// can be used to remove as well add Element
fruits.splice(2,3,"lemon","cherry");
console.log(fruits);
fruits.splice(2,0,"Grapes","papaya");
console.log(fruits);
