function countHasPlus(a){
    var Hasesh=0;
    var plus=0;
    var str="# or + not presented";
    for (let index = 0; index < a.length; index++) {
        if (a.charAt(index)==='#') {
                Hasesh++
        } else if (a.charAt(index)==='+') {
            plus++;
        }
        else{
          return str;  
        }
        
    }
    return [Hasesh,plus];
    
}

var a=countHasPlus("###+++");
console.log(a);
