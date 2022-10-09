var dealerAceCount = 0;
var yourAceCount = 0; 

var hidden;
var deck;

var canHit = true; //allows the player (you) to draw while yourSum <= 21
var dealerSum = 0; 
var yourSum = 0; 


window.onload = function() {
    buildDeck();
    shuffleDeck();
     startGame();
}

function buildDeck() {
    let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let types = ["C", "D", "H", "S"];
    deck = [];

    for (let i = 0; i < types.length; i++) {
        for (let j = 0; j < values.length; j++) {
            deck.push(values[j] + "-" + types[i]); //A-C -> K-C, A-D -> K-D
        }
    }
    // console.log(deck);
}

function shuffleDeck() {
    for (let i = 0; i < deck.length; i++) {
        let j = Math.floor(Math.random() * deck.length); // (0-1) * 52 => (0-51.9999)
        let temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
    console.log(deck);
}




function startGame() {
hidden = deck.pop();
dealerSum += getValue(hidden);
dealerAceCount += checkAce(hidden);

 while (dealerSum < 17) {
    let cardImg = document.createElement('img');
    cardImg.classList.add("m-4", "h-44", "w-32");
    let card = deck.pop();
    cardImg.src = "cards/" + card + ".png";
    dealerSum += getValue(card);
    dealerAceCount+= checkAce(card);
    document.getElementById("dealer-cards").append(cardImg);
 }
 console.log(dealerSum);

 for (let i = 0; i < 2; i++) {
    let cardImg = document.createElement('img');
    cardImg.classList.add("m-4", "h-44", "w-32");
    let card = deck.pop();
    cardImg.src = "cards/" + card + ".png";
    yourSum += getValue(card);
    yourAceCount+= checkAce(card);
    document.getElementById("your-cards").append(cardImg);
 }
//    document.getElementById("hit").addEventListener('click', funcHit);
    document.getElementById("stay").addEventListener("click", funcStay);
}

function funcHit() {
    if(!canHit) {
        return;
    }
    
    let cardImg = document.createElement('img');
    cardImg.classList.add("m-4", "h-44", "w-32");
    let card = deck.pop();
    cardImg.src = "cards/" + card + ".png";
    yourSum += getValue(card);
    yourAceCount+= checkAce(card);
    document.getElementById("your-cards").append(cardImg);
    

    if (reduceAce(yourSum, yourAceCount) > 21) {
        canHit= false;
    }
}

function funcStay() {
    dealerSum = reduceAce(dealerSum, dealerAceCount);
    yourSum = reduceAce(yourSum, yourAceCount);

    canHit = false;
    document.getElementById("hidden").src = "cards/" + hidden + ".png";

    let message = "";
    if(yourSum > 21) {
        message = "You Lose!";
    }
    else if(dealerSum> 21) {
        message = "You Win!";
    }
    else if(yourSum === dealerSum) {
        message = "Tie!";
    }
    else if(yourSum > dealerSum || yourSum == 21) {
        messgae = "You Win!";
    }
    else if (yourSum < dealerSum || dealerSum == 21) {
        message = "You Lose!"
    }
    
    document.getElementById("dealer-count").innerText = dealerSum;
    document.getElementById("your-count").innerText = yourSum;
    document.getElementById("result").innerText = message;
    console.log(message);
}

function getValue(card) {
    let data = card.split('-');
    let value = data[0];
 
     if(isNaN(value)){
         if(data[0] === "A") {
             return 11;
         }
         return 10;
     }
     return parseInt(value);
 }


 function checkAce(card) {
    if(card[0] === "A"){
        return 1;
    }
    return 0;
 }

 function reduceAce(yourSum, yourAceCount) {
    if(yourSum > 21 && yourAceCount > 0) {
        yourSum-= 10;
        yourAceCount -= 1;

    }
    return yourSum;
 }