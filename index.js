let increase = 0
let Increase1 = 0
let homeScore = document.getElementById("home-score" )
let guestScore = document.getElementById("guest-score")

// HOME SCORE BUTTONS 
function increaseHomeScoreOne() {
    increase += 1
    homeScore.textContent = increase
}
function increaseHomeScoreTwo() {
    increase += 2
    homeScore.textContent = increase
}

function increaseHomeScoreThree(){
    increase += 3
    homeScore.textContent = increase
}

// GUEST SCORE BUTTONS 
function increaseGuestScoreOne(){
    Increase1 += 1
    guestScore.textContent = Increase1
}
function increaseGuestScoreTwo(){
    Increase1 += 2
    guestScore.textContent = Increase1
}
function increaseGuestScoreThree(){
    Increase1 += 3
    guestScore.textContent = Increase1
}