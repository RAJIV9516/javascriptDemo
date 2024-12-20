const actors = [
    {name: "Shahrukh khan", location: "Mumbai"},
    {name: "Johnny Dep", location: "London"},
    {name: "Brad pitt", location: "New York"},
    {name: "Tony stark", location: "Marvels"},

]

function display(){
    let table =`
    <tr>
    <th>Name</th>
    <th>Location</th>
    </tr>
    `;
   actors.map(function(x){
    table +=`
    <tr>
         <td>${x.name}</td>
        <td>${x.location}</td>
    </tr>
    `;
   })
   table +=`</table>`;
document.getElementById("demo").innerHTML=table;
}

//map returnns a new array
// forEach doesnote returns a new array just work on the elements
// filter

// filter numbers greater than 20===================================
const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

const filteredNum = numbers.filter(function(num){
    return num%2 ===0;
});
console.log(filteredNum);
console.log(numbers);

// =================================================================
const greater = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

const filteredget = numbers.filter(function(get){
    return get>15;
});
console.log(filteredget);
console.log(numbers);
// =============================================================
// Date format
const d = new Date();
// months -0-11, days -0-6
// years,month,date,hour,minute,second,millisecond
d = new Date(2020,11,23,12,34,45,3000);
d = new Date(2020,15,45,12,34,45,3000);
// year,month,date,hour,minute,second
d= new Date(2020)
console.log(d);

const tody = new Date();
// date methods
const year = today.getFullyear();
console.log(year);

const month = today.getMonth();
console.log(month);
const date = today.getDate();
console.log(Date);
