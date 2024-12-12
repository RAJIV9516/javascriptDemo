// key in object/array
// for in loop
// denote index number
const person ={
    name :"Rajiv",
    age : 19,
    city : "Bhopal",
};

let text = "";
for(let x in person){
    text += person[x] + "<br>" ;
}

const number =[12,43,73,87,90];
let text1 = "";
for(let i in number){
    text1 += number[i] + "<br>";
}

document.getElementById("demo1").innerHTML = text1;

// variable of object/array
// for of loop
// denote element

const name = "Javascript";
let text2 = "";
for(let x of name){
    text2 += x + "<br>";
}
// in for in loop variable will contain index of each person
const persons = ["rajiv", "suuuu", "abhinav"];
// in for of loop variable will contain value of each persons
for(let z of persons){
    text2 += z + "<br>";
}

document.getElementById("demo").innerHTML = text2;
// =================================

const num1 =[10,20,30,40,50];
text3 = "";
for(let e in num1){
    text3 += e*10 + "<br>";
}
for(let y of num1){
    console.log(y*10);
}
document.getElementById("demo").innerHTML = text3;
