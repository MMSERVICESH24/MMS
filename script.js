// --- Gestion du menu latéral ---
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");
const clickSound = document.getElementById("clickSound");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    sidebar.classList.add("open");
    if (clickSound) clickSound.play();
  });
}

if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("open");
    if (clickSound) clickSound.play();
  });
}

// --- Gestion des provinces + territoires ---
const provincesContainer = document.getElementById("provinceList");

if (provincesContainer) {
  const provinces = {
    "Kinshasa": ["Gombe", "Lemba", "Ngaliema", "Limete"],
    "Kongo-Central": ["Matadi", "Boma", "Mbanza-Ngungu"],
    "Kwango": ["Kenge", "Popokabaka", "Kasongo-Lunda"],
    "Kwilu": ["Kikwit", "Idiofa", "Gungu"],
    "Mai-Ndombe": ["Inongo", "Kiri", "Oshwe"],
    "Equateur": ["Mbandaka", "Bikoro", "Basankusu"],
    "Mongala": ["Lisala", "Bumba", "Bongandanga"],
    "Nord-Ubangi": ["Gbadolite", "Yakoma", "Bosobolo"],
    "Sud-Ubangi": ["Gemena", "Zongo", "Budjala"],
    "Tshuapa": ["Boende", "Befale", "Djolu"],
    "Tshopo": ["Kisangani", "Ubundu", "Opala"],
    "Bas-Uele": ["Buta", "Aketi", "Bondo"],
    "Haut-Uele": ["Isiro", "Watsa", "Rungu"],
    "Ituri": ["Bunia", "Mahagi", "Aru"],
    "Nord-Kivu": ["Goma", "Beni", "Lubero"],
    "Sud-Kivu": ["Bukavu", "Uvira", "Fizi"],
    "Maniema": ["Kindu", "Kasongo", "Pangi"],
    "Tanganyika": ["Kalemie", "Moba", "Kongolo"],
    "Haut-Lomami": ["Kamina", "Bukama", "Kaniama"],
    "Lualaba": ["Kolwezi", "Lubudi", "Mutshatsha"],
    "Haut-Katanga": ["Lubumbashi", "Likasi", "Kasumbalesa"],
    "Lomami": ["Kabinda", "Mwene-Ditu", "Lubao"],
    "Kasaï": ["Tshikapa", "Kamonia", "Dekese"],
    "Kasaï-Central": ["Kananga", "Demba", "Kazumba"],
    "Kasaï-Oriental": ["Mbuji-Mayi", "Kabeya-Kamwanga", "Lupatapata"],
    "Sankuru": ["Lusambo", "Katako-Kombe", "Lodja"]
  };

  Object.entries(provinces).forEach(([province, territoires]) => {
    const div = document.createElement("div");
    div.classList.add("province");
    div.innerHTML = `<strong>${province} »</strong>`;

    const terrDiv = document.createElement("div");
    terrDiv.classList.add("territoires");
    terrDiv.innerHTML = territoires.join(", ");

    div.appendChild(terrDiv);
    provincesContainer.appendChild(div);

    div.addEventListener("click", () => {
      div.classList.toggle("open");
      if (clickSound) clickSound.play();
    });
  });
}
