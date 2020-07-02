
function HelloBye(name,num) {
    if(num==1)
    {
        return "Hello "+name
    }
    else{
        return "Bye "+name;
    }   
}
var name='sanjeev';
var num=0;
var output=HelloBye(name,num);
console.log(output);
