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

};

var outputUser = document.getElementById('output1');
var outputComputer = document.getElementById('output2');
var resultTable = document.getElementById('result');
var newGameBtn = document.getElementById('new-game');
var roundsOfGame = document.getElementById('rounds');

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
    alert('Player wins');
    //outputUser.innerHTML = '';
    //outputComputer.innerHTML = '';
    params.myScore = 0;
    params.compScore = 0;
    params.rounds = '';
    
    }
else if (params.compScore == params.rounds)
    {
    alert('Computer wins'); 
    //outputUser.innerHTML = '';
    //outputComputer.innerHTML = '';
    params.myScore = 0;
    params.compScore = 0;
    params.rounds = '';
    
    }
    endGame();
}

function endGame(){
    
if (params.myScore == params.rounds){
    outputUser.innerHTML = ('You won the entire game!!!');
    outputComputer.innerHTML = '';
    
}
    else if (params.compScore == params.rounds){
    outputComputer.innerHTML = ('Computer won the entire game!!!');
    outputUser.innerHTML = '';
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
    roundsOfGame.innerHTML = 'Rounds you need to win the game:  ' + params.rounds;                             
});   

function playerMove(arg){
params.myMove = arg;
params.computerMove = compMove();
checkWinner();
refreshScore();

}

var moves = document.querySelectorAll('.player-move');

for(var i = 0; i < moves.length; i++){
    
    moves[i].addEventListener('click', function(){
        var getMove = this.getAttribute('data-move')
    playerMove(getMove);
 });
}

