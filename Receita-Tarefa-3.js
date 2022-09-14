let cervejas = ["Guiness", "Desperados", "Becks"];

function transformar(item) {
  return `<td class="Cerveja">${item}</td>`;
}

function carregarDiv() {
  let div = document.getElementById("meu amor");
//   let cervejasHtml = [
//     `<h1>${cervejas[0]}</h1>`,
//     `<h1>${cervejas[1]}</h1>`,
//     `<h1>${cervejas[2]}</h1>`,
//   ];

  let cervejasHtml = cervejas.map(transformar);
  let orderCervejasHTML = cervejasHtml.sort(() => Math.random() - 0.5);
  div.innerHTML = `<table><tr>${cervejasHtml.join("\n")}</tr></table><div><button id="btnEmbaralhar">Embalharar</button></div>`;
  
}

let botao = document.getElementById("botaoCarregar");
let buttonEmbaralhar = document.getElementById("btnEmbaralhar");
botao.addEventListener("click", carregarDiv);
buttonEmbaralhar.addEventListener("click", carregarDiv);
