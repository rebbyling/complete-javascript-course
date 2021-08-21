'use strict';

let correctNumber = Math.trunc(Math.random()*20+1);
let score = 20;
let highScore = 0;
//addEventListener() used to listen to event 'click' and carry out function()
document.querySelector('.check').addEventListener('click', function(){
    //Number() converts returned string to a number
    const input = Number(document.querySelector('.guess').value);
    
    if(score>0) {
        //check if there is an input
        if(!input) {
            document.querySelector('.message').textContent = '👾 Please input a number';
        } else if (input < 1 || input >20) {
            document.querySelector('.message').textContent = '👻 Please input number between 1 and 20';
        } else if(input == correctNumber) {
            document.querySelector('.message').textContent = '🎊 Correct Number!';
            document.querySelector('body').style.backgroundColor = '#4fddb3';
            document.querySelector('.left').style.display = 'none';
            document.querySelector('.number').textContent = correctNumber;
            document.querySelector('.score').textContent = score;
            if (score > highScore) {
                highScore = score;
            }
            document.querySelector('.highscore').textContent = highScore;
        } else if(input < correctNumber) {
            document.querySelector('.message').textContent = 'Too Small';
            score -= 1;
            document.querySelector('.score').textContent = score;
        } else if( input> correctNumber){
            document.querySelector('.message').textContent = 'Too Big';
            score -= 1;
            document.querySelector('.score').textContent = score;
        }
    } else {
        document.querySelector('.message').textContent = 'Game Over!';
    }

});


document.querySelector('.again').addEventListener('click', function(){
    score = 20
    correctNumber = Math.trunc(Math.random()*20+1);
    document.querySelector('.message').textContent = '👾 Please input a number';
    document.querySelector('body').style.backgroundColor = '#000';
    document.querySelector('.score').textContent= score ;
    document.querySelector('.left').style.display = 'flex';
    document.querySelector('.number').textContent = '?';
    
})