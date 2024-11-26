function display(){
    console.log("Hello World");
}

let name="RAJIV PRAJAPATI";
let age= 19;
function show(){
    document.getElementById("demo").innerHTML = name+" "+age;

}
// show();

let number= 4;
function cube(){
  var number =prompt("enter your number");
  var cube = document.getElementById("demo").innerHTML = number*number*number;

}

function change(){
    var heading = document.getElementById("ab");
    heading.style.color = "red";
    heading.style.backgroundColor = "yellow";
}

