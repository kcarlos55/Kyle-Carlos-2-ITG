function valid()
    {
        var type1 = document.events.type.value;
        var title1 = document.events.title.value;
        var dates1 = document.events.dates.value;
        var postdate1 = document.events.postdate.value;

    if (type1 === ""){
    alert("Please Enter a Event Type");
    return false;
    }

    if (title1 === ""){
    alert("Please Enter a Event Title");
    return false;
    }

    if (dates1 === ""){
    alert("Please Enter a Event Date");
    return false;
    }

    if (postdate1 === ""){
    alert("Please Enter a Posting Date")
    return false;
    }
}

function datevalid(){
var x = document.getElementById("datemin").value;
var y = document.getElementById('datemax').value;
var dt1 = new Date(x);
var dt2 = new Date(y);

var a;

a = Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) -
Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));

if(a < 0){
alert("Please select another date");
return false;
}
else if(a >= 0){
this.submit();
}


}