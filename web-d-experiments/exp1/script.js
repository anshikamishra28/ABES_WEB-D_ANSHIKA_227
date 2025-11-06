/* <form action="" method="post">
<input type="text" name="fname" required></input>
<input type="submit" value="Submit"></input> */
function validateform(){
    let x=document.getElementById("psw").value;
}

const name=document.getElementById("name").value.trim();
const password=document.getElementById("password").value;

// myInput.onfocus = function() {
//   document.getElementById("length").style.display = "block"
// }
if(myInput.value.length >=8){
    length.classList.remove("invalid");
    length.classList.add("valid");
  }
   else {
    length.classList.remove("valid");
    length.classList.add("invalid");
}
