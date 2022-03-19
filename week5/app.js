const timeContainer = $('#time-container');
const clock = $('#clock');

// when we first load the page


function createRow(time){
    const timestamp = time + ":00";

    const row = $("<div>").attr("class", "row border");

    const timeCol = $("<div>").attr("class", "col-2").text(timestamp);

    row.append(timeCol);

    const inputCol = $("<div>").attr("class", "col-8");

    const input = $("<input>").attr("type", "text").attr("class", "input-note");
    // if the time has an existing note,
    // add to the input
    // load all the existing data in the rows
    const existingNote = getNote(time);
    if (existingNote) {
        input.val(existingNote);
    }

    inputCol.append(input);

    row.append(inputCol);

    const buttonCol = $("<div>").attr("class", "col-2");

    const button = $("<button>").attr("class", "btn btn-primary save-note-btn").text("Save");

    buttonCol.append(button);

    row.append(buttonCol);

    return row;
}


// we want to see a list of time rows
// from 9 - 5
for (let time = 9; time < 18; time++) {
    
    const row = createRow(time);
    timeContainer.append(row);      

}

// if timeslot has passed, show grey color
// current time -- red

// future is green



// show the clock
// we want to update the clock for every passing sec
setInterval(function(){
    var time = moment().format("YYYY-MM-DD HH:mm:ss");
    $("#clock").text(time);
}, 1000);




function getNote(time) {

    const timestamp = time + ':00';

    return localStorage.getItem(timestamp)
    
}


function saveNote(note, time) {

    localStorage.setItem(time, note);

    
}


// what would happen when type in something in the box?
$('.input-note').on('change', document, function(event){
    
    const inputEl = $(event.target);

    const timestamp = inputEl.parent().prev().text();

    const userInput = inputEl.val();

    // if click on the save button?
    // save the note entered in the box to LS
    saveNote(userInput, timestamp);
    // if user didnt type in anything, leave it as it is
});

$('.save-note-btn').on("click", document, function(event){
    const inputEl = $(event.target).parent().prev().children()[0]
    
    const userInput = $(inputEl).val();

    const timeEl = $(event.target).parent().prev().prev();
    
    const timestamp = timeEl.text();
    
    saveNote(userInput, timestamp)


});









