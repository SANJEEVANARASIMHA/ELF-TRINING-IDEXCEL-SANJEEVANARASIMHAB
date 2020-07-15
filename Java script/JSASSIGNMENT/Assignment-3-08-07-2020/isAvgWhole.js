function isAvgWhole(arr)
 {
    var lngth=arr.length;
    var sum=0;
    for (let index = 0; index < arr.length; index++) 
    {
        sum=sum+arr[index];
    }

    if (sum%lngth===0) 
    {
        return true;
    } 
    else 
    {
        return false
    }
}

var arr=[1,2,3,4];

var res=isAvgWhole(arr);
console.log(res);
