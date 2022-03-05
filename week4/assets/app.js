const buttonStart = document.getElementById('button-start');
const sectionQuestion = document.getElementById("section-questions");
const sectionLanding = document.getElementById("section-landing");
const sectionTimer = document.getElementById("section-timer");
const sectionInitials = document.getElementById("section-initials");
const spanTime = document.getElementById("span-time");
const questionTitle = document.getElementById("question-title");
const spanFinalHighscore = document.getElementById("span-final-highscore");
const questionChoices = document.getElementById("question-choices");


let timerId = null;
let timeRemaining = 2;

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

    showQuestion(1);
})





// timer
function startTimer(){
    // show section - timer
    sectionTimer.classList.remove('hide');
    // update the span-time for every passing second
    timerId = setInterval(function() {
        timeRemaining = timeRemaining - 1
        spanTime.textContent = timeRemaining

        // if time remaining < 0

        if(timeRemaining  <= 0){
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

    for (let index = 0; index < question.choices.length; index++) {
        const choice = question.choices[index];

        const li = document.createElement('li');

        const button = document.createElement('button');
        button.textContent = choice.title;

        li.appendChild(button);

        questionChoices.appendChild(li);
        
    }
}






// when click on the choice
// should move on to the next question

// what if user clicked on correct choice?
// give feedback to say its correct!

// what if user clicked on wrong choice?
// give feedback to say its wrong!
// reduce the time remaining by 10 sec

// if the user click on the final choice of the final qs
// end game

// what if timer expires?
// end game


// end game
function endGame(){

    // 1. timer should stop
    clearInterval(timerId);

    // 2. show the end game screen
    sectionInitials.classList.remove('hide');
    // hide qs section
    sectionQuestion.classList.add('hide');

    // 3. show the high score in the end game screen
    // hs -- num of qs correct/ time remaining[picked by sam]
    spanFinalHighscore.textContent = timeRemaining;
}



// End game screen
// 1. user can type in the input box
// do nothing

// 2. user can hit enter in the input box
// submit 

// 3. user click on the submit
// submit

// submiting -- add the user initial and highscore to the local storage

// after submit, redirect the user to the hs page





// hs page
// 1. click on the play again btn
// redirect the user to the landing page 

// 2. click on the clear
// clear the localstorage
// clear the dom

















