const buttonStart = document.getElementById('button-start');

const sectionQuestion = document.getElementById("section-questions");
const sectionLanding = document.getElementById("section-landing");
const sectionTimer = document.getElementById("section-timer");
const sectionInitials = document.getElementById("section-initials");
const sectionHighscore = document.getElementById("section-highscore");

const spanTime = document.getElementById("span-time");
const questionTitle = document.getElementById("question-title");
const spanFinalHighscore = document.getElementById("span-final-highscore");
const questionChoices = document.getElementById("question-choices");
const questionFeedback = document.getElementById('question-feedback');
const formHighscore = document.getElementById('form-highscore');
const inputInitials = document.getElementById("input-initials");

const listHighscore = document.getElementById('list-highscore');

const buttonPlayAgain = document.getElementById('button-play-again');
const buttonClearHighscore = document.getElementById('button-clear-highscore');

let timerId = null;
let timeRemaining = 10;

let currentQuestionIndex = 0;

spanTime.textContent = timeRemaining;

// when user click in start btn

buttonStart.addEventListener('click', function(event){

    // show the qs section
    sectionQuestion.classList.remove('hide')

    
    // hide the landing page
    sectionLanding.classList.add('hide');

    // start timers
    startTimer();

    showQuestion(0);
})

function showFeedback(message, timeout = 1000){

    // remove the hide class on the qs feedback element for x sec
    questionFeedback.textContent = message;
    questionFeedback.classList.remove('hide')


    setTimeout(function(){
        questionFeedback.classList.add("hide");

    }, timeout)


}

// timer
function startTimer(){
    // show section - timer
    sectionTimer.classList.remove('hide');
    // update the span-time for every passing second
    timerId = setInterval(function() {
        timeRemaining = timeRemaining - 1;
        spanTime.textContent = timeRemaining;

        // if time remaining < 0
        // what if timer expires?
        // end game
        if (timeRemaining <= 0) {
            // endgame
            endGame();
        }
    }, 1000);
    // 
}




function showQuestion(index){
    const question = questions[index];


    questionTitle.textContent = question.title;

    // loop thri the choices

    // generate li for each choice

    questionChoices.textContent = "";

    for (let ii = 0; ii < question.choices.length; ii++) {
        const choice = question.choices[ii];

        const li = document.createElement("li");

        const button = document.createElement("button");
        button.textContent = choice.title;
        button.setAttribute('data-answer', choice.isAns);

        // when click on the choice
        // should move on to the next question
        button.addEventListener("click", function (event) {


            // what if user clicked on correct choice?
            const isCorrectChoice = event.target.getAttribute('data-answer') === 'true';
            console.log(isCorrectChoice);
            if(isCorrectChoice){
                // give feedback to say its correct!
                showFeedback('Correct!!');

            }else{
                // what if user clicked on wrong choice?
                // give feedback to say its wrong!
                // reduce the time remaining by 10 sec
                showFeedback('Wrong!!');
                timeRemaining = timeRemaining - 10;

            }

            // if the user click on the final choice of the final qs
            // end game
            if (index + 1 >= questions.length) {
                // reached the final qs
                return endGame();
            }
            showQuestion(index + 1);
        });

        li.appendChild(button);

        questionChoices.appendChild(li);
    }
}



// end game
function endGame(){

    // 1. timer should stop
    clearInterval(timerId);

    // 2. show the end game screen
    sectionInitials.classList.remove('hide');
    // hide qs section
    sectionQuestion.classList.add('hide');

    sectionTimer.classList.add('hide');

    // 3. show the high score in the end game screen
    // hs -- num of qs correct/ time remaining[picked by sam]
    spanFinalHighscore.textContent = timeRemaining;
}



// End game screen
// 1. user can type in the input box
// do nothing

formHighscore.addEventListener('submit', function(event){
    event.preventDefault();

    // 2. user can hit enter in the input box
    // submit 
    
    // 3. user click on the submit
    // submit

    // submiting -- add the user initial and highscore to the local storage
    const userInput = inputInitials.value;

    const highscore = {
        name: userInput,
        highscore: timeRemaining,
    }
    
    const existingHighscores = getHighscoresFromLocalStorage();
        // add in the new hs
        existingHighscores.push(highscore);

    // resave it to localstorage
    localStorage.setItem('highscores', JSON.stringify(existingHighscores));


    // after submit, redirect the user to the hs page
    showHighscorePage();


});


/**
 * 
 * @returns {Array}
 */
function getHighscoresFromLocalStorage(){
    return JSON.parse(
        localStorage.getItem("highscores") || "[]"
    );

}



function showHighscorePage(){
    // hide the endgame page
    sectionInitials.classList.add('hide');

    // show the high score section
    sectionHighscore.classList.remove('hide');
    renderHighscoreList();

}

function renderHighscoreList(){
    // hs page
    
    // get all existing hs from local storage
    const highscores = getHighscoresFromLocalStorage();


    highscores.sort(function (a, b) {
        if (b.highscore > a.highscore) {
            return 1;
        } else {
            return -1;
        }
    });

    listHighscore.textContent = "";

    // create a li on each item
    for (let index = 0; index < highscores.length; index++) {
        const highscore = highscores[index];

        // chuck it in the list

        const li = document.createElement('li');

        li.textContent = highscore.name + ' -- ' + highscore.highscore
        
        listHighscore.appendChild(li);
    }
    
    
    
}




// 1. click on the play again btn
buttonPlayAgain.addEventListener('click', function(event){
    // redirect the user to the landing page 
    window.location.reload();
})

// 2. click on the clear
buttonClearHighscore.addEventListener('click', function(event){

    // clear the localstorage
    localStorage.setItem('highscores', "[]");
    // clear the dom
    listHighscore.textContent = ""

})



