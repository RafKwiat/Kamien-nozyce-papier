'use strict';

var params = {
    myScore: 0, 
    compScore: 0, 
    myMove: '', 
    computerMove: '', 
    move1: 'rock', 
    move2: 'paper', 
    move3: 'scissors', 
    rounds: 0,
    progress: [],
};

var outputUser = document.getElementById('output1');
var outputComputer = document.getElementById('output2');
var resultTable = document.getElementById('result');
var newGameBtn = document.getElementById('new-game');
var roundsOfGame = document.getElementById('rounds');
var modals = document.querySelectorAll('.modal');
var overlay = document.querySelector('#modal-overlay');
var table = document.getElementsByClassName('result-table');

//==============================================================

function compMove(){
 var move = Math.floor((Math.random() * 3) + 1); 
  if (move == 1) {
    return params.move1;
  }
  else if (move == 2) {
    return params.move2; 
  }
  else {
    return params.move3;
  }
}

function checkWinner()
{
  if ((params.myMove == 'rock' && params.computerMove == 'scissors') || (params.myMove == 'paper' && params.computerMove == 'rock') || (params.myMove == 'scissors' && params.computerMove == 'paper'))
  {
  outputUser.innerHTML = params.myMove + '<br>' + '<br>' + 'You win';
  outputComputer.innerHTML = params.computerMove + '<br>' + '<br>' + 'Computer loses';
  params.myScore++;
  }
    
else if ((params.myMove == 'rock' && params.computerMove == 'paper') || (params.myMove == 'paper' && params.computerMove == 'scissors') || (params.myMove == 'scissors' && params.computerMove == 'rock'))
  {
  outputUser.innerHTML = params.myMove + '<br>' + '<br>' + 'You lose';
  outputComputer.innerHTML = params.computerMove + '<br>' + '<br>' + 'Computer wins';
  params.compScore++;
  }
    
else 
  {
  outputUser.innerHTML = params.myMove + '<br>' + '<br>' + 'Draw';
  outputComputer.innerHTML = params.computerMove + '<br>' + '<br>' + 'Draw';
  }
  
if (params.myScore == params.rounds) 
    {
    showModalPlayer();
    
    
    }
else if (params.compScore == params.rounds)
    {
    showModalComputer();     
    }
}

function refreshScore()
{   
 resultTable.innerHTML = params.myScore + ' : ' + params.compScore;
}

function roundsToWin(){
    var rnds = prompt('Please enter number of rounds');  
    
    if (isNaN(rnds) || rnds == '' || rnds == null) {
        roundsOfGame.innerHTML = 'Wrong value';
  }
  else {
    return rnds;
  }
}

 newGameBtn.addEventListener('click', function(){
    params.rounds = roundsToWin();
    outputComputer.innerHTML = '';
    outputUser.innerHTML = '';
    params.myScore = 0;
    params.compScore = 0;
    roundsOfGame.innerHTML = 'Rounds you need to win the entire game:  ' + params.rounds;                             
});   

function playerMove(arg){
    params.myMove = arg;
    params.computerMove = compMove();
    checkWinner();
    refreshScore();
    gameStats();
}

var moves = document.querySelectorAll('.player-move');

for(var i = 0; i < moves.length; i++){
    
    moves[i].addEventListener('click', function(){
        var getMove = this.getAttribute('data-move')
    playerMove(getMove);
 });
}

function showModalPlayer(){
    overlay.classList.add('show');
    document.getElementById('modal-player').classList.add('show');
    document.getElementById('modal-computer').classList.remove('show');
}

function showModalComputer(){
    overlay.classList.add('show');
    document.getElementById('modal-computer').classList.add('show');
    document.getElementById('modal-player').classList.remove('show');
}

function hideModal(event){
    event.preventDefault();
    outputComputer.innerHTML = '';
    outputUser.innerHTML = '';
    params.myScore = 0;
    params.compScore = 0;
    overlay.classList.remove('show');
    }
	
var closeButtons = document.querySelectorAll('.modal .close');
	
for (var i = 0; i < closeButtons.length; i++){
    closeButtons[i].addEventListener('click', hideModal);
	}
	
    overlay.addEventListener('click', hideModal);

//-----------------------------------------------------------------------

function gameStats(){    
    params.progress.push(params.rounds, params.myMove, params.computerMove, params.myScore, params.compScore)
}

for(var trCount = 0; trCount < 2; trCount++){
    
   var row = document.createElement('tr');

    for(var tdCount = 0; tdCount < 5; tdCount++){
        var column = document.createElement('td');
        row.appendChild(column);
}
}

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

