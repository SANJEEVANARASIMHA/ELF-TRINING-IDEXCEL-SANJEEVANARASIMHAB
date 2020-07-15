function positiveDominant(arr) 
{
    var positive=0;
    var negative=0;
    var duplicate=0;
    for (let index = 0; index < arr.length; index++) 
    {
        for (var index1 = index+1; index1< arr.length; index1++) 
        {
            if (arr[index]>0)
            {
                if (arr[index]!==arr[index1])
                {
                    positive++;
                }    
                else{
                    duplicate++;
                }
            } 
            else if (arr[index]!==arr[index1])
            {
                    negative++;
            }
            else{
                duplicate++;
            }      
            
        } 
    }

    if (duplicate>0)
    {
        return false;    
    } else if (positive>=negative) 
    {
        return true;    
    } else 
    {
        return false
    }
}

var arr=[1,2,3,-1,-3];

var b=positiveDominant(arr);
console.log(b);
