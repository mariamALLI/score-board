let homeCount = document.getElementById("home_count");
let guestCount = document.getElementById("guest_count");
let count = 0;
let num = 0;


function plusOne() {
    count += 1
    homeCount.textContent = count
}

function plusTwo() {
    count += 2
    homeCount.textContent = count
}

function plusThree() {
    count += 3
    homeCount.textContent = count
}

function plus1() {
    num += 1
    guestCount.textContent = num
}

function plus2() {
    num += 2
    guestCount.textContent = num
}

function plus3() {
    num += 3
    guestCount.textContent = num
}

function reset() {
    count = 0
    num = 0
    homeCount.textContent = count
    guestCount.textContent = num
}