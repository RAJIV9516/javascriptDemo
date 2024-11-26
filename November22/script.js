// query selector

let h1  = document.querySelectorAll("h1");
console.log(h1);

h1[0].innerHTML = "hello from query selector";
h1[0].style.color = "red";
h1[0].style.backgroundColor ="pink";

h1[1].innerHTML = "hello from query selector second";
h1[1].style.color = "yellow";
h1[1].style.backgroundColor = "blue";

// whenener you pass a function as an argument to another function never use ()
// you can call regular function before declaration but not arrow function and function expression

let button = document.getElementById("btn");
button.addEventListener("click",display);

// regular function

function display(){
    alert("function called");
};


// function expression

const display1 = function(){
    alert("function expression called");

};

button.addEventListener("mouseover", function(){
    console.log("Hello from mouseover event");
});

// arrow function

const display2 = () => {
    alert("arrow function called");
};