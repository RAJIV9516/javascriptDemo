// 1. write a function that takes 3 parameters and perform arithmetic operations on that.
// 2 . take 2 variables of your name and age and display it using the function in innerhtml and console

// 1
function addition(num1,num2){
    return num1+num2;
}
console.log(addition(40,40));
document.getElementById("demo").innerHTML = addition(100,400);

let number =5;
function cube(){
    return number*number*number;
}
console.log(cube());
document.getElementById("demo").innerHTML = (cube());

const multiply = function(x,y){
    return x*y;

}
console.info(multiply(10,20));

// 2
function b(){
    console.log("rajiv prajapati");
    console.log(19);
    document.write("RAJIV PRAJAPATI");
    document.write(19);
}

b();

