
function getDays(date2,date2) 
{
    var Difference_In_Time = date2.getTime() - date1.getTime();
    console.log(Difference_In_Time);
     
    var DiffDays = Difference_In_Time / (1000 * 3600 * 24); 
    return DiffDays;
}
 
var date1 = new Date("06/30/2020"); 
var date2 = new Date("07/30/2020"); 


var dd=getDays(date1,date2);
console.log(dd);
