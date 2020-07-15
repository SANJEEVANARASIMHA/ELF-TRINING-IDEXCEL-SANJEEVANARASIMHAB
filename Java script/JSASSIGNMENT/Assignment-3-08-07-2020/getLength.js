function nesteadArray(arr) 
{
   var str=arr.toString();
    var str1=str.replace(/,/g,"");
  console.log(str1.length);
}
var arr=[[1, [2, [3, 4]]]];
nesteadArray(arr)



