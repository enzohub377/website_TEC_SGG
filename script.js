const themeToggleBtn = document.getElementById('themeToggle');

const themeSalved = localStorage.getItem('theme');
if (themeSalved === 'light') {
  document.body.classList.add('light-theme');
}

themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');

  if (document.body.classList.contains('light-theme')) {
    localStorage.setItem('theme', 'light');
  } else {
    localStorage.setItem('theme', 'dark');
  }
});

const featuredImage = document.getElementById('featured-image');

const imgOriginal = 'assets/galaxy-watch-new.svg';
const imgPrata = 'assets/galaxy-watch-silver.svg';
const imgGrafite = 'assets/galaxy-watch-graphite.svg';

let imageFixa = null;
let corEscolhidaAtivo = null;

const fundoCor = document.getElementById('colorPicker');
const silverOption = document.getElementById('EscolhaPrata');
const graphiteOption = document.getElementById('EscolhaGrafite');

const fundoOriginal = 'transparent';
const corPrata = '#c9cccc';
const corGrafite = '#5b6166';

function trocarTransition(element, src) {
  element.style.opacity = 0;
  element.style.transform = 'scale(0.95)';

  setTimeout(() => {
    element.src = src;
    element.style.opacity = 1;
    element.style.transform = 'scale(1)';
  }, 250);
}

function desativarSelecao() {
  imageFixa = null;

  if (corEscolhidaAtivo) {
    corEscolhidaAtivo.classList.remove('active');
    corEscolhidaAtivo = null;
  }

  trocarTransition(featuredImage, imgOriginal);
  esconderLabel();
  if (fundoCor) fundoCor.style.backgroundColor = fundoOriginal;
}

function ativarCorEscolhida(elemento, corFundo) {
  if (corEscolhidaAtivo) {
    corEscolhidaAtivo.classList.remove('active');
  }

  elemento.classList.add('active');
  corEscolhidaAtivo = elemento;

  fundoCor.style.backgroundColor = corFundo;
}

silverOption.addEventListener('click', () => {
  if (corEscolhidaAtivo === silverOption) {
    desativarSelecao();
  } else {
    imageFixa = imgPrata;
    trocarTransition(featuredImage, imageFixa);
    ativarCorEscolhida(silverOption, corPrata);
    mostrarLabel('Prata');
  }
});

graphiteOption.addEventListener('click', () => {
  if (corEscolhidaAtivo === graphiteOption) {
    desativarSelecao();
  } else {
    imageFixa = imgGrafite;
    trocarTransition(featuredImage, imageFixa);
    ativarCorEscolhida(graphiteOption, corGrafite);
    mostrarLabel('Grafite');
  }
});

const labelCor = document.createElement('span');
labelCor.classList.add('color-label');

labelCor.style.position = 'absolute';
labelCor.style.fontSize = '18px';
labelCor.style.top = '-57.5px';
labelCor.style.left = '50%';
labelCor.style.transform = 'translateX(-50%)';
labelCor.style.pointerEvents = 'none';
labelCor.style.color = 'white';
labelCor.style.border = '1px solid #5b6166';
labelCor.style.padding = '3px 8px';
labelCor.style.borderRadius = '10px';
labelCor.style.backdropFilter = 'blur(10px)';
labelCor.style.opacity = '0';
labelCor.style.visibility = 'hidden';
labelCor.style.transition = 'opacity 0.3s ease, visibility 0.3s ease';

if (fundoCor) {
  fundoCor.appendChild(labelCor);
}

function mostrarLabel(texto) {
  labelCor.textContent = texto;
  labelCor.style.visibility = 'visible';
  labelCor.style.opacity = '1';
}

function esconderLabel() {
  labelCor.style.opacity = '0';
  labelCor.style.visibility = 'hidden';
}

silverOption.addEventListener('mouseover', () => {
  if (!imageFixa) trocarTransition(featuredImage, imgPrata);
});

graphiteOption.addEventListener('mouseover', () => {
  if (!imageFixa) trocarTransition(featuredImage, imgGrafite);
});

silverOption.addEventListener('mouseout', () => {
  if (!imageFixa) trocarTransition(featuredImage, imgOriginal);
});

graphiteOption.addEventListener('mouseout', () => {
  if (!imageFixa) trocarTransition(featuredImage, imgOriginal);
});

const fundoPrata = silverOption;
const fundoGrafite = graphiteOption;

if (fundoCor && fundoPrata && fundoGrafite) {
  fundoPrata.addEventListener('mouseover', () => {
    fundoCor.style.backgroundColor = corPrata;
    fundoCor.style.transition = 'background-color .5s ease';
  });

  fundoPrata.addEventListener('mouseout', () => {
    if (!corEscolhidaAtivo) {
      fundoCor.style.background = fundoOriginal;
      fundoCor.style.transition = 'background-color .5s ease';
    } else {
      if (corEscolhidaAtivo === silverOption)
        fundoCor.style.backgroundColor = corPrata;
      if (corEscolhidaAtivo === graphiteOption)
        fundoCor.style.backgroundColor = corGrafite;
    }
  });

  fundoGrafite.addEventListener('mouseover', () => {
    fundoCor.style.backgroundColor = corGrafite;
    fundoCor.style.transition = 'background-color .5s ease';
  });

  fundoGrafite.addEventListener('mouseout', () => {
    if (!corEscolhidaAtivo) {
      fundoCor.style.background = fundoOriginal;
      fundoCor.style.transition = 'background-color .5s ease';
    } else {
      if (corEscolhidaAtivo === silverOption)
        fundoCor.style.backgroundColor = corPrata;
      if (corEscolhidaAtivo === graphiteOption)
        fundoCor.style.backgroundColor = corGrafite;
    }
  });
}

// Responsividade Mobile
const menuBurger = document.querySelector('.menu-burger');
const nav = document.querySelector('nav');
const navMenu = document.querySelector('#navMenu');

menuBurger.addEventListener('click', () => {
  menuBurger.classList.toggle('active');
  nav.classList.toggle('active');
  navMenu.classList.toggle('active');
});

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    menuBurger.classList.remove('active');
    nav.classList.remove('active');
    navMenu.classList.remove('active');
  });
});
