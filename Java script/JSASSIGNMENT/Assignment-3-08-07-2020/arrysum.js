function arraySum(arr) {
    var sum=0;
    var value;
    for (let index = 0; index < arr.length; index++) {
        value = Math.abs(arr[index]);
        sum=sum+value;
    }
    return sum;
    
}

var arr=[2, -1, -3, 4, 8];
var res=arraySum(arr);
console.log(res);
