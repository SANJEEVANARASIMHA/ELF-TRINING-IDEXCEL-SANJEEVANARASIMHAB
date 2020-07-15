



var number=0;
var divv;
function login() {
   if (number===0) {
       divv=document.createElement('div');

    var uname=document.createElement('input');
    var brrr=document.createElement('br');
    var brr=document.createElement('br');
    uname.setAttribute('type','text');
    uname.setAttribute('placeholder','username');
    var upass=document.createElement('input');
    upass.setAttribute('type','password');
    upass.setAttribute('placeholder','password');
    var sub=document.createElement('input');
    sub.setAttribute('type','submit');
    sub.setAttribute('value','submit');
    divv.appendChild(uname);
    divv.appendChild(brrr)
    divv.appendChild(upass);
    divv.appendChild(brr);
    divv.appendChild(sub);
    document.body.appendChild(divv);
    number++;

   } else {
       
   }
}

function clearing() {
       divv.style.display='none';
}




var num1;
function crtele() {
            num1=document.createElement("h1");
            num1.innerText="h1 element is created";
    } 


function showele() {
    document.body.appendChild(num1);
} 

function delet() {
    num1.style.display='none';
}




function colorchange() {
    var para=document.getElementById("para1");
    para.style.padding="5px";
    para.style.color="white";
    para.style.backgroundColor="black";
    para.style.border="solid red 1px";
}

    function setnormal() {
        var para2=document.getElementById("para1");
        para2.style.backgroundColor="white";
        para2.style.padding="0px";
        para2.style.color="black";
        para2.style.border="white";
    
    }