// Rock Paper Scissors Game
console.log("Hello World");

const choice = ["rock", "paper", "scissors"];


function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    // Use Math.random() to generate a random number between 0 and 1,
    // multiply it by the length of the array, and use Math.floor() to round down to the nearest integer
    return choices[Math.floor(Math.random() * choices.length)];
}

function getHumanChoice(){
    let choice = prompt("Rock, Paper, Or Scissors?");
    choice = choice.toLowerCase();
    return choice;
}

console.log(getComputerChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(){
    let human = getHumanChoice();
    let comp = getComputerChoice();


    if (human == "rock" && comp == "paper") {
        console.log("You Lose");
        computerScore ++;
    } else if (human == "paper" && comp == "scissors") {
        console.log("You Lose");
        computerScore ++;
    } else if (human == "scissors" && comp == "rock") {
        console.log("You Lose");
        computerScore ++;
    } else if (human == "rock" && comp == "rock"){
        console.log("It's a tie");
        computerScore ++;
        humanScore ++;
    } else if (human == "paper" && comp == "paper"){
        console.log("It's a tie");
        computerScore ++;
        humanScore ++;
    } else if (human == "scissors" && comp == "scissors"){
        console.log("It's a tie");
        computerScore ++;
        humanScore ++;
    } else if (human == "rock" && comp =="scissors") {
        console.log("You Win");
        humanScore ++;
    } 
    else if (human == "scissors" && comp =="paper") {
        console.log("You Win");
        humanScore ++;
    } else if (human == "paper" && comp =="rock") {
        console.log("You Win");
        humanScore ++;
    } 

    return humanScore, computerScore;
}

playRound();

console.log(humanScore);

