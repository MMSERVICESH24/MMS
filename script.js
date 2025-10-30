// Effet sonore de clic
const clickSound = new Audio("https://www.soundjay.com/buttons/sounds/button-16.mp3");

// Menu latéral rétractable
const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
        clickSound.play();
    });
}

// Gestion des provinces et territoires
document.querySelectorAll('.province').forEach(province => {
    province.addEventListener('click', () => {
        clickSound.play();
        const territoires = province.nextElementSibling;
        if (territoires.classList.contains('open')) {
            territoires.classList.remove('open');
            territoires.style.maxHeight = null;
        } else {
            document.querySelectorAll('.territoires').forEach(t => {
                t.classList.remove('open');
                t.style.maxHeight = null;
            });
            territoires.classList.add('open');
            territoires.style.maxHeight = territoires.scrollHeight + "px";
        }
    });
});

// Défilement doux (effet fluide)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        clickSound.play();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
