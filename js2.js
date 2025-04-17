// function getHumanChoice(){
//     let choice = '';
//     button.forEach(bt => {
//         bt.addEventListener('click', () =>{
//             console.log(bt.value);
//             choice = bt.value;
//         });
//     return choice;
//     });
// }

// make selection
const all_buttons = document.querySelectorAll('button');

//register click event
all_buttons.forEach(bt => {
    bt.addEventListener('click', () => {
        console.log('ok');
    })
})