/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
let scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;

document.querySelector('.dice').style.display = 'none';

// //callback function
// function btn(){
//     //Do something here
// }
// btn();
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';


document.querySelector('.btn-roll').addEventListener('click', function() {
    //1. random number
    let dice = Math.floor(Math.random() * 6) + 1;
    
    //2. display result
    let diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

    //3. update round score IF the rolled number was NOT a 1
    if(dice !== 1) {
        //add score
        roundScore += dice; 
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
     } else {
        //next player
        nextPlayer();
     }    
});

document.querySelector('.btn-hold').addEventListener('click', function(){ 
    //Add current score to GLOBAL score
    scores[activePlayer] += roundScore;
    //Update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('winner');

    //check if player won the game
    if(scores[activePlayer] >= 10){
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
    } else {
        //next player
        nextPlayer();
    }

});

function nextPlayer(){
            
        activePlayer === 0 ? activePlayer = 1 : activePlayer =0;
        roundScore = 0;

        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

    //     if(activePlayer === 0){
    //         activePlayer = 1;
    //     } else {
    //         activePlayer = 0;
    //     }
    // same as writing line 43

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        // document.querySelector('.player-0-panel').classList.remove('active');
        // document.querySelector('.player-1-panel').classList.add('active');
        document.querySelector('.dice').style.display = 'none';

}


// document.querySelector('#current-' + activePlayer).textContent = dice;
// // document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'

// let x = document.querySelector('#score-0').textContent;
// console.log(x);
