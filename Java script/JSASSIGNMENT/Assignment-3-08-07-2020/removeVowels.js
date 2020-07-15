
function removeVowel(str) {

    let newArray = []; 
    
    for (let i = 0; i < str.length; i ++) {
        !isVowel(str.charAt(i))? newArray.push(str[i]) : ''
    }

    var strin=newArray.toString().join();
    
    return strin;
    
    
}


function isVowel(l) {

    if (l=='a'||l=='e'|| l=='i'||l=='o'||l=='u'||l=='A'||l=='E'|| l=='O'||l=='I'||l=='U'||l==" ")
     {
        return true;
    }
    else{
        return false;
    }
    
}


// var str="sanjeev jagga pavan "
// var ary=removeVowel(str);
// console.log(ary);
var str=["sanjeev" ,"jagga", "pavan"];
 var ary=removeVowel(str);
 console.log(ary)
 


