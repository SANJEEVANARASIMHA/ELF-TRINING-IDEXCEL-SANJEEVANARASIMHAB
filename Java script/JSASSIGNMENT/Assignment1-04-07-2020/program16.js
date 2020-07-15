function oddeven(num1) {
    var n1=num1;
    var counteven=0;
    var countodd=0;
    while(n1!=0)
    {
        var r=n1%10;
        if (r%2==0 ) {
            counteven++;
        }
        else if (r%2==1) {
            countodd++;
        }
        n1=n1/10;
    }

    if(counteven==1 && countodd==1)
    {
        return true;
    }
    else{
        return false;
    }
}

var res=oddeven(12);
console.log(res);
