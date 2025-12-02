/**
 * Script Principal - Sanrio Landing Page
 * Responsável pela renderização de dados, interatividade e troca de tema.
 */

// 1. Dados dos Personagens (Simulando uma resposta de API JSON)
const sanrioCharacters = [
    {
        id: 1,
        name: "Hello Kitty",
        description: "A gatinha mais amada do mundo. Gentil, fofa e adora fazer tortas de maçã.",
        color: "#ff5e78",
        // Caminho relativo a partir do index.html (onde o script roda)
        image: "assets/img/hello-kitty.jpg" 
    },
    {
        id: 2,
        name: "My Melody",
        description: "Honesta e de boa natureza. Adora assar biscoitos com sua mãe.",
        color: "#ff9eb5",
        image: "assets/img/my-melody.jpg"
    },
    {
        id: 3,
        name: "Kuromi",
        description: "A rival rebelde da My Melody. Parece durona, mas é muito feminina por dentro.",
        color: "#b983ff",
        image: "assets/img/kuromi.jpeg"
    },
    {
        id: 4,
        name: "Cinnamoroll",
        description: "Um cachorrinho gordinho com orelhas compridas que o permitem voar.",
        color: "#8ac6d1",
        image: "assets/img/cinnamoroll.jpg"
    }
];

// 2. Funções de Utilidade (Clean Code)

/**
 * Cria o HTML de um card de personagem.
 * @param {Object} char - Objeto com dados do personagem.
 * @returns {string} String HTML do card.
 */
function createCharacterCard(char) {
    return `
        <article class="card" style="border-top: 4px solid ${char.color}">
            <img src="${char.image}" alt="${char.name}" class="card__img" loading="lazy">
            <h3 class="card__name" style="color: ${char.color}">${char.name}</h3>
            <p class="card__desc">${char.description}</p>
        </article>
    `;
}

/**
 * Renderiza os personagens no Grid.
 */
function renderCharacters() {
    const grid = document.getElementById('character-grid');
    if (!grid) return;

    // Uso de map e join para criar o HTML de forma eficiente
    grid.innerHTML = sanrioCharacters.map(createCharacterCard).join('');
}

/**
 * Gerencia o Tema Escuro (Dark Mode).
 */
function setupThemeToggle() {
    const toggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Verifica preferência salva
    const savedTheme = localStorage.getItem('sanrio-theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        toggleBtn.textContent = '☀️ Modo Claro';
    }

    toggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const isDark = body.classList.contains('dark-mode');
        
        // Atualiza texto e salva preferência
        toggleBtn.textContent = isDark ? '☀️ Modo Claro' : '🌙 Modo Noturno';
        localStorage.setItem('sanrio-theme', isDark ? 'dark' : 'light');
    });
}

/**
 * Animação de Scroll (Intersection Observer).
 */
function setupScrollAnimation() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        // Estado inicial para animação
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });
}

// 3. Inicialização
document.addEventListener('DOMContentLoaded', () => {
    renderCharacters();
    setupThemeToggle();
    
    // Pequeno delay para garantir que os elementos foram renderizados antes de observar
    setTimeout(setupScrollAnimation, 100);

    // Handler do formulário de newsletter
    const form = document.getElementById('newsletter-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Obrigado por se inscrever! 💖');
            form.reset();
        });
    }
});