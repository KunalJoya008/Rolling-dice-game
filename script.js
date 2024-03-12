'use strict';
// selecting elements
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const Player0El = document.querySelector('.player--0');
const Player1El = document.querySelector('.player--1');


const diceEl   = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold= document.querySelector('.btn--hold');



// starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const switchPlayer = function(){
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer===0 ? 1 : 0;
  currentScore = 0;
  Player0El.classList.toggle('player--active');
  Player1El.classList.toggle('player--active');
}

let scores, currentScore, activePlayer, playing;


//reset function 
const startingCond = function(){
 scores = [0,0];
 activePlayer =0;
 currentScore = 0;

score0El.textContent = 0;
score1El.textContent = 0;
 playing = true;
diceEl.classList.add('hidden');

current0El.textContent = 0;
current1El.textContent = 0;


Player0El.classList.remove('player--winner');
Player1El.classList.remove('player--winner');
Player0El.classList.add('player--active');
Player1El.classList.remove('player--active');
};

startingCond();

// Rolling dice
btnRoll.addEventListener('click',function() {
  if(playing){
  // generating a random dice roll
  let dice = Math.trunc(Math.random()*6) + 1;

  // display of dice roll
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  // check if dice value is 1
  if(dice!==1){
    // add score
    currentScore+= dice;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;

  } else{
    // Switch player
   switchPlayer();
  }
}});

btnHold.addEventListener('click', function(){
  if(playing){
  // add current score to active player's score
  scores[activePlayer] += currentScore;
  // scores[1] = scores[1] + currentScore;
  document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

  //check score >= 100
  if(scores[activePlayer]>=25){
    // finish game 
    playing = false;
    diceEl.classList.add('hidden');
    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    
   
  }
  else{
    // switch player
switchPlayer();
  }

  }



});

btnNew.addEventListener('click',function(){
 
startingCond();

})
