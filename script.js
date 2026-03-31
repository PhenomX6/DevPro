// Barra de progresso de leitura
window.onscroll = function () {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("progress-bar").style.width = scrolled + "%";

  // Header fixo com sombra ao rolar
  const header = document.getElementById("header");
  if (winScroll > 50) {
    header.style.boxShadow = "0 10px 30px rgba(0,0,0,0.5)";
  } else {
    header.style.boxShadow = "none";
  }
};

// FAQ Accordion
document.querySelectorAll(".accordion-header").forEach((button) => {
  button.addEventListener("click", () => {
    const accordionItem = button.parentElement;
    const isOpen = accordionItem.classList.contains("active");

    // Fecha todos antes de abrir o clicado
    document.querySelectorAll(".accordion-item").forEach((item) => {
      item.classList.remove("active");
      item.querySelector(".accordion-content").style.display = "none";
    });

    if (!isOpen) {
      accordionItem.classList.add("active");
      accordionItem.querySelector(".accordion-content").style.display = "block";
    }
  });
});

// LÓGICA DO CARROSSEL DE FEEDBACKS
const track = document.getElementById("track");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const cards = document.querySelectorAll(".feedback-card");
let currentIndex = 0;

function updateCarousel() {
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % cards.length;
  updateCarousel();
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + cards.length) % cards.length;
  updateCarousel();
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
