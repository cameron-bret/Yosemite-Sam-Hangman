$("#correctLetterP").hide()

$("#alphabetLetterP").on('click', function () {
    $("#correctLetterP").fadeIn()
})

$("#alphabetLetterP").on('click', function () {
    $("#alphabetLetterP").hide()
})

$("#correctLetterI").hide()

$("#alphabetLetterI").on('click', function () {
    $("#correctLetterI").fadeIn()
})

$("#alphabetLetterI").on('click', function () {
    $("#alphabetLetterI").hide()
})

$("#correctLetterS").hide()

$("#alphabetLetterS").on('click', function () {
    $("#correctLetterS").fadeIn()
})

$("#alphabetLetterS").on('click', function () {
    $("#alphabetLetterS").hide()
})

$("#correctLetterT").hide()

$("#alphabetLetterT").on('click', function () {
    $("#correctLetterT").fadeIn()
})

$("#alphabetLetterT").on('click', function () {
    $("#alphabetLetterT").hide()
})

$("#correctLetterO").hide()

$("#alphabetLetterO").on('click', function () {
    $("#correctLetterO").fadeIn()
})

$("#alphabetLetterO").on('click', function () {
    $("#alphabetLetterO").hide()
})

$("#correctLetterL").hide()

$("#alphabetLetterL").on('click', function () {
    $("#correctLetterL").fadeIn()
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

// $(".yosemiteSam_winning").hide()
// $(".winningSpeechBubble").hide()
// $(".winningSpeechText").hide()

let wrongAmount = 0
let correctAmount = 0
let wrongLettersArray = ["#alphabetLetterA", "#alphabetLetterB", "#alphabetLetterC", "#alphabetLetterD", "#alphabetLetterE", "#alphabetLetterF", "#alphabetLetterG", "#alphabetLetterH", "#alphabetLetterJ", "#alphabetLetterK", "#alphabetLetterM", "#alphabetLetterN", "#alphabetLetterQ", "#alphabetLetterR", "#alphabetLetterU", "#alphabetLetterV", "#alphabetLetterW", "#alphabetLetterX", "#alphabetLetterY", "#alphabetLetterZ"]
let bodyPartsArray = ["#losingBodyAlternate2", "#losingTorso", "#losingRightArm", "#losingLeftArm", "#losingRightLeg", "#losingLeftLeg"]
let correctLettersArray = ["#alphabetLetterP", "#alphabetLetterI", "#alphabetLetterS", "#alphabetLetterT", "#alphabetLetterO", "#alphabetLetterL"]
let winScreenArray = [".yosemiteSam_winning", ".winningSpeechBubble", ".winningSpeechText"]

function countWrongGuesses() {
    let wrongLettersSelectors = wrongLettersArray.join(', ')
    // let LosingScreen = finalLosingArray.join(', ')
    $(wrongLettersSelectors).on('click', function () {
        let bodyPart = bodyPartsArray.pop()
        $(bodyPart).fadeIn()
        if (wrongAmount === 6) {
            swal("So sad, too bad, you lost!")
        }
        wrongAmount++
        $('#wrongCounter').text(wrongAmount)
    })
}

function countCorrectGuesses() {
    let correctLettersSelectors = correctLettersArray.join(', ')
    $(correctLettersSelectors).on('click', function () {
        if (correctAmount === 5) {
            $(".yosemiteSam_winning").fadeIn()
            $(".winningSpeechText").fadeIn()
            $(".winningSpeechBubble").fadeIn()
            swal("WOW! Good job! You won!")
        }
        correctAmount++
        $('#correctCounter').text(correctAmount)
    })
}

function hideWinScreen() {
    let winScreenSelector = winScreenArray.join(', ')
    $(winScreenSelector).hide()
}

function hideBodyParts() {
    let bodyPartsSelector = bodyPartsArray.join(', ')
    $(bodyPartsSelector).hide()
}

$(document).ready(function () {
    countCorrectGuesses()
    countWrongGuesses()
    hideWinScreen()
    hideBodyParts()
})