// * You'll create a trivia form with multiple choice or true/false options (your choice).
//booleans or if else

// * The player will have a limited amount of time to finish the quiz. 
//timer setTimeout(); setInterval()function var (){}

//   * The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.

// * Don't let the player pick more than one answer per question.

// * Don't forget to include a countdown timer.

//creating a string of Trivia Questions
// var question = [
// q1="George Washington was a Colonel as well as a President",
// q2= "In the French-Indian War, the French and the Indian were both enemies", 
// q3= "In the Salem Witch trials, innocence wasn't such a good role if you were being tested as a witch.", 
// q5= "Do you like this quiz",
// ]}
var question1 = {
	question:"George Washington was a Colonel as well as a President",
	correct :"true"
}
var question2 = {
	question:"In the French-Indian War, the French and the Indian were both enemies",
	correct :"false"
}
var question3 = {
	question:"In the Salem Witch trials, innocence wasn't such a good role if you were being tested as a witch",
	correct :"true"
}
var question4 = {
	question:"You like this quiz",
	correct :"true"
}

var questionArray = [question1,question2,question3,question4];
 
var questionCounter = 0;

var tempObject = questionArray[questionCounter];

//countdown being set
var count =15;
var counter = window.setInterval(decrement,1000);
var wins = 0;
var losses =0;
var defaultTime = 15;
 
//This function is writting the question and appending aswell from the question object created
	 $ (function() {

		$(".panel-body").html(tempObject.question);
		

		$("button").on('click', function(){
			var click = $(this).attr('id');

			// console.log("buttonpressed" + click);
		if (click === 'true'){
			clickedAnswer(click);
			console.log("you pressed true");
		}
		else if (click === 'false'){
			clickedAnswer(click);
			console.log('you pressed false');
		}

		else if (click === 'stop'){
			stop();
			// console.log ("you p stop");
		} 

		else if (click === 'resume'){
			decrement();
			// console.log("you pressed resume");
		}
		else if (click ==="newgame"){
			
			newgame();
		}

			});			
	});

	 function clickedAnswer(arg){
	 	//Anytime i click true button
	 	if (arg === 'true'){
	 		// this only happens if true is the correct answer
 			if(tempObject.correct ===arg){
				wins++;
 					 			
	 		}
	 		//This is what happpens if true is the wrong answer
	 		else {
	 			losses++
	 			
	 		}
	 	}//end arg true

	 //if my button clicked is false
	 	else{
	 		//This happens if false is the correct answer
	 		if (tempObject.correct===arg){
	 			wins++;
	 			
	 		}
	 		//This happens when false is incorrect
	 		else{
	 			losses++;

	 		}
	 		
	 	}
	 			newQuestion();
	 			updateHTML();

	 }
//this section updates HTML
	 function updateHTML(){
	 	$(".panel-body").text(tempObject.question);

	 	$("#wins").text(wins);
	 	$("#losses").text(losses);
	 }
// this is updating to new questions by the Array. questionCounter==0 is saying to start the questions over. NO errros
	 function newQuestion(){		
		if(questionCounter === questionArray.length -1){
			questionCounter=0;
			console.log("out of questions");
		}
		else{
			questionCounter++
		}

		tempObject = questionArray[questionCounter];
	 }
//================Start / Stop stuff===================================
//  When the stop button gets clicked, run the stop function.
    $("document").ready(function(){
    // $("#stop").click(function(){
    // 	stop();
    // });
    // $("#resume").click(function(){
    // 	decrement();
    // });
});
    //  When the resume button gets clicked, execute the run function.
    // $("#resume").on("click", run);


//============Timer stuff===========================================
function decrement () {

	count --;
	$("#timer").html("<h2>" + count + "</h2>");

	if (count <1){
		// clearInterval(counter);
		losses++;
		newQuestion();
		count=defaultTime;
		updateHTML();
		//alert ("times up");
	}
}
function stop () {
	clearInterval(counter);
}

function newgame(){
	wins=0;
	losses=0;
	questionCounter=0;
	tempObject = questionArray[questionCounter];
	count=defaultTime;
	updateHTML();

}
// $(document).ready(function(){
// $(".body").append($("<button id class='btn btn-danger btn-lg' id ='stop'>"));
// });