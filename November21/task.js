
// const divide  =(a,b)=>{
//     return a/b;
// }

// console.log(divide(100,20));

var heading = document.getElementById("demo");
console.log(heading);

var display =()=>{
    heading.innerHTML = "This is coming from javascript";
   
}
var styling= ()=>{
    heading.style.color = "red";
    heading.style.backgroundColor = "yellow";
    heading.style.border = "2px solid black";
    heading.style.padding = "30px";
    heading.style.boxShadow = "0px 0px 10px 2px blue";
}

var input1 = document.getElementById("myinput");
console.log(input1);
var myimage = document.getElementById("myimage");

var change=()=>{
    input1.value = "Indore";
    myimage.src = "https://platinumlist.net/guide/wp-content/uploads/2023/03/8359_img_worlds_of_adventure-big1613913137.jpg-1024x683.webp"
}