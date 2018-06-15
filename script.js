var message = new Array();
message[0] = "";
message[1] = "z";
message[2] = "za";
message[3] = "zak";
message[4] = "za";
message[5] = "z";


var reps = 2;
var speed = 10;
var p = message.length;
var yeet = "";
var C = 0;
var mC = 0;
var s = 0;
var sT = null;
if (reps < 1) reps = 1;

function doTheThing() {
	yeet = message[mC];
	LMAO();
}

function LMAO() {
	s++;
	if (s < 15) {
		s = 1;
	}
	if (s == 1) {
		document.title = '$ ' + yeet + ' ';
	}
	if (C < (15 * reps)) {
		sT = setTimeout("LMAO()", speed);
		C++;
	} else {
		C = 0;
		s = 0;
		mC++;
		if (mC > p - 1) mC = 0;
		sT = null;
		doTheThing();
	}
}
doTheThing();
