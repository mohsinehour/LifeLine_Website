const openMenuButton = document.getElementById('openMenuButton');
const closeMenuButton = document.getElementById('closeMenuButton');
const mobileMenu = document.getElementById('mobileMenu');

openMenuButton.addEventListener('click', () => {
    mobileMenu.style.display = 'block';
});

closeMenuButton.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
});