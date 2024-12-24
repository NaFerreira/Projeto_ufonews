const hamMenu = document.querySelector('.ham-menu');
const navMenu = document.querySelector('.nav__menu');
const navLinks = document.querySelectorAll('.nav__menu a'); // Seleciona todos os links dentro do menu

// Abrir e fechar o menu ao clicar no hambúrguer
hamMenu.addEventListener('click', () => {
    if (navMenu.classList.contains('active')) {
        // Fechar o menu
        navMenu.classList.remove('active');
        navMenu.classList.add('closing');

        // Remover a classe "closing" após a animação
        setTimeout(() => {
            navMenu.classList.remove('closing');
        }, 800); // Tempo da animação em ms (igual ao do CSS)
    } else {
        // Abrir o menu
        navMenu.classList.add('active');
    }

    // Alternar o botão hambúrguer para "X"
    hamMenu.classList.toggle('active');
});

// Fechar o menu ao clicar em um link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamMenu.classList.remove('active'); // Volta o ícone do hambúrguer ao estado inicial
    });
});