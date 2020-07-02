function counttrues(a)
 {
    var count=0;
    for (let index = 0; index<a.length; index++) 
    {
        if (a.includes(true,index)==true)
        {   
                count++;
               
        } 
    }
    return count;
}

var arr=[true,false,true,true];
var count=counttrues(arr);
console.log(count);
