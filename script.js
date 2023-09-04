var date=document.getElementById("date");
var datewrite=document.getElementById("datewrite");

var year=document.getElementById("year");
var month=document.getElementById("month");
var day=document.getElementById("day");
var hour=document.getElementById("hour");
var second=document.getElementById("second");
var millis=document.getElementById("millis");
date.addEventListener('change',function(){
    var currentdate= new Date();
    var datepicker=new Date(this.value);
    var options={year:'numeric',month:'long',day:'numeric'};
    var datewrite1=datepicker.toLocaleDateString('en-US',options);
    datewrite.innerHTML='DOB :'+ datewrite1;

    var datemillis=Date.parse(datewrite1);
    var milliscurrent=Date.now();
    var millispick =milliscurrent - datemillis;
    var secondpick=Math.round(millispick / 1000);
    var hourpick=Math.round(secondpick / 3600 );
    var daypick=Math.round(hourpick / 24);
    var monthpick=Math.round(daypick / 30);
    var yearpick=Math.floor(monthpick / 12);

    year.innerHTML=yearpick;
    month.innerHTML=monthpick;
    day.innerHTML=daypick;
    hour.innerHTML=hourpick;
    second.innerHTML=secondpick;
    millis.innerHTML=millispick;

    document.querySelector('.cards').classList.remove('none');
});