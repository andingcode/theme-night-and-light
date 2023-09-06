const navIcon = document.getElementById('nav-icon');
const navTitle = document.getElementById('nav-title');

const txtLight = document.createTextNode("Light");

// function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

function lightTheme() {
    setTheme('theme-light')
    navIcon.classList.add('ri-sun-fill')
    navIcon.classList.remove('ri-moon-fill')
    navTitle.innerText = 'Light'
}

function darkTheme() {
    setTheme('theme-dark')
    navIcon.classList.remove('ri-sun-fill')
    navIcon.classList.add('ri-moon-fill')
    navTitle.innerText = 'Night'
}

// function to toggle between light and dark theme
function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') {
        lightTheme()
    } else {
        darkTheme()
    }
}

// Immediately invoked function to set the theme on initial load
(function () {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark')
        navIcon.classList.add('ri-moon-fill')
        navTitle.innerText = 'Night'
    } else {
        setTheme('theme-light')
        navIcon.classList.add('ri-sun-fill')
        navTitle.innerText = 'Light'
    }
})();