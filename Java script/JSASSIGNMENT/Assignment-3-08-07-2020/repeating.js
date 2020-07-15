

function repeatingLetter(str) {
    var s="";
    for (let index = 0; index<str.length; index++) {
         s=s.concat("",str.charAt(index));
         s=s.concat("",str.charAt(index));
    }
    return s;
}


var str='string';
var output=repeatingLetter(str);
console.log(output);
