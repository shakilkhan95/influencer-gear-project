const navigation = document.getElementById("navigation");
const menuBar = document.getElementById("menu-bar");
const navLinks = document.querySelectorAll('li');
//Script to toggle nav items while clicking on hamburger icon
menuBar.onclick = menuToggle;

//Script to toggle nav items while clicking on nav links
navLinks.forEach(link => {
    link.onclick = menuToggle;
})

//Toggle Function
function menuToggle() {
    navigation.classList.toggle('hidden');
}