// Smooth navigation for internal links (inline scroll to start of section)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    const target = document.querySelector(this.getAttribute('href'));
    if(!target) return;
    e.preventDefault();
    // scroll the horizontal wrapper so that the target's left is visible.
    const wrap = document.getElementById('hwrap');
    const left = target.offsetLeft;
    wrap.scrollTo({ left, behavior: 'smooth' });
  });
});

// Optional: mouse wheel → horizontal scroll for easier navigation on desktop
const wrap = document.getElementById('hwrap');
wrap.addEventListener('wheel', function(e){
  if(Math.abs(e.deltaY) < 1) return;
  // prevent vertical page scroll and move horizontally
  e.preventDefault();
  wrap.scrollBy({ left: e.deltaY * 1.5, behavior: 'auto' });
}, { passive: false });
