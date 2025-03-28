// Animação suave do scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Animação de fade-in para os elementos quando aparecem na tela
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      // Adiciona delay para cada elemento filho
      const children = entry.target.children;
      Array.from(children).forEach((child, index) => {
        child.style.transitionDelay = `${index * 0.1}s`;
        child.classList.add("visible");
      });
    }
  });
}, observerOptions);

document.querySelectorAll("section").forEach((section) => {
  observer.observe(section);
});

// Menu mobile melhorado
const navLinks = document.querySelector(".nav-links");
const menuButton = document.createElement("button");
menuButton.classList.add("menu-button");
menuButton.innerHTML = '<i class="fas fa-bars"></i>';
document.querySelector("nav").appendChild(menuButton);

menuButton.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuButton.innerHTML = navLinks.classList.contains("active")
    ? '<i class="fas fa-times"></i>'
    : '<i class="fas fa-bars"></i>';
});

// Fecha o menu ao clicar em um link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuButton.innerHTML = '<i class="fas fa-bars"></i>';
  });
});

// Animação de digitação no hero
const heroText = document.querySelector(".hero-content p");
const text = heroText.textContent;
heroText.textContent = "";
let i = 0;

function typeWriter() {
  if (i < text.length) {
    heroText.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}

// Inicia a animação de digitação quando a página carrega
document.addEventListener("DOMContentLoaded", () => {
  typeWriter();

  // Adiciona classe fade-in aos elementos quando aparecem na tela
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    section.classList.add("fade-in");
  });
});

// Efeito parallax suave no hero
window.addEventListener("scroll", () => {
  const hero = document.querySelector("#hero");
  const scrolled = window.pageYOffset;
  hero.style.backgroundPositionY = scrolled * 0.5 + "px";
});

// Carrossel de imagens
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".projeto-card");

  cards.forEach((card) => {
    const containers = card.querySelectorAll(".imagem-container");
    console.log("Número de imagens encontradas:", containers.length);

    // Só adiciona controles se houver mais de uma imagem
    if (containers.length > 1) {
      const dots = card.querySelectorAll(".carousel-dot");
      const prevBtn = card.querySelector(".carousel-arrow.prev");
      const nextBtn = card.querySelector(".carousel-arrow.next");
      let currentIndex = 0;

      // Mostra a primeira imagem
      containers[0].style.display = "block";

      function showImage(index) {
        console.log("Mostrando imagem:", index);
        // Esconde todas as imagens
        containers.forEach((container) => {
          container.style.display = "none";
        });

        // Remove active de todas as bolinhas
        dots.forEach((dot) => {
          dot.classList.remove("active");
        });

        // Mostra a imagem atual
        containers[index].style.display = "block";
        // Ativa a bolinha atual
        dots[index].classList.add("active");
      }

      function nextImage() {
        currentIndex = (currentIndex + 1) % containers.length;
        console.log("Próxima imagem:", currentIndex);
        showImage(currentIndex);
      }

      function prevImage() {
        currentIndex =
          (currentIndex - 1 + containers.length) % containers.length;
        console.log("Imagem anterior:", currentIndex);
        showImage(currentIndex);
      }

      // Event Listeners para os botões
      if (prevBtn) {
        prevBtn.onclick = (e) => {
          e.preventDefault();
          e.stopPropagation();
          prevImage();
        };
      }

      if (nextBtn) {
        nextBtn.onclick = (e) => {
          e.preventDefault();
          e.stopPropagation();
          nextImage();
        };
      }

      // Event Listeners para as bolinhas
      dots.forEach((dot, index) => {
        dot.onclick = (e) => {
          e.preventDefault();
          e.stopPropagation();
          currentIndex = index;
          showImage(currentIndex);
        };
      });
    } else {
      // Se só tem uma imagem, mostra ela diretamente
      containers[0].style.display = "block";
    }
  });
});

// Carrossel de experiências
document.addEventListener("DOMContentLoaded", () => {
  const experienciaCards = document.querySelectorAll(".experiencia-carousel");

  experienciaCards.forEach((card) => {
    const containers = card.querySelectorAll(".experiencia-container");
    const dots = card.querySelectorAll(".carousel-dot");
    const prevBtn = card.querySelector(".carousel-arrow.prev");
    const nextBtn = card.querySelector(".carousel-arrow.next");
    let currentIndex = 0;

    function showExperiencia(index) {
      // Esconde todas as experiências
      containers.forEach((container) => {
        container.style.display = "none";
      });

      // Remove active de todas as bolinhas
      dots.forEach((dot) => {
        dot.classList.remove("active");
      });

      // Mostra a experiência atual
      containers[index].style.display = "block";
      // Ativa a bolinha atual
      dots[index].classList.add("active");
    }

    function nextExperiencia() {
      currentIndex = (currentIndex + 1) % containers.length;
      showExperiencia(currentIndex);
    }

    function prevExperiencia() {
      currentIndex = (currentIndex - 1 + containers.length) % containers.length;
      showExperiencia(currentIndex);
    }

    // Event Listeners para os botões
    if (prevBtn) {
      prevBtn.onclick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        prevExperiencia();
      };
    }

    if (nextBtn) {
      nextBtn.onclick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        nextExperiencia();
      };
    }

    // Event Listeners para as bolinhas
    dots.forEach((dot, index) => {
      dot.onclick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        currentIndex = index;
        showExperiencia(currentIndex);
      };
    });
  });
});
