function ArrayofMultiples(num,length) {
    var arr=[];
    var i=0;
    var j=1;
    for ( i=0; i<=length; i++) 
    {
        arr[i]=num*j;
        j++;
    }
    
    return arr;
}
var a=ArrayofMultiples(7,5);
console.log(a);


