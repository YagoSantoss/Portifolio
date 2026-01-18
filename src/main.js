  function filtrar(categoria) {
        const cards = document.querySelectorAll('.projeto-card-bento');
        const botoes = document.querySelectorAll('.filter-btn');

        botoes.forEach(btn => {
            btn.classList.remove('active');
            if (btn.innerText.toLowerCase() === categoria || (categoria === 'todos' && btn.innerText === 'Todos')) {
                btn.classList.add('active');
            }
        });

        cards.forEach(card => {
            const categoriaCard = card.getAttribute('data-category');
            
            if (categoria === 'todos' || categoriaCard === categoria) {
                card.style.display = 'block';
                card.style.opacity = '0';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transition = 'opacity 0.3s ease';
                }, 10);
            } else {
                card.style.display = 'none';
            }
        });
}

function filtrarStack(categoria) {
    const cards = document.querySelectorAll('.stack-card');
    const botoes = document.querySelectorAll('#stacks .filter-btn');

    // Ativar botão correto
    botoes.forEach(btn => {
        btn.classList.remove('active');

        const texto = btn.innerText.toLowerCase();

        if (texto === categoria || (categoria === 'todos' && texto === 'todos')) {
            btn.classList.add('active');
        }
    });

    cards.forEach(card => {
        const categoriaCard = card.getAttribute('data-category');

        // REGRA: TODOS mostra tudo menos aprendizado
        if (categoria === 'todos') {
            if (categoriaCard === 'aprendizado') {
                esconderCard(card);
            } else {
                mostrarCard(card);
            }
        }

        // REGRA: APRENDIZADO só mostra aprendizado
        else if (categoria === 'aprendizado') {
            if (categoriaCard === 'aprendizado') {
                mostrarCard(card);
            } else {
                esconderCard(card);
            }
        }

        // REGRA NORMAL (backend, frontend, ferramentas, etc)
        else {
            if (categoriaCard === categoria) {
                mostrarCard(card);
            } else {
                esconderCard(card);
            }
        }
    });
}

function mostrarCard(card) {
    card.style.display = 'flex';
    card.style.opacity = '0';
    setTimeout(() => {
        card.style.opacity = '1';
        card.style.transition = 'opacity 0.3s ease';
    }, 10);
}

function esconderCard(card) {
    card.style.display = 'none';
}

function toggleMenu() {
    document.querySelector("nav ul").classList.toggle("active");
}

const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');
const menuLinks = document.querySelectorAll('nav ul li a');

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});