const dicionario = {
  algoritmo: "Passo a passo para resolver determinado problema.",
  array: "É uma estrutura de dados que é capaz de armazenar uma coleção de elementos, esses podem ser endereçados individualmente.",
  branch: "Ramificações de um repositório.",
  dev: "Abreviação da palavra em inglês developer, destinada a desenvolvedor ou programador",
  javascript: "Linguagem de programação usada na web.",
};

document.getElementById("buscar").addEventListener("click", function() {
  const palavra = document.getElementById("inputPalavra").value.toLowerCase();
  const resultado = document.getElementById("resultado");

  if (dicionario[palavra]) {
    resultado.innerHTML = `<strong>${palavra}</strong>: ${dicionario[palavra]}`;
  } else {
    resultado.innerHTML = "Palavra não encontrada.";
  }
});
