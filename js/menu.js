document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu');
    const navList = document.querySelector('.nav-list');
    const navLinks = document.querySelectorAll('.nav-list li a');
    const header = document.querySelector('header');

    // --- Funcionalidade do Menu Hamburger ---
    menuToggle.addEventListener('click', () => {
        navList.classList.toggle('active');
        menuToggle.classList.toggle('active');
        // Animação dos links ao abrir/fechar o menu mobile
        navLinks.forEach((link, index) => {
            if (navList.classList.contains('active')) {
                link.style.setProperty('--delay', `${index / 7 + 0.3}s`); // Define a variável CSS para o delay
                link.style.animation = 'navLinkFade 0.5s ease forwards var(--delay)';
            } else {
                link.style.animation = ''; // Remove a animação ao fechar
            }
        });
    });

    // --- Navegação Suave (Smooth Scroll) e Ativação do Link ---
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            // Esconde o menu mobile se estiver aberto
            if (navList.classList.contains('active')) {
                navList.classList.remove('active');
                menuToggle.classList.remove('active');
                 navLinks.forEach(item => item.style.animation = ''); // Limpa animação ao fechar
            }

            // Remove a classe 'active' de todos os links e adiciona ao clicado
            navLinks.forEach(item => item.classList.remove('active'));
            this.classList.add('active');

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const headerOffset = header.offsetHeight;
                const elementPosition = targetSection.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Ativar o link do menu ao rolar a página ---
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        let currentSectionId = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - header.offsetHeight;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop - 50 && pageYOffset < sectionTop + sectionHeight - 50) { // Ajuste o -50 para melhor ativação
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (currentSectionId && link.getAttribute('href').includes(currentSectionId)) {
                link.classList.add('active');
            }
        });

        // Caso esteja no topo da página e nenhuma seção foi ativada
        if (window.pageYOffset === 0) {
            document.querySelector('.nav-list li a[href="#home"]').classList.add('active');
        }
    });

    // Definir a seção 'Home' como ativa ao carregar a página
    // Isso garante que 'Home' esteja ativa se a página carregar no topo
    if (window.pageYOffset === 0) {
        document.querySelector('.nav-list li a[href="#home"]').classList.add('active');
    }
});