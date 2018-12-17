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


$(".yosemiteSam_winning").hide()
$(".winningSpeechBubble").hide()
$(".winningSpeechText").hide()

$("#losingBody").hide()
$("#losingTorso").hide()
$("#losingRightArm").hide()
$("#losingLeftArm").hide()
$("#losingRightLeg").hide()
$("#losingLeftLeg").hide()
$(".losingSpeechBubble").hide()
$(".losingSpeechText").hide()

let wrongAmount = 0
let wrongLettersArray = ["#alphabetLetterA", "#alphabetLetterB", "#alphabetLetterC", "#alphabetLetterD", "#alphabetLetterE", "#alphabetLetterF", "#alphabetLetterG", "#alphabetLetterH", "#alphabetLetterJ", "#alphabetLetterK", "#alphabetLetterM", "#alphabetLetterN", "#alphabetLetterQ", "#alphabetLetterR", "#alphabetLetterU", "#alphabetLetterV", "#alphabetLetterW", "#alphabetLetterX", "#alphabetLetterY", "#alphabetLetterZ"]
let bodyPartsArray = ["#losingTorso", "#losingRightArm", "#losingLeftArm", "#losingRightLeg", "#losingLeftLeg"]
let correctLettersArray = ["#correctLetterP", "#correctLetterI", "#correctLetterS", "#correctLetterT", "#correctLetterO", "#correctLetterL"]
let finalLosingScreen = ["#losingBody", "#losingSpeechBubble", "#losingSpeechText"]

function countWrongGuesses() {
    let wrongLettersSelectors = wrongLettersArray.join(', ')
    $(wrongLettersSelectors).on('click', function () {
        let bodyPart = bodyPartsArray.pop()
        $(bodyPart).fadeIn()
        if (wrongAmount === 6) {
            alert("you lose")
            location.reload()
        }
        wrongAmount++
        $('#wrongCounter').text(wrongAmount)
    })
}

function hideBodyParts() {
    let bodyPartsSelector = bodyPartsArray.join(', ')
    $(bodyPartsSelector).hide()
}

$(document).ready(function () {
    hideBodyParts()
    countWrongGuesses()
})

//if a wrong letter is clicked show one of the body parts at random
//remove from list so it cannot repeat
//add 1 to the wrong amount