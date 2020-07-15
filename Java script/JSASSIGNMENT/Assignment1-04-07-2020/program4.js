function VowelCount(str1) {
    var count=1;
    var str=str1.toLowerCase();
    var count=1;
    for (let index =0; index <str.length; index++) {

        if(str.charAt(index)=='a'||str.charAt(index)=='e'||str.charAt(index)=='i'||str.charAt(index)=='0'||str.charAt(index)=='u')
        {
            count++;
        }
    }
    return count;
}

console.log(VowelCount("sanjeev"));
