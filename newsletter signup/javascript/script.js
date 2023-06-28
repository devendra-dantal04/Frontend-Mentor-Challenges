var emailInput = document.querySelector('.email-input');
var btn = document.querySelector('.submit-btn');
var dismissBtn = document.querySelector('.dismiss-btn');
var error = document.querySelector('.error');
var successContainer = document.querySelector('.success-wrapper');
var contentWrapper = document.querySelector('.wrapper');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    error.classList.add('hidden')
    var enteredEmail = emailInput.value;
    let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    if (regex.test(enteredEmail)) {
        contentWrapper.style.display = 'none';
        successContainer.style.display = 'flex';
        error.classList.add('hidden')
    } else {
        error.classList.remove('hidden')
    }
})

dismissBtn.addEventListener('click', () => {
    contentWrapper.style.display = 'flex';
    successContainer.style.display = 'none';
})

