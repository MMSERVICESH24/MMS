// --- Gestion du menu latéral ---
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const sideMenu = document.getElementById("side-menu");

// Ouvrir le menu
menuBtn.addEventListener("click", () => {
    sideMenu.classList.add("open");
    playClick();
});

// Fermer le menu
closeBtn.addEventListener("click", () => {
    sideMenu.classList.remove("open");
    playClick();
});

// Fermer le menu quand on clique en dehors
document.addEventListener("click", (e) => {
    if (!sideMenu.contains(e.target) && !menuBtn.contains(e.target)) {
        sideMenu.classList.remove("open");
    }
});

// --- Gestion du clic avec son ---
function playClick() {
    const sound = new Audio("https://cdn.pixabay.com/download/audio/2022/03/15/audio_7b3e5b58f1.mp3?filename=click-124467.mp3");
    sound.volume = 0.4;
    sound.play();
}

// --- Gestion de l’affichage des territoires ---
const provinceButtons = document.querySelectorAll(".province-btn");

provinceButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        playClick();

        // Trouve la liste de territoires liée
        const territoires = btn.nextElementSibling;

        // Alterne entre affiché et caché
        if (territoires.style.display === "block") {
            territoires.style.display = "none";
            btn.classList.remove("active");
        } else {
            territoires.style.display = "block";
            btn.classList.add("active");
        }
    });
});

// --- Effet de transition douce pour le défilement ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        playClick();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
