function Eve(d) {

    var day=d.getDate();
    if (day===24) {
        return true;
    }
    else{
        return false;
    }

}

var dd=new Date(2018,11,20);
var data=Eve(dd);
console.log(data);

