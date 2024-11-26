function change(){
    let heading = document.getElementById("demo")
    heading.innerHTML = 
    heading.style.color = "red";
}
// ================
function multiply(){
    var num1 =parseFloat(document.getElementById("input1").value);
    var num2 =parseFloat(document.getElementById("input2").value);
    var result = num1*num2;
    document.getElementById("demo").innerHTML=result;
}

function divide(){
    var num1 =parseFloat(document.getElementById("input1").value);
    var num2 =parseFloat(document.getElementById("input2").value);
    var result = num1%num2;
    document.getElementById("demo").innerHTML=result;
}
// ===================
var width =prompt("Enter a width");
var height =prompt("Enter a height");

var area =width*height;
document.getElementById("demo").innerHTML=area;