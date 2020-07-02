function squareOfDigit(num) {

   var largest = ""; 
   var sum="";
    while(num!=0)  
    { 
        var r=num%10; 
        // Find the largest digit 
        largest = largest+(r*r);
        n = num / 10; 
    } 
    return largest;
    }

var aa=squareOfDigit(9119);
console.log(aa);
