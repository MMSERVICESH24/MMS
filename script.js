const buttons = document.querySelectorAll('.accordion-btn');
const sound = document.getElementById('clickSound');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const content = btn.nextElementSibling;
    const open = content.style.maxHeight;

    document.querySelectorAll('.accordion-content').forEach(c => {
      c.style.maxHeight = null;
      c.classList.remove('active');
    });

    if (!open) {
      content.style.maxHeight = content.scrollHeight + 'px';
      content.classList.add('active');
      if (sound) {
        sound.currentTime = 0;
        sound.play();
      }
    }
  });
});




// Accordion pour ouvrir/fermer les provinces
document.querySelectorAll('.accordion-btn').forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;

    if (content.style.display === 'flex') {
      content.style.display = 'none';
    } else {
      // Fermer tous les autres accordions
      document.querySelectorAll('.accordion-content').forEach(c => c.style.display = 'none');
      content.style.display = 'flex';
    }
  });
});

// Slider pour les territoires
document.querySelectorAll('.accordion-content').forEach(content => {
  const ul = content.querySelector('ul');
  const nextBtn = content.querySelector('.next');
  const prevBtn = content.querySelector('.prev');
  let offset = 0;

  nextBtn.addEventListener('click', () => {
    const maxScroll = ul.scrollWidth - ul.clientWidth;
    offset = Math.min(offset + 100, maxScroll);
    ul.style.transform = `translateX(-${offset}px)`;
  });

  prevBtn.addEventListener('click', () => {
    offset = Math.max(offset - 100, 0);
    ul.style.transform = `translateX(-${offset}px)`;
  });
});
