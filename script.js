const openMenuButton = document.getElementById('openMenuButton');
const closeMenuButton = document.getElementById('closeMenuButton');
const mobileMenu = document.getElementById('mobileMenu');

openMenuButton.addEventListener('click', () => {
    mobileMenu.style.display = 'block';
});

closeMenuButton.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
});


function checkScreenSize() {
    const mobileMenu = document.getElementById('mobileMenu');
    if (window.innerWidth >= 1024) { // 1024px is typically the breakpoint for lg screens in Tailwind CSS
        mobileMenu.classList.add('hidden');
    }
}

window.addEventListener('resize', checkScreenSize);

document.getElementById('closeMenuButton').addEventListener('click', () => {
    document.getElementById('mobileMenu').classList.add('hidden');
});

// Call the function initially in case the page loads on a large screen
checkScreenSize();
