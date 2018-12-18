let wrongAmount = 0
let correctAmount = 0
let wrongLettersButtonsArray = ["#alphabetLetterA", "#alphabetLetterB", "#alphabetLetterC", "#alphabetLetterD", "#alphabetLetterE", "#alphabetLetterF", "#alphabetLetterG", "#alphabetLetterH", "#alphabetLetterJ", "#alphabetLetterK", "#alphabetLetterM", "#alphabetLetterN", "#alphabetLetterQ", "#alphabetLetterR", "#alphabetLetterU", "#alphabetLetterV", "#alphabetLetterW", "#alphabetLetterX", "#alphabetLetterY", "#alphabetLetterZ"]
let correctLettersButtonsArray = ["#alphabetLetterP", "#alphabetLetterI", "#alphabetLetterS", "#alphabetLetterT", "#alphabetLetterO", "#alphabetLetterL"]
let correctLettersAnswer = ["#correctLetterP", "#correctLetterI", "#correctLetterS", "#correctLetterT", "#correctLetterO", "#correctLetterL"]
let winScreenArray = [".yosemiteSam_winning", ".winningSpeechBubble", ".winningSpeechText"]
let loseScreenArray = ["#losingBodyAlternate2", "#losingTorso", "#losingRightArm", "#losingLeftArm", "#losingRightLeg", "#losingLeftLeg"]

//track the number of incorrect guesses and populate a body part for each wrong guess, then display the losing screen
function countWrongGuesses() {
    //selects all items in the wrongLettersButtonArray and returns them as a string separated by a comma and a space
    let wrongLettersSelectors = wrongLettersButtonsArray.join(', ')
    //when one of the wrong letter is clicked this function will 'fade in' the last item of the loseScreenArray and remove it from the array
    $(wrongLettersSelectors).on('click', function () {
        let bodyPart = loseScreenArray.pop()
        $(bodyPart).fadeIn()
        //tracking the number of wrong guesses and displaying the losing screen upon reaching 6 wrong guesses
        if (wrongAmount === 6) {
            swal("So sad, too bad, you lost!")
        }
        //incrementally increases the number of wrong guesses by 1 and puts that number into the wrongAmount variable
        wrongAmount++
        $('#wrongCounter').text(wrongAmount)
    })
}

//track the number of correct guesses and display the winning screen
function countCorrectGuesses() {
    let correctLettersSelectors = correctLettersButtonsArray.join(', ')
    $(correctLettersSelectors).on('click', function () {
        if (correctAmount === 5) {
            $(".yosemiteSam_winning").fadeIn()
            $(".winningSpeechText").fadeIn()
            $(".winningSpeechBubble").fadeIn()
            // swal("WOW! Good job! You won!")
        }
        correctAmount++
        $('#correctCounter').text(correctAmount)
    })
}

//hide initial images so that they can 'appear' when called upon
function hiddenItems() {
    let correctAnswerSelector = correctLettersAnswer.join(', ')
    let winScreenSelector = winScreenArray.join(', ')
    let bodyPartsSelector = loseScreenArray.join(', ')
    $(correctAnswerSelector).hide()
    $(winScreenSelector).hide()
    $(bodyPartsSelector).hide()
}

//make each letter of the alphabet that is a correct answer populate onto the answer bar
function correctAnswersAppear() {
    $("#alphabetLetterP").on('click', function () {
        $("#correctLetterP").fadeIn()
    })
    $("#alphabetLetterI").on('click', function () {
        $("#correctLetterI").fadeIn()
    })
    $("#alphabetLetterS").on('click', function () {
        $("#correctLetterS").fadeIn()
    })
    $("#alphabetLetterT").on('click', function () {
        $("#correctLetterT").fadeIn()
    })
    $("#alphabetLetterO").on('click', function () {
        $("#correctLetterO").fadeIn()
    })
    $("#alphabetLetterL").on('click', function () {
        $("#correctLetterL").fadeIn()
    })
}

//make each letter of the alphabet disappear after it has been clicked so that it cannot be selected again
function wrongLettersDisappear() {
    $("#alphabetLetterP").on('click', function () {
        $("#alphabetLetterP").hide()
    })
    $("#alphabetLetterI").on('click', function () {
        $("#alphabetLetterI").hide()
    })
    $("#alphabetLetterS").on('click', function () {
        $("#alphabetLetterS").hide()
    })
    $("#alphabetLetterT").on('click', function () {
        $("#alphabetLetterT").hide()
    })
    $("#alphabetLetterO").on('click', function () {
        $("#alphabetLetterO").hide()
    })
    $("#alphabetLetterL").on('click', function () {
        $("#alphabetLetterL").hide()
    })
    $("#alphabetLetterA").on('click', function () {
        $("#alphabetLetterA").hide()
    })
    $("#alphabetLetterB").on('click', function () {
        $("#alphabetLetterB").hide()
    })
    $("#alphabetLetterC").on('click', function () {
        $("#alphabetLetterC").hide()
    })
    $("#alphabetLetterD").on('click', function () {
        $("#alphabetLetterD").hide()
    })
    $("#alphabetLetterE").on('click', function () {
        $("#alphabetLetterE").hide()
    })
    $("#alphabetLetterF").on('click', function () {
        $("#alphabetLetterF").hide()
    })
    $("#alphabetLetterG").on('click', function () {
        $("#alphabetLetterG").hide()
    })
    $("#alphabetLetterH").on('click', function () {
        $("#alphabetLetterH").hide()
    })
    $("#alphabetLetterJ").on('click', function () {
        $("#alphabetLetterJ").hide()
    })
    $("#alphabetLetterK").on('click', function () {
        $("#alphabetLetterK").hide()
    })
    $("#alphabetLetterM").on('click', function () {
        $("#alphabetLetterM").hide()
    })
    $("#alphabetLetterN").on('click', function () {
        $("#alphabetLetterN").hide()
    })
    $("#alphabetLetterQ").on('click', function () {
        $("#alphabetLetterQ").hide()
    })
    $("#alphabetLetterR").on('click', function () {
        $("#alphabetLetterR").hide()
    })
    $("#alphabetLetterU").on('click', function () {
        $("#alphabetLetterU").hide()
    })
    $("#alphabetLetterV").on('click', function () {
        $("#alphabetLetterV").hide()
    })
    $("#alphabetLetterW").on('click', function () {
        $("#alphabetLetterW").hide()
    })
    $("#alphabetLetterX").on('click', function () {
        $("#alphabetLetterX").hide()
    })
    $("#alphabetLetterY").on('click', function () {
        $("#alphabetLetterY").hide()
    })
    $("#alphabetLetterZ").on('click', function () {
        $("#alphabetLetterZ").hide()
    })
}

//run all functions listed immediately upon page load using ready method
$(document).ready(function () {
    countCorrectGuesses()
    countWrongGuesses()
    hiddenItems()
    correctAnswersAppear()
    wrongLettersDisappear()
})