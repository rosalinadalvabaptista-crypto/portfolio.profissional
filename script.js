// === MENU MOBILE ===
const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

if (btn && menu) {
  btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    menu.classList.toggle("flex");
  });
}

// === EFEITO DE MÁQUINA DE ESCREVER NO HERO ===
const heroText = document.querySelector("#hero-section h2");
const text = "Era uma vez...";
let index = 0;

function typeWriter() {
  if (index < text.length) {
    heroText.textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, 100);
  }
}

if (heroText) {
  window.addEventListener("load", () => {
    heroText.textContent = "";
    typeWriter();
  });
}

// === ROLAGEM SUAVE PARA OS LINKS DA NAVBAR ===
const navLinks = document.querySelectorAll("#menu a");

navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");
    if (href && href.startsWith("#")) {
      const targetId = href.substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    }
    if (window.innerWidth < 1280 && menu) {
      menu.classList.add("hidden");
      menu.classList.remove("flex");
    }
  });
});

// === ANIMAÇÕES DE ENTRADA PARA SEÇÕES ===
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-fade-in");
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => {
  observer.observe(section);
});

// === EFEITO HOVER PARA PROJETOS E GALERIA ===
const projectCards = document.querySelectorAll("#projects .grid > img");
const galleryItems = document.querySelectorAll("#gallery .grid > img");

function addHoverEffect(elements) {
  elements.forEach(el => {
    el.addEventListener("mouseenter", () => {
      el.style.transform = "scale(1.05)";
      el.style.boxShadow = "0 4px 8px rgba(0,0,0,0.3)";
      el.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
    });
    el.addEventListener("mouseleave", () => {
      el.style.transform = "scale(1)";
      el.style.boxShadow = "none";
    });
  });
}

addHoverEffect(projectCards);
addHoverEffect(galleryItems);
 
// === REVELAR EMAIL NA SEÇÃO LET’S TALK ===
const revealBtn = document.getElementById("reveal-email-btn");
const emailDisplay = document.getElementById("email-display");

if (revealBtn && emailDisplay) {
  revealBtn.addEventListener("click", () => {
    if (emailDisplay.classList.contains("hidden")) {
      emailDisplay.classList.remove("hidden");
      setTimeout(() => {
        emailDisplay.style.opacity = "1"; // Fade-in suave
      }, 10);
    } else {
      emailDisplay.style.opacity = "0";
      setTimeout(() => {
        emailDisplay.classList.add("hidden");
      }, 500); // Fade-out
    }
  });
}

// === REVELAR TEXTO DE AGRADECIMENTO NA SEÇÃO SHOUTOUT TO ===
const shoutoutBtn = document.getElementById("shoutout-btn");
const shoutoutText = document.getElementById("shoutout-text");

if (shoutoutBtn && shoutoutText) {
  shoutoutBtn.addEventListener("click", () => {
    if (shoutoutText.classList.contains("hidden")) {
      shoutoutText.classList.remove("hidden");
      setTimeout(() => {
        shoutoutText.style.opacity = "1"; // Fade-in suave
      }, 10);
    } else {
      shoutoutText.style.opacity = "0";
      setTimeout(() => {
        shoutoutText.classList.add("hidden");
      }, 500); // Fade-out
    }
  });
}