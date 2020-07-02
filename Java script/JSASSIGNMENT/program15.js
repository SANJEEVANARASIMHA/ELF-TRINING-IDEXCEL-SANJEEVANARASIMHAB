function indexMultipler(a) {
    
    var sum=0;
    for (let index = 0; index < a.length; index++) {
        sum=sum+a[index]*index;
        
    }
    return sum;
}

var aa=[1,2,3,4,5]
var res=indexMultipler(aa)
console.log(res);
