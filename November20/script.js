function addition(){
    var num1 =parseFloat(document.getElementById("input1").value);
    var num2 =parseFloat(document.getElementById("input2").value);
    var result = num1+num2;
    document.getElementById("demo").innerHTML = result;

}

function subtract(){
    var num1 =parseFloat(document.getElementById("input1").value);
    var num2 =parseFloat(document.getElementById("input2").value);
    var result = num1-num2;
    document.getElementById("demo").innerHTML = result;
}

function multiply(){
    var num1 =parseFloat(document.getElementById("input1").value);
    var num2 =parseFloat(document.getElementById("input2").value);
    var result = num1*num2;
    document.getElementById("demo").innerHTML = result;
}

function division(){
    var num1 =parseFloat(document.getElementById("input1").value);
    var num2 =parseFloat(document.getElementById("input2").value);
    var result = num1%num2;
    document.getElementById("demo").innerHTML = result;
}

function display(){
    let myinput = document.getElementById("myinput").value;
    let display = document.getElementById("demo").innerHTML = myinput;
}