// Create a function that takes three parameters and returns an array with the first parameter x, the second parameter y, and every number in between the first and second parameter in ascending order. Then filter through the array and return the array with numbers that are only divisible by the third parameter n.

// Examples
// arrayOperation(1, 10, 3) ➞ [3, 6, 9]

// arrayOperation(7, 9, 2) ➞ [8]

// arrayOperation(15, 20, 7) ➞ []




    function arrayOperation(a,b,c) 
    {
        var arr=[];
        var i=0;
        while(a<=b)
        {
            if (a%c===0)
            {
                arr[i]=a;
                i++;       
            }
            a++;
        }
        return arr;
    }
var a=1;
var b=10;
var c=3;
var arr=arrayOperation(a,b,c);
console.log(arr);
