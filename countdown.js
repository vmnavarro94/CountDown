var targetDate = new Date("Mar 31, 2019 00:00:00").getTime();

var interval = setInterval(countDown, 1000);

function countDown()
{
	var currentDate = new Date().getTime();
	var timeToTarget = targetDate - currentDate;
	
	if(timeToTarget <= 0)
	{
		clearInterval(interval);
		setTime(0, 0, 0, 0);
	}
	else
	{
		var leftDays = Math.floor(timeToTarget / (1000 * 60 * 60 * 24));
    	var leftHours = Math.floor((timeToTarget % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    	var leftMinutes = Math.floor((timeToTarget % (1000 * 60 * 60)) / (1000 * 60));
    	var leftSeconds = Math.floor((timeToTarget % (1000 * 60)) / 1000);

    	setTime(leftDays, leftHours, leftMinutes, leftSeconds);	
	}
}

function setTime(days, hours, minutes, seconds)
{
	document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}

