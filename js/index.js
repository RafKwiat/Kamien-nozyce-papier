'use strict';
//1. Użytkownik wybiera swój ruch
//2. Komputer losowo wybiera swój ruch
//3. Przyrównujemy dwie wartości
//4. Sprawdzamy kto wygrał
//5. Zwiększamy komuś wynik

//==========================================================

//Deklaracja zmiennych

var params = {
    myScore: 0, 
    compScore: 0, 
    myMove: '', 
    computerMove: '', 
    move1: 'rock', 
    move2: 'paper', 
    move3: 'scissors', 
    rounds: 0, 
    allRounds: 0,
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
    return params.move1;
  }
  else if (move == 2) {
    return params.move2; 
  }
  else {
    return params.move3;
  }
}


//4. Sprawdzamy kto wygrał

function checkWinner()
{
  if ((params.myMove == 'rock' && params.computerMove == 'scissors') || (params.myMove == 'paper' && params.computerMove == 'rock') || (params.myMove == 'scissors' && params.computerMove == 'paper'))
  {
  outputUser.innerHTML =  params.myMove + '<br><br>' + 'You win';
  outputComputer.innerHTM =  params.computerMove + '<br><br>' + 'Computer loses';
  params.myScore++;
  }
else if ((params.myMove == 'rock' && params.computerMove == 'paper') || (params.myMove == 'paper' && params.computerMove == 'scissors') || (params.myMove == 'scissors' && params.computerMove == 'rock'))
  {
  outputUser.innerHTML =  params.myMove + '<br><br>' + 'You lose';
  outputComputer.innerHTML =  params.coputerMove + '<br><br>' + 'Computer wins';
  params.compScore++;
  }
else 
  {
  outputUser.innerHTML =  params.myMove + '<br><br>' + 'Draw';
  outputComputer.innerHTML =  params.computerMove + '<br><br>' + 'Draw';
  }
  
if (params.myScore == 10) 
    {
    alert('Player wins');
      outputUser.innerHTML = '';
      outputComputer.innerHTML = '';
      params.myScore = 0;
      params.compScore = 0;
    }
else if (compScore == 10)
    {
    alert('Computer wins'); 
      outputUser.innerHTML = '';
      outputComputer.innerHTML = '';
      params.myScore = 0;
      params.compScore = 0;
    }
}

function refreshScore()
{
  //wpisuje do odpowiedniego diva aktualny wynik 
    
 resultTable.innerHTML = params.myScore + ' : ' + params.compScore;
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

