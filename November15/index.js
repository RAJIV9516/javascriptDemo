var heading = document.getElementById("demo");

var name = "john doe";
var age = 19;
// concatination
console.log(name + " " + age);

// heading.innerHTML = name + " " + age;

// to get value from user
var username = prompt("enter your name ");
var userage = prompt("enter your age ");

heading.innerHTML = username + " " + userage;

