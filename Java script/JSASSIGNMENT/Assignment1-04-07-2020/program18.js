function reverseString(aa) {
    var str=aa.toString();

    var splitString = str.split(""); 

    var reverseArray = splitString.reverse(); 
  
    var joinArray = reverseArray.join(""); 
    
    return joinArray; // "olleh"
}
 
var aa=5121;

var a=reverseString(aa);
console.log(a);
