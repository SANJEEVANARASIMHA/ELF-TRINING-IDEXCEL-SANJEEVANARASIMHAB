// debugger;
var username=document.getElementById('header');
// console.log(username);
var id=document.getElementById('para1');
var pwd=document.getElementById('para2');
var lgn=document.getElementById('btn');
var current=sessionStorage.getItem('current');
if (current==null)
{
    username.innerText='invalid login details please login again' 
    username.style.color='red';   
    lgn.innerText='login';
}
else 
{
    var userdata=JSON.parse(current);
    username.innerText=userdata.firstname;
    id.innerText=userdata.emailId
    pwd.innerText=userdata.NewPassword;       
}

 
function removecurrent()
{
    sessionStorage.removeItem('current');
    location.replace("/Fb.html");
}
