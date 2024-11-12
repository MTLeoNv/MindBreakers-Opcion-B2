let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');
let menuLinks = document.querySelectorAll('.navlist a');

// Toggle the menu on menu icon click
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

// Close the menu on scroll
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
}

// Close the menu when any link is clicked
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('bx-x');
        navlist.classList.remove('open');
    });
});
