$(document).ready(function() {

	var totalScore = 0;
	var randomNumber;
	var redRandomNumber;
	var greenRandomNumber;
	var orangeRandomNumber;
	var blueRandomNumber;
	var wins = 0;
	var loss = 0;

	getRandomNumbers();
	
	$("#red").on("click", function() {
		processSelection("#red");
	});

	$("#green").on("click", function() {
		processSelection("#green");
	});

	$("#orange").on("click", function() {
		processSelection("#orange");
	});

	$("#blue").on("click", function() {
		processSelection("#blue");
	});

function processSelection(crystal) {
	totalScore = parseInt($(crystal).val()) + totalScore;
	
	if (totalScore == randomNumber) {
		totalScore = 0;
		getRandomNumbers();
		wins = wins + 1;
		$("#wins").html(wins);
	}

	if (totalScore > randomNumber) {
		totalScore = 0;
		getRandomNumbers();
		loss = loss + 1;
		$("#loss").html(loss);
	}

	$("#totalScoreBox").html(totalScore);
}

function getRandomNumbers()
{
	randomNumber = randomIntFromInterval(19,120);
	redRandomNumber = randomIntFromInterval(1,12);
	greenRandomNumber = randomIntFromInterval(1,12);
	orangeRandomNumber = randomIntFromInterval(1,12);
	blueRandomNumber = randomIntFromInterval(1,12);

	$("#randomNumber").html(randomNumber);
	$("#red").val(redRandomNumber);
	$("#green").val(greenRandomNumber);
	$("#orange").val(orangeRandomNumber);
	$("#blue").val(blueRandomNumber);

}

function randomIntFromInterval(min,max) {
	return Math.floor(Math.random()*(max-min+1)+min);
}

});