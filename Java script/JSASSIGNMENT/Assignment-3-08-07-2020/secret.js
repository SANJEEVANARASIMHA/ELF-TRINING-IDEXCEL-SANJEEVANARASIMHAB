// A group of friends have decided to start a secret society. The name will be the first letter of each of their names, sorted in alphabetical order.

// Create a function that takes in an array of names and returns the name of the secret society.

// Examples
// societyName(["Adam", "Sarah", "Malcolm"]) ➞ "AMS"

// societyName(["Harry", "Newt", "Luna", "Cho"]) ➞ "CHLN"

// societyName(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"]) ➞ "CJMPRR"
// Notes
// The secret society's name should be entirely uppercased.




function secretName(arr) {
    var str="";
    var opt="";
    var final="";
    for (var index = 0; index < arr.length; index++) 
    {
            str=arr[index];
            opt=str.charAt(0);
            final=final.concat("",opt);
    }
    var arr = final.split('');
    var sorted = arr.sort();
    return sorted.join('');
}

var arr=["Sanjeev","Keerthi",'Rob',"Jagga"]

var str=secretName(arr)
console.log(str);
  