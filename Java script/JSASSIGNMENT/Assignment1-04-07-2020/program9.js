function firstVowelIndex(str){
    
    for (let index =0; index <str.length; index++) {

        if(str.charAt(index)=='a'||str.charAt(index)=='e'||str.charAt(index)=='i'||str.charAt(index)=='0'||str.charAt(index)=='u')
        {
            return index;
            break;
        }
       
    }
    
}

var a=firstVowelIndex("snnjeev");
console.log(a);
