const students =[
    {name: "Luvkush", course: "English", Marks: 42},
    {name: "Rajiv", course: "English", Marks: "42"},
    {name: "Abhinav", course: "English", Marks: "42"},
    {name: "Harsh", course: "English", Marks: "42"},
    {name: "Suuuuu", course: "English", Marks: "42"},
  ];

  function display(){
    let table =`
    <table border="2px" width="160px" bgcolor="yellow">
    <tr>
    <th>Name</th>
    <th>subject</th>
    <th>marks</th>
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
