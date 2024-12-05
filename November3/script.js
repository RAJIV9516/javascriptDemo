// write a loop  print odd number from to 100;

function printoddnumber(){
for(let i=1; i<=100 ;++i){
    if(i%2){
        console.log(i);
    }
}
}
printoddnumber();
for(let i=1; i<100; ++i){
    if(i%2!==0){
        console.log(i);
    }
}

// While loop

let text = "";
let y =1;
while(y<=10){
    text +=`The number is ${y} <br>`;
    // text += "The number is "+ y + "<br>"; 
    y++;

}
document.getElementById("demo").innerHTML = text;

// do while loop
let text1 = "";
let z = 1;
do{
    text1 += `The number is ${z} <br>`;
    console.log(z);
    z++;
}while(z<= 10);

document.getElementById("demo").innerHTML = text1;


function printStartPattern(row){
for(let i=1; i<=row; ++i){
    let stars = "";
    for(let j=1; j<=i; j++){
        stars +="*";

    }
       console.log(stars);
}
}
printStartPattern(7);

document.getElementById("demo").innerHTML = stars;