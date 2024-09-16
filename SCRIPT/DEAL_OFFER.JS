var Count_Down_Date = new Date("Aug 20, 2022 23:00:00").getTime();

var Count_Down_Function = setInterval(function()
{
    var Current_Date = new Date().getTime();
    var Time_Period = Count_Down_Date - Current_Date;

    var Hours = Math.floor(Time_Period % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    var Minutes = Math.floor((Time_Period % (1000 * 60 * 60)) / (1000 * 60));
    var Seconds = Math.floor((Time_Period % (1000 * 60)) / 1000);

    document.getElementById("deal-time-out").innerHTML = Hours + " " + ":" + " " + Minutes + " " + ":" + " " + Seconds + " " + "Left";

    if (Time_Period < 0)
    {
        document.getElementById("deal-time-out").innerHTML = "Offer Expired...!";
    }
}, 1000);