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

// ========== COPIAR E-MAIL ==========
// Botões com o atributo data-copiar copiam o texto indicado nele.
// A mensagem de resultado aparece no elemento indicado em data-feedback,
// que tem aria-live="polite" para ser anunciada pelos leitores de tela.

// Alternativa para navegadores sem a API de área de transferência
// (ou quando ela é bloqueada): copia a partir de um campo temporário.
function copiarComCampoTemporario(texto) {
    const campo = document.createElement('textarea');
    campo.value = texto;
    campo.setAttribute('readonly', '');
    campo.style.position = 'fixed';
    campo.style.top = '0';
    campo.style.left = '0';
    campo.style.opacity = '0';
    document.body.appendChild(campo);
    campo.select();
    campo.setSelectionRange(0, texto.length);

    let copiou = false;
    try {
        copiou = document.execCommand('copy');
    } catch (erro) {
        copiou = false;
    }

    document.body.removeChild(campo);
    return copiou;
}

// Retorna true somente se a cópia realmente aconteceu
async function copiarTexto(texto) {
    if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
        try {
            await navigator.clipboard.writeText(texto);
            return true;
        } catch (erro) {
            // Permissão negada ou API indisponível: tenta a alternativa abaixo
        }
    }
    return copiarComCampoTemporario(texto);
}

document.querySelectorAll('[data-copiar]').forEach(function (botao) {
    const feedback = document.getElementById(botao.dataset.feedback);
    let temporizador;

    function mostrarMensagem(texto, erro) {
        clearTimeout(temporizador);
        feedback.classList.toggle('contato-feedback-erro', erro);
        feedback.textContent = texto;
        // A mensagem de sucesso some depois de alguns segundos
        if (!erro) {
            temporizador = setTimeout(function () {
                feedback.textContent = '';
            }, 4000);
        }
    }

    botao.addEventListener('click', async function () {
        // Limpa antes, para a mensagem ser anunciada de novo a cada clique
        feedback.textContent = '';
        const copiou = await copiarTexto(botao.dataset.copiar);
        // O campo temporário pode tirar o foco do botão: devolve o foco
        botao.focus();

        if (copiou) {
            mostrarMensagem('E-mail copiado!', false);
        } else {
            mostrarMensagem('Não foi possível copiar. Selecione o endereço e copie manualmente.', true);
        }
    });
});
