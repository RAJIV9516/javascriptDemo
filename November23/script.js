// function clickme(){
//     alert("Rajiv Prajapati");
// }

// let button = document.getElementById("click");
// button.addEventListener("mouseover",clickme);

// contion

document.getElementById("myform").addEventListener("submit",validate);
function validate(e){
       // to prevent the default behavior of form submission 
       e.preventDefault();
       // fetch input values

       let myname = document.getElementById("name").value;
       let myemail = document.getElementById("email").value;
       let password = document.getElementById("password").value;
       let confirmpassword = document.getElementById("cnfpsd").value;

       console.log(myname, myemail, password, confirmpassword);
       //  check if any filed is empty
       if(myname == "" || myemail == "" || password == "" || confirmpassword == ""){
        alert("All fileds are required");
        return false;
       }
       if(password !==confirmpassword){
              alert("password does not match")
              return false;
       }
       alert("form submitted successfully");

}