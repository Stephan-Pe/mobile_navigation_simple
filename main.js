var hamburger = document.querySelector('#hamburger');
var offcanvas = document.querySelector('#offcanvas');
hamburger.addEventListener('click', function(e) {offcanvas.classList.toggle('open')});

var closecanvas = document.querySelector('#cancel');
cancel.addEventListener('click', function(e) {offcanvas.classList.remove('open')});