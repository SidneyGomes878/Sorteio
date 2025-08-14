let listaDeAmigos = [];

function exibirAmigosNaTela() {
    let listaHTML = document.getElementById('listaAmigos');

    listaHTML.innerHTML = "";
    for (let i = 0; i < listaDeAmigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = listaDeAmigos[i];
        listaHTML.appendChild(li);
    }
}

function adicionarAmigo() {
    let nomeAmigo = document.getElementById('amigo').value;
    if (nomeAmigo === '') {
        alert('Por favor, insira um nome.');
        return;
    }

    listaDeAmigos.push(nomeAmigo);
    document.getElementById('amigo').value = '';
    
    exibirAmigosNaTela(); 
}

function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert("Por favor, adicione amigos para poder sortear.");
        return; 
    }
    
    let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    let amigoSorteado = listaDeAmigos[indiceAleatorio];
    let resultadoHTML = document.getElementById('resultado');
    resultadoHTML.innerHTML = `<p>O amigo sorteado é: <span>${amigoSorteado}</span></p>`;
}