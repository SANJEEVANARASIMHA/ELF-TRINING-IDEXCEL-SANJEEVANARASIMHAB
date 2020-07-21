
var formone=document.formOne
    formone.addEventListener('submit',userNameValidate);

function userNameValidate()
{
    var id=document.getElementById('user').value;
    var pwd=document.getElementById('pass').value;
    var para=document.getElementById('para');

    var userfound=localStorage.getItem(id);
    if (userfound===null)
    {
        para.innerText='user not found'
        para.style.color='green';
        
    } 
    else {
        var current=JSON.parse(userfound)
        if (current['NewPassword']===pwd) 
        {
            sessionStorage.setItem("current",userfound)
            formone.submit();   
            return true;
        } 
        else
        {
            para.innerText='invalid passwod'
            para.style.color='red';
            return false;
        }
    }
    
}


    var formtwo=document.formTwo
    formtwo.addEventListener('submit',firstNameValidate);

    
// var registration= localStorage.getItem("registration").registration ? localStorage.getItem("registration").registration : [];
var details={};

function firstNameValidate()
{
    // debugger;
    details.firstname=document.getElementById('userFirstname').value;
    // console.log("getting first name "+firstname);
    details.lastname=document.getElementById('userLastName').value;
    // console.log("getting last name "+lastname);
    details.emailId=document.getElementById('userEmailId').value;
    // console.log("getting emialid "+emailId);
    details.NewPassword=document.getElementById('newPassword').value;
    //console.log("getting password "+NewPassword );
    details.b=document.getElementById('date').value;

    details.Gender=radiochecking();
    
    // console.log("getting dob "+b);
    // console.log("before form info "+forminfo);
    if (fname(details.firstname)&& Lname(details.lastname)&& eid(details.emailId)&& unewpass(details.NewPassword)&& udob(details.b)) 
    {
        console.log(" method if block is true");    
        // registration.push(details);
        console.log("object details "+details);
        // console.log("array details "+registration);
        // JSON.stringify(details);
        localStorage.setItem(details.emailId,JSON.stringify(details));
        formtwo.submit();
        return true;
    }
     else 
     {
        return false;
    }     
}

function fname(firstname) 
{
    console.log('fname function working');
    
    var reg=/^([a-zA-Z]+)$/;
    var err=document.getElementById('para2');
    if (reg.test(firstname))    
    {
        err.innerText='valid UserName'
        err.style.color='green';
        return true
    } 
    else 
    {
        err.innerText='invalid UserName ';
        err.style.color='red';
        return  false;
       
    }
}

function Lname(lastname)
{
   
    var regx1=/^([a-zA-Z]+)$/;
    var err1=document.getElementById('para3');
    if (regx1.test(lastname))
    {
        err1.innerText='valid UserName'
        err1.style.color='green';
   
        return true;
    } 
    else {
        err1.innerText='invalid UserName ';
        err1.style.color='red'; 
        return false
    }    
}


function eid(emailId) 
{
   
    // var reg2=/^([a-z A-Z\.]+)([0-9 a-z\.]+)?@gmail.com$/;
    var reg2=/^([a-z 0-9\.-]+)@([a-z0-9-]+).([a-z]{2,8}).([a-z]{2,8})?$/
    var err2=document.getElementById('para4');
    if (reg2.test(emailId))
    {
        err2.innerText='valid UserName'
        err2.style.color='green';
      
        return true
    } 
    else {
        err2.innerText='invalid UserName ';
        err2.style.color='red';
        return false
    }
}



function unewpass(NewPassword) 
{
    // console.log("user name "+NewPassword);
    var reg3=/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/;
    var err3=document.getElementById('para5');

    if (reg3.test(NewPassword))
    {
        err3.innerText='valid username'
        err3.style.color='green';
        
        return true
    } 
    else {
        err3.innerText='invalid username';
        err3.style.color='red';
        return false;
    }    
}

function udob(b)
{
    // debugger;
    var today = new Date();
    // console.log(today);
   
    // console.log(b);
    var birth = new Date(b);
    var myAge = ~~((Date.now(today) - birth) / (31557600000));
    var err4=document.getElementById('para6');

    // console.log(myAge);
	if(myAge >0) {
        err4.innerText=" valid age";
        err4.style.color='green';
        return true;
       
    }
    else
    {
            err4.innerText="in valid age";
            err4.style.color='red';
            return false;
    }
    
}


function radiochecking()
{
    var val;
    var radios=formtwo['radioname'];
    for (var i=0;i<radios.length;i++) {
        if (radios[i].checked)
        {
           if (i==0)
            {
                val='Femlae';
                break;      
           } 
           else if (i==1)
            {
                val='Male';
            break;   
           }
            else
            {
                val='Other';
            break;   
           }
        }
        
    }
    return val;
}