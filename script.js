const signUp = document.querySelector('#sign-up')
const username = localStorage.getItem("username")
// const firstname

if (username != null && username !== '') {
    signUp.style.display = 'none'
}

const usernameFormSignup = document.querySelector('#sign-up .username-form')
const usernameInputSignup = document.querySelector('#sign-up .username-form input')

usernameFormSignup.addEventListener('submit', function(event) {
    event.preventDefault()
    setUsername(usernameInputSignup.value)
})

function setUsername(newName) {
    localStorage.setItem("username", newName)
    console.log(localStorage.getItem("username"))
    window.location.reload()
}


const usernameProfile = document.querySelector('.nav .profile input.username')
const editButton = document.querySelector('.profile .edit-button')
const submitButton = document.querySelector('.profile .submit-button')

editButton.addEventListener('click', function() {
    editButton.style.display = 'none';
    submitButton.style.display = 'inline-block';
    usernameProfile.focus();
    usernameProfile.readOnly = false;
})

submitButton.addEventListener('click', function() {
    editButton.style.display = 'inline-block';
    submitButton.style.display = 'none';
    setUsername(usernameProfile.value)
})

const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('.nav')

menuToggle.addEventListener('click', function() {
    nav.classList.toggle('slide');
    // menuToggle.classList.toggle('slide');
});



usernameProfile.value = username;
const greetingHeader = document.querySelector('.greeting h1');
greetingHeader.innerHTML = `Hi, kak ${username}!`;


const caraOrderButton = document.querySelector('.cara-order button')
const caraOrderSteps = document.querySelector('.cara-order .steps')

caraOrderButton.addEventListener('click', function() {
    caraOrderButton.classList.toggle('slide');
    caraOrderSteps.classList.toggle('slide');
    console.log('clicked')
})