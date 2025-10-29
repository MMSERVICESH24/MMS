/* script.js
 - menu toggle (accessible)
 - click sound (WebAudio short beep)
 - inject provinces into accordion (26 provinces)
 - accordion open/close with scrollable territories
*/

// ---------------- click sound (short percussive "click") ----------------
const audioCtx = (typeof window.AudioContext !== "undefined") ? new window.AudioContext() : null;
function playClick() {
  if (!audioCtx) return;
  const o = audioCtx.createOscillator();
  const g = audioCtx.createGain();
  o.type = "square";
  o.frequency.value = 1200; // high pitch short click
  g.gain.value = 0.0001;
  o.connect(g); g.connect(audioCtx.destination);
  const now = audioCtx.currentTime;
  g.gain.setValueAtTime(0.0001, now);
  g.gain.exponentialRampToValueAtTime(0.05, now + 0.001);
  g.gain.exponentialRampToValueAtTime(0.00001, now + 0.08);
  o.start(now);
  o.stop(now + 0.09);
}

// ---------------- sidebar toggle ----------------
const btnToggle = document.getElementById('btnToggle');
const sidebar = document.getElementById('sidebar');
const main = document.getElementById('main');

if (btnToggle && sidebar) {
  btnToggle.addEventListener('click', (e) => {
    const isOpen = sidebar.getAttribute('aria-hidden') === 'false';
    sidebar.setAttribute('aria-hidden', String(!isOpen));
    if (!isOpen) sidebar.setAttribute('aria-hidden','false');
    else sidebar.setAttribute('aria-hidden','true');
    playClick();
  });
  // close sidebar when clicking a nav link (mobile)
  document.addEventListener('click', (ev) => {
    if (ev.target.matches('.sidebar nav a') && window.innerWidth < 860) {
      sidebar.setAttribute('aria-hidden','true');
    }
  });
  // set initial state hidden
  sidebar.setAttribute('aria-hidden','true');
}

// ---------------- provinces data + inject accordion into index preview ----------------
const RDC_DATA = {
  "Kinshasa":["Gombe","Funa","Lukunga","Tshangu","Mont-Amba","Selembao"],
  "Kongo-Central":["Matadi","Boma","Muanda","Mbanza-Ngungu","Songololo","Seke-Banza","Luozi"],
  "Kwango":["Kenge","Popokabaka","Kasongo-Lunda","Feshi","Kahemba"],
  "Kwilu":["Kikwit","Gungu","Idiofa","Bagata","Bulungu"],
  "Mai-Ndombe":["Inongo","Kutu","Kiri","Mushie","Bolobo","Kikongo"],
  "Tshuapa":["Boende","Befale","Bosondjo","Ikela","Djolu","Monkoto"],
  "Mongala":["Lisala","Bumba","Bongandanga"],
  "Nord-Ubangi":["Gbadolite","Mobayi-Mbongo","Yakoma","Businga"],
  "Sud-Ubangi":["Gemena","Budjala","Kungu","Zongo"],
  "Équateur":["Mbandaka","Basankusu","Bikoro","Bolomba","Lukolela"],
  "Nord-Kivu":["Goma","Beni","Lubero","Masisi","Walikale","Rutshuru"],
  "Sud-Kivu":["Bukavu","Uvira","Fizi","Walungu","Kalehe"],
  "Maniema":["Kindu","Kasongo","Kabambare","Pangi","Lubutu"],
  "Tanganyika":["Kalemie","Nyunzu","Kabalo","Manono","Kongolo"],
  "Haut-Lomami":["Kamina","Kaniama","Malemba-Nkulu","Bukama"],
  "Lomami":["Kabinda","Ngandajika","Luilu","Lubao"],
  "Sankuru":["Lusambo","Lodja","Kole","Lubefu","Katako-Kombe"],
  "Haut-Katanga":["Lubumbashi","Likasi","Kipushi","Kambove","Sakania","Kasenga"],
  "Lualaba":["Kolwezi","Mutshatsha","Lubudi","Sandoa"],
  "Haut-Uélé":["Isiro","Rungu","Dungu","Watsa","Niangara"],
  "Bas-Uélé":["Buta","Aketi","Bondo","Ango","Poko"],
  "Ituri":["Bunia","Irumu","Aru","Mahagi","Mambasa","Djugu"],
  "Tshopo":["Kisangani","Banalia","Bafwasende","Opala","Isangi"],
  "Kasaï":["Tshikapa","Luebo","Mweka","Kamonia"],
  "Kasaï-Central":["Kananga","Demba","Luiza","Dibaya"],
  "Kasaï-Oriental":["Mbuji-Mayi","Kabeya-Kamwanga","Lupatapata","Tshilenge"]
};

// function to build accordion in a container id (if exists)
function buildAccordion(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  Object.keys(RDC_DATA).forEach(province => {
    const block = document.createElement('div');
    block.className = 'province';
    const title = document.createElement('div');
    title.className = 'province-title';
    title.innerHTML = `<span>${province}</span><span class="chev">▶</span>`;
    const territories = document.createElement('div');
    territories.className = 'territories';
    const ul = document.createElement('ul');
    RDC_DATA[province].forEach(t => {
      const li = document.createElement('li');
      li.textContent = t;
      ul.appendChild(li);
    });
    territories.appendChild(ul);
    block.appendChild(title);
    block.appendChild(territories);
    container.appendChild(block);

    // click to toggle
    title.addEventListener('click', (e) => {
      const isOpen = block.classList.contains('open');
      // close other open ones (single-open behavior)
      document.querySelectorAll('.province.open').forEach(p => {
        if (p !== block) {
          p.classList.remove('open');
          const terr = p.querySelector('.territories');
          if (terr) { terr.classList.remove('open'); terr.style.maxHeight = null; }
        }
      });
      if (!isOpen) {
        block.classList.add('open');
        territories.classList.add('open');
        territories.style.maxHeight = territories.scrollHeight + 'px';
      } else {
        block.classList.remove('open');
        territories.classList.remove('open');
        territories.style.maxHeight = null;
      }
      playClick();
    });
  });
}

// build accordion on index preview if present
document.addEventListener('DOMContentLoaded', () => {
  buildAccordion('accordionIndex');
});
