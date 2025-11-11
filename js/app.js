import ESTRUTURA from './rules.js';

const mensagensChat = document.getElementById('chat-messages');
const areaOpcoes = document.getElementById('chat-options');
let estadoAtual = "inicio";

function mostrarNo(idDoNo) {
    estadoAtual = idDoNo;
    const no = ESTRUTURA[idDoNo];
    if (!no) {
        console.error(`Erro: o nó '${idDoNo}' não foi encontrado na estrutura.`);
        return;
    }
    areaOpcoes.innerHTML = '';
    const mensagemBot = document.createElement('p');
    mensagemBot.className = 'mensagem-bot'; 
    mensagemBot.textContent = no.mensagem;
    mensagensChat.appendChild(mensagemBot);

    no.opcoes.forEach(opcao => {
        const botao = document.createElement('button');
        botao.textContent = opcao.texto;
        botao.className = 'botao-opcao';
        botao.addEventListener('click', () => {
            cliqueOpcao(opcao);
        });
        areaOpcoes.appendChild(botao);
    });
    mensagensChat.scrollTop = mensagensChat.scrollHeight;
}

function cliqueOpcao(opcao) {
    const proximoNoId = opcao.proximoNo;
    areaOpcoes.innerHTML = '';

    const mensagemUsuario = document.createElement('p');
    mensagemUsuario.className = 'mensagem-usuario'; 
    mensagemUsuario.textContent = opcao.texto;
    mensagensChat.appendChild(mensagemUsuario);

    const indicadorDigitando = document.createElement('p');
    indicadorDigitando.className = 'mensagem-bot typing'; 
    indicadorDigitando.textContent = 'Digitando...';
    mensagensChat.appendChild(indicadorDigitando);

    mensagensChat.scrollTop = mensagensChat.scrollHeight;

    setTimeout(() => {
        mensagensChat.removeChild(indicadorDigitando);
        mostrarNo(proximoNoId);
    }, 1000); 
}

mostrarNo(estadoAtual);
