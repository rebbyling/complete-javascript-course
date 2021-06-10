'use strict';

const correctNumber = Math.trunc(Math.random()*20+1)

//addEventListener() used to listen to event 'click' and carry out function()
document.querySelector('.check').addEventListener('click', function(){
    //Number() converts returned string to a number
    const input = Number(document.querySelector('.guess').value);

    //check if there is an input
    if(!input) {
        document.querySelector('.message').textContent = '👾 Please input a number'
    } else if (input < 1 || input >20) {
        document.querySelector('.message').textContent = '👻 Please input number between 1 and 20'
    } 

    if(input == correctNumber) {
        document.querySelector('.message').textContent = '🎊 Correct Number!'
    } else if(input < correctNumber) {
        document.querySelector('.message').textContent = 'Too Small'
    } else if( input> correctNumber){
        document.querySelector('.message').textContent = 'Too Big'
    }
});