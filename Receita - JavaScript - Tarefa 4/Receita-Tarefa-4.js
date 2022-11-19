let cervejas = [
  "Camisa",
  "Camiseta",
  "Calça",
  "Short",
  "Meia",
  "Cueca",
  "Calcinha",
];

//function carregar(){

const carregarDiv = (cervs) => {
  const div = document.getElementById("meu amor");

  const cervejasHtml = cervs.map(
    item => `<table><tr><td>${item}</td></tr></table>`
  );

  div.innerHTML = `${cervejasHtml.join("\n")}`;
};

let botao = document.getElementById("botaoCarregar");
botao.addEventListener("click", () => carregarDiv(cervejas));

let sortBtn = document.getElementById("sortBtn");
sortBtn.addEventListener("click", () => carregarDiv(cervejas.sort()));

let randomBtn = document.getElementById("randonBtn");
randomBtn.addEventListener("click", () =>
  carregarDiv(cervejas.sort(() => Math.random() - 0.5))
);
