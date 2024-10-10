const character = document.getElementById('character');

let keyState = {};
window.addEventListener('keydown',function(e){
    keyState[e.keyCode || e.which] = true;
},true);
window.addEventListener('keyup',function(e){
    keyState[e.keyCode || e.which] = false;
},true);

let x = 0;

function gameLoop() {
    let move = 0;
    if (keyState[37]){
        move = -10;
        character.classList.add('walking-left')
        character.classList.remove('walking-right')
    }
    if (keyState[39]){
        move = 10;
        character.classList.add('walking-right')
        character.classList.remove('walking-left')
    }

    x+=move;

    if (!move) {
        character.classList.remove('walking-left'); 
        character.classList.remove('walking-right'); 
        character.classList.add('resting'); 
    } else {
        character.classList.remove('resting'); 
    }

    character.style.marginLeft = x + "px";

    setTimeout(gameLoop, 10);
}
gameLoop();