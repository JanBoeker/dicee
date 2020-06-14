// Update first Dice
var diceOne = Math.floor(Math.random() * 6) + 1;
var updateDiceOne = "images/dice" + diceOne + ".png"
document.querySelectorAll("img")[0].setAttribute("src", updateDiceOne);

// Update second dice
var diceTwo = Math.floor(Math.random() * 6) + 1;
var updateDiceTwo = "images/dice" + diceTwo + ".png"
document.querySelectorAll("img")[1].setAttribute("src", updateDiceTwo);


// // Update dice of Player 1
// switch (diceOne) {
//   case 1:
//     // set first dice to image 1
//     document.querySelectorAll("img")[0].setAttribute("src", "images/dice1.png");
//     document.querySelectorAll("img")[0].setAttribute("alt", "idice-1-image");
//     break;
//   case 2:
//     // set first dice to image 2
//     document.querySelectorAll("img")[0].setAttribute("src", "images/dice2.png");
//     document.querySelectorAll("img")[0].setAttribute("alt", "idice-2-image");
//     break;
//   case 3:
//     // set first dice to image 3
//     document.querySelectorAll("img")[0].setAttribute("src", "images/dice3.png");
//     document.querySelectorAll("img")[0].setAttribute("alt", "idice-3-image");
//     break;
//   case 4:
//     // set first dice to image 4
//     document.querySelectorAll("img")[0].setAttribute("src", "images/dice4.png");
//     document.querySelectorAll("img")[0].setAttribute("alt", "idice-4-image");
//     break;
//   case 5:
//     // set first dice to image 5
//     document.querySelectorAll("img")[0].setAttribute("src", "images/dice5.png");
//     document.querySelectorAll("img")[0].setAttribute("alt", "idice-5-image");
//     break;
//   case 6:
//     // set dice to image 6
//     document.querySelectorAll("img")[0].setAttribute("src", "images/dice6.png");
//     document.querySelectorAll("img")[0].setAttribute("alt", "idice-6-image");
//     break;
//   default:
//     alert("error while dicing")
//     // code block
// }
//
// // Update dice of Player 2
// switch (diceTwo) {
//   case 1:
//     // set first dice to image 1
//     document.querySelectorAll("img")[1].setAttribute("src", "images/dice1.png");
//     document.querySelectorAll("img")[1].setAttribute("alt", "idice-1-image");
//     break;
//   case 2:
//     // set first dice to image 2
//     document.querySelectorAll("img")[1].setAttribute("src", "images/dice2.png");
//     document.querySelectorAll("img")[1].setAttribute("alt", "idice-2-image");
//     break;
//   case 3:
//     // set first dice to image 3
//     document.querySelectorAll("img")[1].setAttribute("src", "images/dice3.png");
//     document.querySelectorAll("img")[1].setAttribute("alt", "idice-3-image");
//     break;
//   case 4:
//     // set first dice to image 4
//     document.querySelectorAll("img")[1].setAttribute("src", "images/dice4.png");
//     document.querySelectorAll("img")[1].setAttribute("alt", "idice-4-image");
//     break;
//   case 5:
//     // set first dice to image 5
//     document.querySelectorAll("img")[1].setAttribute("src", "images/dice5.png");
//     document.querySelectorAll("img")[1].setAttribute("alt", "idice-5-image");
//     break;
//   case 6:
//     // set dice to image 6
//     document.querySelectorAll("img")[1].setAttribute("src", "images/dice6.png");
//     document.querySelectorAll("img")[1].setAttribute("alt", "idice-6-image");
//     break;
//   default:
//     alert("error while dicing")
//     // code block
// }

if (diceOne === diceTwo) {
  document.querySelector("h1").textContent = "Draw!";
} else if (diceOne > diceTwo) {
  document.querySelector("h1").textContent = "🚩 Play 1 Wins!";
} else {
  document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
}
