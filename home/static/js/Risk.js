



function show_1(){
	document.getElementById("question_1").style.display='block';
}

function hide_1(){
	document.getElementById("question_1").style.display='none';
}

function show_2(){
	document.getElementById("question_2").style.display='block';
}

function hide_2(){
	document.getElementById("question_2").style.display='none';
}

function show_3(){
	document.getElementById("question_3").style.display='block';
}

function hide_3(){
	document.getElementById("question_3").style.display='none';
}

function show_4(){
	document.getElementById("question_4").style.display='block';
}

function hide_4(){
	document.getElementById("question_4").style.display='none';
}

function tabulateAnswers(){

/*	var answer =[
	["q1a", 0, 0, 0],
	["q1b", 0, 0, 0],
	["q2a", 0, 0, 0],
	["q2b", 0, 0, 0],
	["q3a", 0, 0, 0],
	["q3b", 0, 0, 0],
	["q3c", 0, 0, 0],
	["q4a", 0, 0, 0],
	["q4b", 0, 0, 0],
	["q4c", 0, 0, 0],
	["q4d", 0, 0, 0],
	];
*/

	var cyber_answer = [0, 0, 0]
	var gdpr_answer = [0, 0, 0]

	if 	(((document.getElementById("q1a_1").checked) || (document.getElementById("q1a_2").checked))
		&&
		(document.getElementById("q3c_no").checked)
		&&
		(document.getElementById("q1b_yes").checked)) {
		cyber_answer[0] = cyber_answer[0] + 1;
	}

	if 	(((document.getElementById("q1a_1").checked) || (document.getElementById("q1a_2").checked))
		&&
		(document.getElementById("q3c_yes").checked)
		&&
		(document.getElementById("q1b_yes").checked)) {
		cyber_answer[1] = cyber_answer[1] + 1;
	}

	if 	((document.getElementById("q2a_1").checked)
		&&
		(document.getElementById("q2b_yes").checked)) {
		cyber_answer[0] = cyber_answer[0] + 1;
	}

	if 	((document.getElementById("q2a_1").checked)
		&&
		(document.getElementById("q2b_no").checked)) {
		cyber_answer[1] = cyber_answer[1] + 1;
	}

	if ((document.getElementById("q3a_1").checked) || (document.getElementById("q3a_2").checked)) {
		cyber_answer[0] = cyber_answer[0] + 1;
	}

	if (document.getElementById("q3a_3").checked) {
		cyber_answer[1] = cyber_answer[1] + 1;
	}

	if (document.getElementById("q3b_1").checked) {
		cyber_answer[0] = cyber_answer[0] + 1;
	}

	if (document.getElementById("q3b_2").checked) {
		cyber_answer[1] = cyber_answer[1] + 1;
	}

	if (document.getElementById("q3c_yes").checked) {
		cyber_answer[0] = cyber_answer[0] + 1;
	}

	if ((document.getElementById("q4_yes").checked) && (document.getElementById("q4a_yes").checked)) {
		gdpr_answer[0] = gdpr_answer[0] + 1;
	}

	if ((document.getElementById("q4_yes").checked) && (document.getElementById("q4b_1").checked)) {
		gdpr_answer[0] = gdpr_answer[0] + 1;
	}

	if ((document.getElementById("q4_yes").checked) && (document.getElementById("q4c_1").checked)) {
		gdpr_answer[0] = gdpr_answer[0] + 1;
	}

	if ((document.getElementById("q4_yes").checked) && (document.getElementById("q4c_2").checked)) {
		gdpr_answer[1] = gdpr_answer[1] + 1;
	}

	if ((document.getElementById("q4_yes").checked) && (document.getElementById("q4c_3").checked)) {
		gdpr_answer[2] = gdpr_answer[2] + 1;
	}

	if ((document.getElementById("q4_yes").checked) && (document.getElementById("q4d_1").checked)) {
		gdpr_answer[0] = gdpr_answer[0] + 1;
	}

	if ((document.getElementById("q4_yes").checked) && (document.getElementById("q4d_2").checked)) {
		gdpr_answer[1] = gdpr_answer[1] + 1;
	}

	if ((document.getElementById("q4_yes").checked) && (document.getElementById("q4d_3").checked)) {
		gdpr_answer[2] = gdpr_answer[2] + 1;
	}

	var overall;
	var cyber;
	var gdpr;

	if (cyber_answer[0] + gdpr_answer[0] >= 3) {
		overall = "High -Tier 1";
	} else if (cyber_answer[0] + gdpr_answer[0]== 2) {
		overall = "High - Tier 2";
	} else if (cyber_answer[0] + gdpr_answer[0] == 1) {
		overall = "High - Tier 3";
	} else if ((cyber_answer[0] + gdpr_answer[0] == 0) && (cyber_answer[1] + gdpr_answer[1] >= 1)) {
		overall = "Medium";
	} else {
		overall = "Low";
	}

	if (cyber_answer[0] >= 3) {
		cyber = "High -Tier 1";
	} else if (cyber_answer[0] == 2) {
		cyber = "High - Tier 2";
	} else if (cyber_answer[0] == 1) {
		cyber = "High - Tier 3";
	} else if ((cyber_answer[0] == 0) && (cyber_answer[1] >= 1)) {
		cyber = "Medium";
	} else {
		cyber = "Low";
	}

	if (gdpr_answer[0] >= 3) {
		gdpr = "High -Tier 1";
	} else if (gdpr_answer[0] == 2) {
		gdpr = "High - Tier 2";
	} else if (gdpr_answer[0] == 1) {
		gdpr = "High - Tier 3";
	} else if ((gdpr_answer[0] == 0) && (gdpr_answer[1] >= 1)) {
		gdpr = "Medium";
	} else {
		gdpr = "Low";
	}

	document.write("Number Cyber High: ", cyber_answer[0]);
	document.write("<br>");
	document.write("Number Cyber Medium: ", cyber_answer[1]);
	document.write("<br>");
	document.write("Number Cyber Low: ", cyber_answer[2]);
	document.write("<br><br>");
	document.write("Number GDPR High: ", gdpr_answer[0]);
	document.write("<br>");
	document.write("Number GDPR Medium: ", gdpr_answer[1]);
	document.write("<br>");
	document.write("Number GDPR Low: ", gdpr_answer[2]);
	document.write("<br>");
	document.write("<br><br>");
	document.write("Overall Risk Rating: ", overall);
	document.write("<br>")
	document.write("Cyber Risk Rating: ", cyber);
	document.write("<br>")
	document.write("GDPR Risk Rating: ", gdpr);
}

