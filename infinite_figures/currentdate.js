// Current date

//Pad given value to the left with "0"
function AddZero(num) {
		return (num >= 0 && num < 10) ? "0" + num : num + "";
}

window.onload = function() {
		var now = new Date();
		var strDateTime = [[
				[now.getFullYear()].join(" "),
				AddZero(now.getMonth() + 1),
				AddZero(now.getDate())].join("."),

				[AddZero(now.getHours()),
				AddZero(now.getMinutes())].join(":"),
				now.getHours() >= 12 ? "PM" : "AM"].join(" ");

		document.getElementById("Console").innerHTML = strDateTime;


		var strDateTime1 = [[
			[now.getFullYear()].join(" "),
			AddZero(now.getMonth() + 1),
			AddZero(now.getDate())].join("."),

				[AddZero(now.getHours()),
				AddZero(now.getMinutes())].join(":"),
				now.getHours() >= 12 ? "" : ""].join(" ");

		document.getElementById("Console1").innerHTML = strDateTime1;
		// document.getElementById("Console").innerHTML = "Now: " + strDateTime;
};
