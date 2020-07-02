function Mean(num) {

    var n1=num;
    var sum=0;
    while(n1!=0)
    {
        var r=n1%10;
        sum=sum+r;
        n1=n1/10;
    }
    return sum/2;
    
}

var res=Mean(42);
console.log(res);
