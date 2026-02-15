// typing indicator
document.getElementById('user-name').addEventListener('keydown', function () {
    console.log('typing');
})

// what is typing
document.getElementById('user-name').addEventListener('keydown', function (event) {
    console.log('typing', event);
})

// get input field of typing text ekta kom kore kore dekhay 5 ia input hole output dekhabe 4 ta, porer bar dui khetre e barbe ek ek kore
document.getElementById('user-name').addEventListener('keydown', function (event) {
    console.log('typing', event.target.value);
})

// age age e output chaile, ek kore kom na chaile -> keyup use, shathe shathe dekhabe 
document.getElementById('user-name').addEventListener('keyup', function (event) {
    console.log('typing', event.target.value);
})