function validate() {
    
    var user=document.getElementById('my-input').value;
    var regx=/^([a-z A-Z\.]+)([0-9 a-z\.]+)?@gmail.com$/;
    
    var para=document.getElementById('para');
    if (regx.test(user)) 
    {
            para.innerText='valid email id'
            para.style.fontSize="small";
            para.style.color='green';
            return true;
    }
    else{
        para.innerText='invalid email id';
        para.style.color='red';
        return false;
    }
    

}



function userNameValidate() {
    var pass=document.getElementById('password').value;
    console.log("password "+pass);
    var reg=/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/;
    var err=document.getElementById('para');
     if (reg.test(pass)) 
    {
        err.innerText='valid password'
        err.style.color='green'; 
        return true;     
    }
    else{
        err.innerText='invalid password';
        err.style.color='red';
        return false;
    }

}
