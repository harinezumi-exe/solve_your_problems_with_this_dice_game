function rollDice() {
    var rndm_num_1 = Math.floor((Math.random() * 6) + 1);
    var rndm_num_2 = Math.floor((Math.random() * 6) + 1);

    var title = document.getElementsByClassName("title")[0];
    var dice_1 = document.querySelector("img.dice1");
    var dice_2 = document.querySelector("img.dice2");

    var winner;

    if (rndm_num_1 > rndm_num_2) {

        winner = "🚩 Player 1 won!";

    } else if (rndm_num_2 > rndm_num_1) {

        winner = "Player 2 won! 🚩";

    } else {

        winner = "Draw!";

    }

    title.textContent = winner;
    dice_1.setAttribute("src", "images/dice" + rndm_num_1 + ".png");
    dice_2.setAttribute("src", "images/dice" + rndm_num_2 + ".png");
}

alert("Click the big title as many times as you want, it'll roll the dice every time :*");