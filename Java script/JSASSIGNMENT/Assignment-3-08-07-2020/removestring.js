var arr=[1,2,'a','b',3,4];


function removeStr(l) { 
    
      let newArray = []; 
    
      for (let i = 0; i < l.length; i ++) {
          !isNaN(l[i]) ? newArray.push(l[i]) : ''
      }
      return newArray;
    }

var aa=removeStr(arr);
console.log(aa);

