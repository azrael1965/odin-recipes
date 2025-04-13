// Rock Paper Scissors Game
//console.log("Hello World");


//Full List
const options = ["rock", "paper", "scissors"];

//Testing List
//const options = ["rock"];


function getComputerChoice() {
    // Use Math.random() to generate a random number between 0 and 1,
    // multiply it by the length of the array, and use Math.floor() to round down to the nearest integer
    return options[Math.floor(Math.random() * options.length)];
}

function getHumanChoice(){
    let choice = prompt("Rock, Paper, Or Scissors?");
    choice = choice.toLowerCase();
    return choice;
}

//x is human y is comp
let score = [0,0];
human = getHumanChoice()
comp = getComputerChoice();

console.log("Human Choice: " + human);
console.log("Computer Choice: " + comp);


// if the computer choice and human choice are the same both get one point
//options is list of rock paper scissors
if (human == comp){
    score[0]++;
    score[1]++;
    console.log("It's a tie.")
} //rock human, paper comp 
else if (human == options[0] && comp == options[1]) {
    score[1]++;
    console.log("You Lose This Round");
}//rock human, scissors comp
else if (human == options[0] && comp == options[2]) {
    score[0]++;
    console.log("You Win This Round");
}

console.log("Human Score: " + score[0]);
console.log("Computer Score: " + score[1]);
//console.log(getComputerChoice());




















// let humanScore = 0;
// let computerScore = 0;

// function playRound(){
//     let human = getHumanChoice();
//     let comp = getComputerChoice();
//     if (human in choice){
//         console.log(human)
//     } else {console.log("You Mispelled Something");
//         console.log("Here is your spelling : " + human);
//         human = getHumanChoice();
//     }
//         // if (human == "rock" && comp == "paper") {
//         //     console.log("You Lose");
//         //     computerScore ++;
        // } else if (human == "paper" && comp == "scissors") {
        //     console.log("You Lose");
        //     computerScore ++;
        // } else if (human == "scissors" && comp == "rock") {
        //     console.log("You Lose");
        //     computerScore ++;
        // } else if (human == "rock" && comp == "rock"){
        //     console.log("It's a tie");
        //     computerScore ++;
        //     humanScore ++;
        // } else if (human == "paper" && comp == "paper"){
        //     console.log("It's a tie");
        //     computerScore ++;
        //     humanScore ++;
        // } else if (human == "scissors" && comp == "scissors"){
        //     console.log("It's a tie");
        //     computerScore ++;
        //     humanScore ++;
        // } else if (human == "rock" && comp =="scissors") {
        //     console.log("You Win");
        //     humanScore ++;
        // } 
        // else if (human == "scissors" && comp =="paper") {
        //     console.log("You Win");
        //     humanScore ++;
        // } else if (human == "paper" && comp =="rock") {
        //     console.log("You Win");
        //     humanScore ++;
        // } 
//}


// This is the loop to play 5 times
// for (let step = 0; step < 5; step++) {
//     // Runs 5 times, with values of step 0 through 4.
//     playRound();
//   }



//console.log("Wins" + humanScore);

