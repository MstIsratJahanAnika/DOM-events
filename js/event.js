console.log('external file');

// option: function call - click even handler
function makeYellow() {
    document.body.style.backgroundColor = 'yellow';
}
function makeRed() {
    document.body.style.backgroundColor = 'red';
}

// get element by Id and set onclick to a function
const btnMakeBlue = document.getElementById('btn-make-blue');
// console.log(btnMakeBlue); 
btnMakeBlue.onclick = function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}


// option:  different version
const makePurple = document.getElementById('btn-make-purple');
// console.log(makePurple);
makePurple.onclick = bgPurple;

// option-4: addEventListener


function bgPurple() {
    document.body.style.backgroundColor = 'purple';
}