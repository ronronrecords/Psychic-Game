var letters = ["u", "c", "i",]

var rand = letters[Math.floor(Math.random() * letters.length)];

var chancesLeft = "3";

function promptMe() {
    var userAdjective = prompt("Please Provide a Letter");

    console.log(userAdjective);

    var exists = (letters.indexOf(userAdjective) > -1); //true
    var notExists = (letters.indexOf(userAdjective) > -1); //false

    if (exists == true) {
        alert("★★★ Your Talents Amaze Me ★★★");
    }
    else {
        alert("Wrong Try Again!") && promptMe();
    }
    --chancesLeft;
    // innerhtml(chancesLeft);
    console.log(chancesLeft);

    if (chancesLeft == "0") {
        alert("GAMEOVER LOSER!");
        location.reload()
    }
}