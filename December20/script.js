// spread operator
// it copies an object  propertice into another object
// it copies an array elements into another array

const numbers = [1,2,3,4,5,6,7];
const numbers3 = [10,20,30]
const numbers2 = [...numbers,8,9,10,11, ...numbers3];
console.log(numbers2);

const person ={
    name: "RAjiv prajapati",
    age: 45,
    city: "Itarsi",
}

const person2 ={...person, hobby: "dance"};
console.log(person2);
// ============================================================
// Rest parameter(...)
// used in the function parameter to

function display(...a){
    console.log(a);
}
display(10);
display(10,20);
display(10,20,30,50);
// write a function that returns the sum of function

function sum(...num){
    let total =0;
    // for(let i of num){
    //    total += i;
    // }
    
    return total;
}
console.log(sum(10,20));
console.log(sum(100,200,300,400));