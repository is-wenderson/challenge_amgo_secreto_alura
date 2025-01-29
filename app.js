//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let Amigos = [];

function adicionarAmigo(){
    let nomeAmigo = document.getElementById('amigo').value;
    if(nomeAmigo == ''){
        alert("Por favor, insira um nome!");
    } else {
        Amigos.push(nomeAmigo);
    }
    limparCampo();
    listarAmigos();
    limparResultado();
}

function listarAmigos(){
    let campo = document.getElementById('listaAmigos');
    campo.innerHTML = '';
    for(let i = 0; i < Amigos.length; i++){
        let li = document.createElement('li');
        li.textContent = Amigos[i];
        campo.appendChild(li);
    }
}

function limparCampo(){
    let limpar = document.getElementById('amigo');
    limpar.value = '';
}

function limparLista(){
    Amigos = [];
    listarAmigos();
}

function limparResultado(){
    let campoResultado = document.getElementById('resultado');
    campoResultado.innerHTML = '';   
}

function sortearAmigo(){
    let tamanhodalista = Amigos.length;
    if (tamanhodalista === 0) {
        alert("A lista de amigos está vazia!");
        return;
    }
    let nomeAleatorio = parseInt(Math.random() * tamanhodalista);
    let nomeSecreto = Amigos[nomeAleatorio];
    let campoResultado = document.getElementById('resultado');
    campoResultado.innerHTML = "O amigo secreto é: " + nomeSecreto;

    limparLista();
}
