// by using  named function   area of circle//
function areaofcircle(r){
            var pi=3.14;
            var area=pi*r*r;
            console.log(area);
            
}
areaofcircle(10);


// by using  function expression area of triangle//

var at=function(b,h){
    var areaoftringle=b*h/2;
    return areaoftringle;
}
console.log(at(10,20));



// by using  IIFE perimeter of a circle//
(function(r){
    var pi=3.14;
    var pericircle=2*pi*r;
    console.log(pericircle);
    
}) (7)


// by using  arrow function perimeter of a triangle//

var prioftringle=(a)=>{
    var peritri=3*a;
    return peritri;
}
console.log(prioftringle(10));




// by using  Named function area of a parllelogram //
 function areaofparllelogram(b,h) {
     var area=b*h;
     return area;
 }
 var areap=areaofparllelogram(5,5)
 console.log(areap);
 




