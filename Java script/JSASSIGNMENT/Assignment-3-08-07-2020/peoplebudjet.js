// Create the function that takes an array with objects and returns the sum of people's budgets.

// Examples
// getBudgets([
//   { name: "John", age: 21, budget: 23000 },
//   { name: "Steve",  age: 32, budget: 40000 },
//   { name: "Martin",  age: 16, budget: 2700 }
// ]) ➞ 65700

// getBudgets([
//   { name: "John",  age: 21, budget: 29000 },
//   { name: "Steve",  age: 32, budget: 32000 },
//   { name: "Martin",  age: 16, budget: 1600 }
// ]) ➞ 62600


function peopleBudjet(arr)
{
    var sum=0;
    for (var index = 0; index < arr.length; index++) 
    {
        sum=sum+arr[index].budget;
    }    
    return sum;
}
var arr=[
      { name: "John", age: 21, budget: 23000 },
      { name: "Steve",  age: 32, budget: 40000 },
      { name: "Martin",  age: 16, budget: 2700 }
];

var res=peopleBudjet(arr);
console.log(res);
    


