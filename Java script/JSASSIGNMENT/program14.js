function calucater(num1,operator,num2) {
    var num;
    if (operator=="+") {
        
        return (num=num1+num2);
    }
    else if (operator=='-') {
       return  num=num1-num2;
    }
    else if (operator=='*') {
        return num=num1*num2;
    }
    else if (operator=='/') {
       return  num=num1/num2;
    }
    
}

var res=calucater(2,'+',2);
console.log(res);
