function duplicate(str) {

    var splitString = str.split(""); 
    
    for (let index = 0; index < splitString.length; index++) 
    {
        var count=1;
        for (let j = index+1; j < splitString.length; j++)
         {
           
            if (splitString[index]===splitString[j])
             {
                count++;
             }
        }
        
        if (count>=2) {
            return true;
        }
        else{
            return false;
        }
    }
  
    var joinArray = reverseArray.join(""); 
    
    return joinArray; // "olleh"
}
var aa="sanjeev";

var a=duplicate(aa);
console.log(a);
