function carregarDiv(){
    let div = document.getElementById("meu amor");
    div.innerHTML = `<h1>Guinness</h1>`;
}


function toggleEstado() {
    let div = document.getElementById("divAleatoria");
    div.innerHTML = `<h1>Guinness</h1>`;
    if (div.style.opacity == 1) {
        setTimeout(function(){ 
            div.style.opacity = 0;
        },500);
    } else {
        setTimeout(function(){
            div.style.opacity = 1;
        },500);
    }
}

let botao = document.getElementById("botaoCarregar");
botao.addEventListener("click", toggleEstado);
