'use strict';
//1. Użytkownik wybiera swój ruch
//2. Komputer losowo wybiera swój ruch
//3. Przyrównujemy dwie wartości
//4. Sprawdzamy kto wygrał
//5. Zwiększamy komuś wynik

//==========================================================

//Deklaracja zmiennych

var params = {
    playerResult: myScore, 
    computerRresult: compScore, 
    playerTurn: myMove, 
    computerTurn: computerMove, 
    move1: rock, 
    move2: paper, 
    move3: scissors, 
    rounds: playedRounds, 
    allRounds: winRounds,
};

var outputUser = document.getElementById('output1');
var outputComputer = document.getElementById('output2');
var resultTable = document.getElementById('result');

//var rock = 'rock';
//var paper = 'paper';
//var scissors = 'scissors';

//var myMove;
//var computerMove;

//var myScore; 
//var compScore; 

//==============================================================

//2. Komputer losowo wybiera swój ruch

function compMove(){
 var move = Math.floor((Math.random() * 3) + 1); 
  if (move == 1) {
    return rock;
  }
  else if (move == 2) {
    return paper; 
  }
  else {
    return scissors;
  }
}


//4. Sprawdzamy kto wygrał

function checkWinner()
{
  if ((myMove == 'rock' && computerMove == 'scissors') || (myMove == 'paper' && computerMove == 'rock') || (myMove == 'scissors' && computerMove == 'paper'))
  {
  outputUser.innerHTML =  myMove + '<br>' + '<br>' + 'You win';
  outputComputer.innerHTM =  computerMove + '<br><br>' + 'Computer loses';
  myScore++;
  }
else if ((myMove == 'rock' && computerMove == 'paper') || (myMove == 'paper' && computerMove == 'scissors') || (myMove == 'scissors' && computerMove == 'rock'))
  {
  outputUser.innerHTML =  myMove + '<br>' + '<br>' + 'You lose';
  outputComputer.innerHTML =  coputerMove + '<br><br>' + 'Computer wins';
  compScore++;
  }
else 
  {
  outputUser.innerHTML =  myMove + '<br><br>' + 'Draw';
  outputComputer.innerHTML =  computerMove + '<br><br>' + 'Draw';
  }
  
if (myScore == 10) 
    {
    alert('Player wins');
      outputUser.innerHTML =  '';
      outputComputer.innerHTML = '';
      myScore = 0;
      compScore = 0;
    }
else if (compScore == 10)
    {
    alert('Computer wins'); 
      outputUser.innerHTML =  '';
      outputComputer.innerHTML = '';
      myScore = 0;
      compScore = 0
    }
}

function refreshScore()
{
  //wpisuje do odpowiedniego diva aktualny wynik 
 resultTable.innerHTML = myScore + ' : ' + compScore;
}

//Wywołanie funkcji

function playerMove(arg)
{
myMove = arg;
computerMove = compMove();
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

