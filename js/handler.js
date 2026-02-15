console.log('handler file added'); //check angta lagse kina


document.getElementById('change')
    .addEventListener('click', function () {
        console.log('button clicked');

        const cngtitle = document.getElementById('heading');
        console.log(cngtitle);
        cngtitle.innerText = 'Updated Page Title';
    })


// button-2 work
document.getElementById('btn-login')
    .addEventListener('click', function () {
        // console.log('login button clicked');

        const user = document.getElementById('user-info');
        user.innerText = 'User Updated';
        console.log(user);

        // button text update
        const btnText = document.getElementById('btn-login');
        btnText.innerText = 'signed in';
        console.log(btnText);
    })



// change text according input given 
document.getElementById('btn-update')
    .addEventListener('click', function () {
        const NameInput = document.getElementById('input-name');
        console.log(NameInput);

        // input field has value, not innerText
        const name = NameInput.value;
        console.log('Name:', name);

        const PName = document.getElementById('name');
        PName.innerText = name;
    })