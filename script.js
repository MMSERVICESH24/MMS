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
