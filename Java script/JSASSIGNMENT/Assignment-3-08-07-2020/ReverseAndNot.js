
function reverseAndNot(n)
{   
    n = n + "";
    var str="";
    str=n.split("").reverse().join();
    
    return str+n;
    
}

var num=123;
var res=reverseAndNot(num);
console.log(res);

