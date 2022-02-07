const userBet = document.querySelector('.btn');

userBet.addEventListener('click', betPlaced); // On button click

function betPlaced() {
    var betSize = document.getElementById("betAmt").value;
    alertUser(flipCoin())
}

function flipCoin() {
    return flipResult = Math.floor(Math.random() * 2);
}

function alertUser(flipResult) {
    if (flipResult == 0) {
        alert("You Lose");
    }
    if (flipResult == 1) {
        alert("You Win")
    }
}