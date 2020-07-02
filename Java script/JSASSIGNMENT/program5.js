function sumOfcubes(array) {
    
    var sum=0;
   for (let index = 0; index < array.length; index++) {
       var r= array[index];
       r=r*r*r;
       sum=sum+r;
   }
   return sum;
}

var arr=[3,4,5]
var res=sumOfcubes(arr);
console.log(res);
