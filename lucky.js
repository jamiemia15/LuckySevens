function validateItems() {
    
    var startingBet = document.forms["form"]["bet"].value;
    if (startingBet <= 0) {
        alert("You must enter a starting bet larger than $0.00");
        document.forms["form"]["bet"].focus();
        return false;
    }
    play(startingBet);
    return false;
}

function play(startingBet) {
    var money = parseInt(startingBet);
    var diceOne = 0;
    var diceTwo = 0;
    var total = 0;
    var count = 0;
    var max = parseInt(startingBet);
    var countAtMax = 0;
    while (money > 0) {
        count++;
        diceOne = Math.floor(Math.random() * 6) + 1;
        diceTwo = Math.floor(Math.random() * 6) + 1;
        total = diceOne + diceTwo;
        if (total == 7) {
            money = money + 4;
            if (money > max) {
                max = money;
                countAtMax = count;
            }
        } 
        else {
            money = money - 1;
        }
    }
    
    document.getElementById("results").style.display = "block";
    document.getElementById("play").innerText = "Play Again";
    document.getElementById("start").innerText = startingBet;
    document.getElementById("total").innerText = count;
    document.getElementById("highest").innerText = max;
    document.getElementById("count").innerText = countAtMax;
    
    
}