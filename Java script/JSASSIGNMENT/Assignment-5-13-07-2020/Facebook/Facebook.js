
var formone=document.formOne
    formone.addEventListener('submit',userNameValidate);
function userNameValidate() {
    var user=document.getElementById('user').value;
    console.log("user name "+user);
    var regx1=/^[6-9][0-9]{9}$/
    var para=document.getElementById('para');
    if (regx1.test(user))
    {
        para.innerText='valid username'
        para.style.color='green';
        
    } 
    else {
        para.innerText='invalid username';
        para.style.color='red';
        
    }
        var pass=document.getElementById('pass').value;
        console.log("password "+pass);
        var reg=/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/;
        var err=document.getElementById('para1');
            err.innerText="enter password";
    
    
         if (reg.test(pass)) 
        {
                err.innerText='valid password'
                err.style.color='green';      
        }
        else{
            err.innerText='invalid password';
            err.style.color='red';
            
        }
    return false;
}

var formtwo=document.formTwo
    formtwo.addEventListener('submit',firstNameValidate);

function firstNameValidate() {
    var firstname=document.getElementById('userFirstname').value;
    var reg=/^([a-zA-Z]+)$/;
    var err=document.getElementById('para2');
    if (reg.test(firstname))
    {
        err.innerText='valid UserName'
        err.style.color='green';
    } 
    else 
    {
        err.innerText='invalid UserName ';
        err.style.color='red';
    }

    var firstname=document.getElementById('userLastName').value;
    var regx1=/^([a-zA-Z]+)$/;
    var err1=document.getElementById('para3');
    if (regx1.test(firstname))
    {
        err1.innerText='valid UserName'
        err1.style.color='green';
    } 
    else {
        err1.innerText='invalid UserName ';
        err1.style.color='red'; 
    }

    var EmailId=document.getElementById('userEmailId').value;
    var reg2=/^([a-z A-Z\.]+)([0-9 a-z\.]+)?@gmail.com$/;
    var err2=document.getElementById('para4');
    if (reg2.test(EmailId))
    {
        err2.innerText='valid UserName'
        err2.style.color='green';
    } 
    else {
        err2.innerText='invalid UserName ';
        err2.style.color='red';
    }

    var NewPassword=document.getElementById('newPassword').value;
    console.log("user name "+NewPassword);
    var reg3=/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/;
    var err3=document.getElementById('para5');

    if (reg3.test(NewPassword))
    {
        err3.innerText='valid username'
        err3.style.color='green';
    } 
    else {
        err3.innerText='invalid username';
        err3.style.color='red';
    }


    var today = new Date();
    console.log(today);
    var b=document.getElementById('date').value;
    console.log(b);
    var birth = new Date(b);
    var myAge = ~~((Date.now(today) - birth) / (31557600000));
    var err4=document.getElementById('para6');

    console.log(myAge);
	if(myAge >=18) {
        err4.innerText=" valid age";
        err4.style.color='green';
    }
    else
    {
            err4.innerText="age should greter than 18";
            err4.style.color='red';
    }
    return false;
}


