
import "./style.css";


window.onload = function () {
  generateCard();

  document.querySelector("#newCardButton").addEventListener("click", generateCard); 
};

function generateCard(){

  const suit = generateRandomSuit();
  const number = generateRandomNumber();

  
  document.querySelector(".top-suit").innerHTML = suit;
  document.querySelector(".bottom-suit").innerHTML = suit;
  document.querySelector(".number").innerHTML = number;

  
  const card = document.querySelector(".card");
  if (suit === "♥" || suit === "♦") {
    card.style.color = "red";
  } else {
    card.style.color = "black";
  }
}

let generateRandomNumber = () => {
  let numbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  let index = Math.floor(Math.random() * numbers.length);
  return numbers[index];
};

let generateRandomSuit = () => {
  let suits = ['♠', '♣', '♥', '♦'];
  let index = Math.floor(Math.random() * suits.length);
  return suits[index];
};



