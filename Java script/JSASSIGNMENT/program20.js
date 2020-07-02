function getMissingNo(a,n) 
    { 
        var i, total; 
        total = (n + 1) * (n + 2) / 2; 
        for (i = 0; i < n; i++) 
            total -= a[i]; 
        return total; 
    } 
  

        var a= [1, 2, 4, 5, 6]; 
        var miss = getMissingNo(a, 5);
        
console.log(miss);

      