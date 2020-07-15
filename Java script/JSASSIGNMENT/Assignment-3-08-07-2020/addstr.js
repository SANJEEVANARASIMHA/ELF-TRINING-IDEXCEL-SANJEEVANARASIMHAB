
function addStr(str,num) {
    var text="";
    for (num; num!==0; num--) {

            text=text.concat("",str);
    }
    return text;
}

var str1=addStr('kiwi',3);
console.log(str1);
