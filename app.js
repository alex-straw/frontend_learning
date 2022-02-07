const userBet = document.querySelector('.btn');

userBet.addEventListener('click', betPlaced); // On button click

function betPlaced() {
    var betSize = document.getElementById("betAmt").value;
    alert(betSize)
}