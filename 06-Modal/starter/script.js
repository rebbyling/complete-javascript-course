'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btn = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

//looping through the modal buttons and attaching an event handler to each
for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener('click', function(){
        //remove class 'hidden' from HTML, to allow modal and overlay to be shown
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    });
}

