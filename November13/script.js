// 4 ways to display output from javascript;

console.log("Hello World!");
window.alert("Hello World!");
document.write("Hello World!");

document.getElementById("demo").innerHTML = "Hello World!";


// The HTML DOM (DOCUMENT OBJECT MODEL)
// object , function , array

// When a web page is loaded, the browser creat 

//  var , let , const
// global values
var global ="johan";
let global ="dow";
const global ="harry";
// var has global scope and let and const has bloack or function scope

{
    var a=10;
    let b=20;
    const c=30;
    console.log(b);
}
console.log(a);
console.log(c);