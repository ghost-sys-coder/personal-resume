const body = document.querySelector("body");
console.log(body)
const mainContainer = document.getElementById("container--main");
const themeBtn = mainContainer.querySelector(".theme--toggle");
const themeIcon = themeBtn.querySelector("i");


const darkMode = localStorage.getItem("darkMode");

const disableDarkMode = () => {
    themeBtn.innerHTML = `<i class="fas fa-toggle-on"></i>`;
    body.classList.remove("change--theme");
    localStorage.setItem("darkMode", "disabled");
}

const enableDarkMode = () => {
    themeBtn.innerHTML = `<i class="fas fa-toggle-off"></i>`;
    body.classList.add("change--theme");
    localStorage.setItem("darkMode", "enabled");
}

if (localStorage.getItem("darkMode") === "enabled") {
    enableDarkMode();
}

themeBtn.addEventListener('click', () => {
    if (localStorage.getItem("darkMode") === "disabled") {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});

