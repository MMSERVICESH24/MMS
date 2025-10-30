const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("closeBtn");

menuToggle.addEventListener("click", () => {
  sidebar.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("active");
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

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.province');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const territoires = btn.nextElementSibling;
      const icon = btn.querySelector('span');

      if (territoires.classList.contains('open')) {
        territoires.classList.remove('open');
        icon.textContent = '▶️';
      } else {
        territoires.classList.add('open');
        icon.textContent = '🔽';
      }
    });
  });
});
