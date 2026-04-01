window.onscroll = function () {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("progress-bar").style.width = scrolled + "%";

  const header = document.getElementById("header");
  if (winScroll > 50) {
    header.style.boxShadow = "0 10px 30px rgba(0,0,0,0.5)";
    header.style.background = "rgba(2, 6, 23, 0.95)";
  } else {
    header.style.boxShadow = "none";
    header.style.background = "rgba(2, 6, 23, 0.8)";
  }
};

// FAQ Accordion
document.querySelectorAll(".accordion-header").forEach((header) => {
  header.addEventListener("click", () => {
    const item = header.parentElement;
    const content = item.querySelector(".accordion-content");
    const isOpen = item.classList.contains("active");

    document.querySelectorAll(".accordion-item").forEach((otherItem) => {
      otherItem.classList.remove("active");
      otherItem.querySelector(".accordion-content").style.display = "none";
    });

    if (!isOpen) {
      item.classList.add("active");
      content.style.display = "block";
    }
  });
});

// Carrossel Desktop
const track = document.getElementById("track");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const cards = document.querySelectorAll(".feedback-card");
let currentIndex = 0;

function updateCarousel() {
  if (window.innerWidth > 900) {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
  }
}

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % cards.length;
  updateCarousel();
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + cards.length) % cards.length;
  updateCarousel();
});

window.addEventListener("resize", () => {
  if (window.innerWidth <= 900) {
    track.style.transform = `none`;
  } else {
    updateCarousel();
  }
});

// Mensagem de boas-vindas console "Hackerman"
const welcomeMsg = `
    ██████╗ ███████╗██╗   ██╗██████╗ ██████╗  ██████╗ 
    ██╔══██╗██╔════╝██║   ██║██╔══██╗██╔══██╗██╔═══██╗
    ██║  ██║█████╗  ██║   ██║██████╔╝██████╔╝██║   ██║
    ██║  ██║██╔══╝  ╚██╗ ██╔╝██╔═══╝ ██╔══██╗██║   ██║
    ██████╔╝███████╗ ╚████╔╝ ██║     ██║  ██║╚██████╔╝
    ╚═════╝ ╚══════╝  ╚═══╝  ╚═╝     ╚═╝  ╚═╝ ╚═════╝ 
    SISTEMA INICIALIZADO - FREELANCER DE ELITE
`;
console.log(
  `%c${welcomeMsg}`,
  "color: #38bdf8; font-family: monospace; font-weight: bold;",
);
