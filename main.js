var timer = document.getElementById("timer");

function paddingLeft(str, lenght) {
	if (str.length >= lenght) return str;
	else return paddingLeft("0" + str, lenght);
}

function paddingRight(str, lenght) {
	if (str.length >= lenght) return str;
	else return paddingRight(str + "0", lenght);
}

var time_function = function () {
	var time = new Date();
	var text =
		time.getMonth() +
		1 +
		"-" +
		time.getDate() +
		"-" +
		time.getFullYear() +
		" " +
		paddingLeft(String(time.getHours()), 2) +
		":" +
		paddingLeft(String(time.getMinutes()), 2) +
		":" +
		paddingLeft(String(time.getSeconds()), 2);

	timer.innerHTML = text;
}

time_function()

var timerID = setInterval(time_function, 500);
