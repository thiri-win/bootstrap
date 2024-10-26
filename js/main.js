const navbar = document.querySelector('#navbar');

window.onscroll = function() {
    if(window.scrollY  >= 20) {
        navbar.classList.remove('bg-transparent', 'py-4')
        navbar.classList.add('bg-black', 'py-3')
    } else {
        navbar.classList.add('bg-transparent', 'py-4')
        navbar.classList.remove('bg-black', 'py-3')
    }
}