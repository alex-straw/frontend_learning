const userBet = document.querySelector('.btn');

userBet.addEventListener('click', betPlaced); // On button click

function betPlaced() {
    var  _betSize = document.getElementById("betAmt").value;
    var _walletAddress = document.getElementById("walletAddress").value;

    alertUser(_walletAddress);
    
    if (validWalletAddress(_walletAddress)) {
        alertUser("valid ")
    }

    alert(flipCoin(), _betSize);

}

function validBet (_betSize) {
    if (typeof _betSize === 'number') {
        return true;
    }
    return false;
}

function validWalletAddress (_walletAddress) {
    var exampleAddress = "0xF1C37BC188643DF4Bf15Fd437096Eb654d30abc1"
    if (_walletAddress.substring(0, 2) == "0x") {
        if (_walletAddress.length() == exampleAddress.length()) {
            return true;
        }
    }
    return false;
}

function flipCoin() {
    return flipResult = Math.floor(Math.random() * 2);
}

function alertUser(flipResult, _betSize) {
    if (flipResult == 0) {
        alert("You Lose: " + (_betSize).toString() + " Ether");
    }
    if (flipResult == 1) {
        alert("You Win: " + (_betSize*2).toString() + " Ether");
    }
}