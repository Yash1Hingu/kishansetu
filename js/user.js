const wrapper = document.querySelector('.wrapper');
const loginLink = document.getElementById('loginLink');
const registerLink = document.getElementById('registerLink');

registerLink.addEventListener('click',(ev)=> {
    ev.preventDefault();
    wrapper.classList.add('active');
});

loginLink.addEventListener('click',(ev)=> {
    ev.preventDefault()
    wrapper.classList.remove('active');
});