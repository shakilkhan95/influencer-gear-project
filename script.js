const navigation = document.getElementById("navigation");
const menuBar = document.getElementById("menu-bar");
menuBar.onclick = () => {
    navigation.classList.toggle('hidden');
}