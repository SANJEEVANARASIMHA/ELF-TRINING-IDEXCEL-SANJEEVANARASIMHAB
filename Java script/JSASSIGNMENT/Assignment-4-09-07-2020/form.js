
function addPhones(){
    var phone=document.getElementById('inputText');
    var addPhone=document.getElementById('demo');
    var list=document.createElement('li');
    list.innerText=phone.value;
    addPhone.appendChild(list);
}


function removePhones() {
    
    var removePhone=document.getElementById('demo');
    removePhone.removeChild(removePhone.lastChild);
}



function addSims(){
    var sim=document.getElementById('inputText1');
    var addSim=document.getElementById('demo1');
    var list=document.createElement('li');
    list.innerText=sim.value;
    addSim.appendChild(list);
}


function removeSims() {
    
    var removeSim=document.getElementById('demo1');
    removeSim.removeChild(removeSim.lastChild);
}


function removeClick(this) {
    var removePhone=document.getElementById('demo li');
    removePhone.remove(this);
}
// function removeLast() {
//     var removePhone=document.getElementById('demo1');
//     removePhone.removeChild(removePhone.lastChild);
// }










// var ulele=document.getElementById('ulelement');
//    var lielement=document.createElement('li');
//     var x=document.getElementById('inputText');
// var isAppend=false;


// function testing() {
//     x.value=x.value.toUpperCase();
//     console.log(x.value); 
// }

// function addPhones() {
//     if (isAppend) {

//         lielement.innerText=x.Value;
        
//     } else {
//         lielement.innerText=x.Value;
//         isAppend=true
//         ulele.insertBefore(lielement,ulele.lastChild);
//     }
// }

// function removeList(){
//     ull.removeChild(ull.lastChild);
// }


// // function myfunctionName(){
// //    if ( document.myForm.myText.value=='') {
// //        return false;
       
// //    } else {
// //        return true;
// //    }
// // }
