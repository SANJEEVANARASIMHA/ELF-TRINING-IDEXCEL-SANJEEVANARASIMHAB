function sevenBoom(arr) 
{
   var str=arr.toString();
        var b=str.includes('7');
         if (b===true)
          {
            return 'boom'
          }
          else 
          {
            return 'there is no 7 in the array'
          }    
        
}


var arr=[76, 55, 44, 32];
var str=sevenBoom(arr);
console.log(str);

