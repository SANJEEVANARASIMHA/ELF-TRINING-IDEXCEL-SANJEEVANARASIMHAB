function Digits(n) 
{ 
    var largest = 0; 
    while(n!=0)  
    { 
        var r=n%10; 
        // Find the largest digit 
        largest = Math.max(r, largest); 
        n = n / 10; 
    } 
    return largest;
    
} 

var num=Digits(365);
console.log(num);

  