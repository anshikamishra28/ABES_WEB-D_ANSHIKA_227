function clearerrors(){
    let errors=document.getElementsByClassName('formerror');
    for(let item of errors ){
        item.innerHTML="";
    }

}
function seterror(id,error){
    let element=document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML=error;
}
function validateform(){
    var returnval=true;
    clearerrors();
    var name=document.forms['myform']["fname"].value;
    if (name.length<6){
        seterror("name","  *Length of name is too short");
        returnval=false;
    }
    if (name.length==0){
        seterror("name","  *Length of name can not be zero");
        returnval=false;
    }

    var password=document.forms['myform']["fpassword"].value;
    if (password.length<6){
        seterror("password","  *Length of password is too short");
        returnval=false;
    }   

    var email=document.forms['myform']["femail"].value;
    if (email.length<6){
        seterror("email","  *Invalid email type");
        returnval=false;
    }
    let emailPattern = /^[^@]+@[^@]+\.[^@]+$/;
    if (!emailPattern.test(email)){
    seterror("email","  *Invalid email type");
    returnval=false;
}



    var phone=document.forms['myform']["fphone"].value;
    if (phone.length!=10){
        seterror("phone","  *Phone number should be of 10 digits");
        returnval=false;
    }


    return returnval;

    
    
}