// focus
document.getElementById('user-name')
    .addEventListener('focus', function () {
        console.log('user about to write name');
    })

document.getElementById('user-email')
    .addEventListener('focus', function () {
        console.log('user about to write email');
    })

// blur
document.getElementById('user-name')
    .addEventListener('blur', function () {
        console.log('user done with name');
    })

document.getElementById('user-email')
    .addEventListener('blur', function () {
        console.log('user done with email');
    })