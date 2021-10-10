
// Get elements by Class name
let themeDots = document.getElementsByClassName('theme-dot');

for (var i = 0; themeDots.length > i; i++) {

    // What to do with each element
    themeDots[i].addEventListener('click', function () {

        // We added 'mode' attribute to each div 
        let mode = this.dataset.mode

        console.log(`${mode} mode is clicked`)

        // Activate change theme function 
        setTheme(mode)
    })
}

function setTheme(mode) {

    // Add the correct CSS file  upon clicking 

    if (mode == 'light') {
        document.getElementById('theme-style').href = 'default.css'
    }

    if (mode == 'dark') {
        document.getElementById('theme-style').href = 'dark.css'
    }

    if (mode == 'pink') {
        document.getElementById('theme-style').href = 'pink.css'
    }
};