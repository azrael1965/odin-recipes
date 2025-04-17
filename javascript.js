
//Full List
const options = ["rock", "paper", "scissors"];

// //Set button values
// const button1 = document.querySelector('button1');
// button1.value = '';
// //const button2 = document.querySelector('button2').value = 'paper';
// const button3 = document.querySelector('button3').value = 'scissors';

// console.log(button1);
// //console.log(button2);
// //console.log(button3);

function getComputerChoice() {
    // Use Math.random() to generate a random number between 0 and 1,
    // multiply it by the length of the array, and use Math.floor() to round down to the nearest integer
    return options[Math.floor(Math.random() * options.length)];
}

function getHumanChoice(){
    let choice = '';
    button.forEach(bt => {
        bt.addEventListener('click', () =>{
            console.log(bt.value);
            choice = bt.value;
        });
    return choice;
    });
}
//     choice = choice.toLowerCase();
//     console.log('You picked: ' + choice.value);
//     return choice;
// }

function youWin(){
    console.log("You Win this Round");
}

function youLose(){
    console.log("You Lose this Round");
}

function tieGame(){
    console.log("It's a tie this Round");
}

//Make Select
const button = document.querySelectorAll('button');

//Add values to buttons
for (i=0; i<button.length; i++){
    button[i].value = options[i];
};

// button.forEach(bt => {
//     bt.addEventListener('click', () =>{
//         console.log(bt.value);
//     })
// });

let x = getHumanChoice();
console.log(x);

//x is human y is comp
function playGame(){
    let score = [0,0];
    
    
        for(let i = 0; i < 5; i++){
        human = getHumanChoice()
        comp = getComputerChoice();

        //console.log("Human Choice: " + human);
       // console.log("Computer Choice: " + comp);

       
        // if the computer choice and human choice are the same both get one point
        //options is list of rock paper scissors
        if (human == comp){
            score[0]++;
            score[1]++;
            tieGame();
        } 

        //rock human, paper comp 
        else if (human == options[0] && comp == options[1]) {
            score[1]++;
            youLose();
        }//rock human, scissors comp
        else if (human == options[0] && comp == options[2]) {
            score[0]++;
            console.log("You Win This Round");
        }

        //paper human rock comp
        else if (human == options[1] && comp == options[0]) {
            score[1]++;
            console.log("You Win This Round");
        }//paper human, scissors comp
        else if (human == options[1] && comp == options[2]) {
            score[0]++;
            youLose();
        }

        //scissor human rock comp
        else if (human == options[2] && comp == options[0]) {
            score[1]++;
            youLose();
        }//scissor human, paper comp
        else if (human == options[2] && comp == options[1]) {
            score[0]++;
            console.log("You Win This Round");
        }
       
    }
    console.log("Human Score: " + score[0]);
    console.log("Computer Score: " + score[1]);
    if (score[0] > score[1]){
        console.log("You win the game!");
    } else if (score[0]==score[1]) {
        console.log("It's a tie game.");
    } else {
        console.log("You lost the game.");
    }
}

//playGame();