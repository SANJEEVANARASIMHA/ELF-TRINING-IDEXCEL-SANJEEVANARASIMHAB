function Digits(n) 
{ 
    var largest = 0; 
    var smallest=0;
    while(n!=0)  
    { 
        var r=n%10; 
        // Find the largest digit 
        largest = Math.max(r, largest); 
        smallest = Math.min(r, smallest); 
  
        n = n / 10; 
    } 
    return [largest,smallest];
    
} 

var num=Digits([1,2,3,4,5]);
console.log(num);














