const form = document.getElementById("novoItem");
const lista = document.getElementById("lista");
const itens = JSON.parse(localStorage.getItem("itens")) || [];

itens.forEach((elemento) => {
  criaElemento(elemento);
});

form.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nome = evento.target.elements["nome"];
  const quantidade = evento.target.elements["quantidade"];

  if (nome.value.trim() === "" || quantidade.value.trim() === "") {
    alert("Por favor, preencha todos os campos");
    return;
  }

  const itemAtual = {
    nome: nome.value,
    quantidade: quantidade.value,
  };

  criaElemento(itemAtual);

  itens.push(itemAtual);

  localStorage.setItem("itens", JSON.stringify(itens));

  nome.value = "";
  quantidade.value = "";
});

function criaElemento(item) {
  const novoItem = document.createElement("li");
  novoItem.classList.add("item");

  const numeroItem = document.createElement("strong");
  numeroItem.innerHTML = item.quantidade;
  novoItem.appendChild(numeroItem);

  novoItem.innerHTML += item.nome;

  lista.appendChild(novoItem);
}

function validarFormulario() {
  const nome = document.getElementById("nome");
  const quantidade = document.getElementById("quantidade");

  if (nome.value.trim() === "" || quantidade.value.trim() === "") {
    return false;
  }

  return true;
}
