// D/R Code - Script principal

// Indica ao CSS que o JavaScript está ativo.
// Sem JavaScript, o menu fica sempre visível no celular.
document.documentElement.classList.add('js');

// ========== MENU HAMBÚRGUER ==========
const menuBotao = document.querySelector('.menu-botao');
const menu = document.querySelector('.menu');
const telaDesktop = window.matchMedia('(min-width: 60rem)');

function abrirMenu() {
    menu.classList.add('menu-aberto');
    menuBotao.setAttribute('aria-expanded', 'true');
    menuBotao.setAttribute('aria-label', 'Fechar menu');
}

function fecharMenu() {
    menu.classList.remove('menu-aberto');
    menuBotao.setAttribute('aria-expanded', 'false');
    menuBotao.setAttribute('aria-label', 'Abrir menu');
}

function menuEstaAberto() {
    return menuBotao.getAttribute('aria-expanded') === 'true';
}

// Abre ou fecha ao acionar o botão
menuBotao.addEventListener('click', function () {
    if (menuEstaAberto()) {
        fecharMenu();
    } else {
        abrirMenu();
    }
});

// Fecha ao escolher um item do menu
menu.addEventListener('click', function (evento) {
    if (evento.target.closest('a')) {
        fecharMenu();
    }
});

// Fecha com a tecla Esc e devolve o foco ao botão
document.addEventListener('keydown', function (evento) {
    if (evento.key === 'Escape' && menuEstaAberto()) {
        fecharMenu();
        menuBotao.focus();
    }
});

// Fecha ao clicar fora do cabeçalho
document.addEventListener('click', function (evento) {
    if (menuEstaAberto() && !evento.target.closest('.header')) {
        fecharMenu();
    }
});

// Fecha ao passar para a largura de desktop
telaDesktop.addEventListener('change', function (evento) {
    if (evento.matches) {
        fecharMenu();
    }
});
