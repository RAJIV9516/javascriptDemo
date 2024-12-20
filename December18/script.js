const fruits = ["Apple", "orange", "Grapes", "Watermelon", "Kiwi"];

// sort method it sorts the items alphabetically

fruits.sort();
console.log(fruits);
// reverse method -it reverse the item of an array
fruits.reverse();
console.log(fruits);
// ================================================================================

const numbers = [100,4,356,4999,2897];

numbers.sort(function(a,b){
    return a-b;
    // sort in assending order
});
console.log(numbers);
numbers.reverse();
console.log(numbers);

// to string -to convert an array to a string
// const newFruits = fruits.toString();
// console.log(newFruits,typeof newFruits);

// join method - to join the element of an
// array into a string with a separator
const joinedArray = fruits.join("*");
console.log(joinedArray);
// ==================================================================

  const students =[
    {name: "Luvkush", course: "Frontend", city: "Bhopal"},
    {name: "Rajiv", course: "Frontend", city: "Itarsi"},
    {name: "Abhinav", course: "Frontend", city: "Bhopal"},
    {name: "Harsh", course: "Frontend", city: "Bhopal"},
    {name: "Suuuuu", course: "Frontend", city: "Rewa"},
  ];

  function display(){
    let table =`
    <table border="1px" width="60px" bgcolor="lightblue">
    <tr>
    <th>Name</th>
    <th>course</th>
    <th>city</th>
    </tr>

    `;
    students.map(function(y){
        table +=`
        <tr>
        <td>${y.name}</td>
        <td>${y.course}</td>
        <td>${y.city}</td>
        </tr>
        `
    })
    table += "</table>";
    document.getElementById("demo").innerHTML=table;

  }
