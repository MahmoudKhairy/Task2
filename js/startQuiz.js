// create questions
var questions = [
    new Question("What was the name of Harry Potter`s father?", ["Harry", "Hotter","Potter", "Parry"], "Potter"),
    new Question("if: 9e + 4 = −5e + 14 + 13e, how many magic tricks was Harry Potter knew?", ["0", "zero", "-11", "idk bro"], "idk bro"),
    new Question("If you watched the full series tell me how long this series is?", ["1", "4586","0", "8"], "8"),
    new Question("Which clan was Harry belongs to?", ["Hufflepuff", "Gryffindor", "Ravenclaw", "Slytherin"], "Gryffindor"),
    new Question("What was the name of the bad guy in Harry Potter series?", ["Ehab", "Moby Dick", "Colombus", "Voldemort"], "Voldemort"),
    new Question("What was the first gift that harry recieved?", ["Iphone X", "Mate 20", "Broomstick", "Knife"], "Broomstick"),
    new Question("When Voldemort killed Harry`s parent, Harry was...", ["sleeping", "in bathroom", "eating", "outside"], "sleeping"),
    new Question("What was the number of seven deathly hallow of Voldemort?", ["4", "7", "1", "-20"], "7")
];

// create quiz
var quiz = new Quiz(questions);

var click = document.getElementById('click');
click.volume = 1;
// click.play();
// click.loop = true;

function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
}

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        click.play();
        quiz.guess(guess);
        populate();
    };
}


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    var element2 = document.getElementById("quest-num");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
    element2.innerHTML = "Question " + currentQuestionNumber;
}

function showScores() {
    var gameOverHTML = "<h1 class='result'>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your Final Score: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
}


// display quiz
populate();


//Animate Smooth Scroll
$('#view-work').on('click', function () {
    const images = $('#quiz').position().top;
    $('html, body').animate(
        {
            scrollTop: images
        },
        1300
    );
});