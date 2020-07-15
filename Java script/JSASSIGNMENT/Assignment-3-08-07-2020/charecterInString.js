function charecterInString(char,str)
 {
     var count=0;
    for (var index = 0; index<str.length; index++)
    {
        if (str.charAt(index)===char) 
        {
            count++;
        }
        
    }    
    return count;
}

var s='b';
var str='big fat bubble';

var res=charecterInString(s,str);
console.log(res);
