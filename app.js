const themeDots = document.getElementsByClassName('theme-dot');

let theme = localStorage.getItem('theme');

if (theme == null) {
    setTheme('dark'); // SET THEME ON FIRST VISIT
} else {
    setTheme(theme);
}



for (var i = 0; themeDots.length > i; i++) {
    themeDots[i].addEventListener('click', function () {
        let mode = this.dataset.mode;
        console.log('option-clicked:', mode);
        setTheme(mode);
    });
}

function setTheme(mode) {
    if (mode == 'light') {
        document.getElementById('theme-style').href = 'styles.css';
    } else if (mode == 'dark') {
        document.getElementById('theme-style').href = 'dark-mode.css';
    } 

    localStorage.setItem('theme', mode) // KEY // MODE   
}

// SAVE VALUES IN LOCAL STORAGE (SAVE INFO IN BROWSER):
