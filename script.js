const phrase = document.querySelector('h3');

function get() {
   phrase.style.backgroundColor= 'blue';
}
phrase.addEventListener('click', get);