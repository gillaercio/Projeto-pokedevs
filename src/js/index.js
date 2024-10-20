/*
  OBJETIVO - quando clicar no pokedev da listagem temos que esconder o cartão do pokedev aberto e mostrar o cartão correspondente ao que foi selecionado na listagem:
    PASSO 1 - precisamos criar uma variável no JS para trabalhar com a listagem de pokedevs
    PASSO 2 - Identificar o evento de clique no elemento da listagem
    PASSO 3 - Remover a classe aberto só do cartão que está aberto
    PASSO 4 - Ao clicar em um pokedev da listagem pegamos o id desse pokedev para saber qual cartão abrir
    PASSO 5 - Remover a classe ativo que marca o pokedev selecionado na listagem
    PASSO 6 - Adicionar a classe ativo no pokedev selecionado na listagem
*/

const listaSelecaoPokedevs = document.querySelectorAll(".pokedev");

listaSelecaoPokedevs.forEach((pokedev) => {
  pokedev.addEventListener("click", () => {
    desativarCartaoPokedev();

    const idPokedevSelecionado = ativarCartaoPokedevSelecionado(pokedev);

    desativarPokedevNaListagem();

    ativarPokedevSelecionadoNaListagem(idPokedevSelecionado);
  });
});

function desativarCartaoPokedev() {
  const cartaoPokedevAberto = document.querySelector(".aberto");
  cartaoPokedevAberto.classList.remove("aberto");
}

function ativarCartaoPokedevSelecionado(pokedev) {
  const idPokedevSelecionado = pokedev.attributes.id.value;
  const idDoCartaoPokedevParaAbrir = "cartao-" + idPokedevSelecionado;
  const cartaoPokedevParaAbrir = document.getElementById(
    idDoCartaoPokedevParaAbrir
  );
  cartaoPokedevParaAbrir.classList.add("aberto");
  return idPokedevSelecionado;
}

function desativarPokedevNaListagem() {
  const listagemPokedevAtivo = document.querySelector(".ativo");
  listagemPokedevAtivo.classList.remove("ativo");
}

function ativarPokedevSelecionadoNaListagem(idPokedevSelecionado) {
  const listagemPokedevParaAtivar =
    document.getElementById(idPokedevSelecionado);
  listagemPokedevParaAtivar.classList.add("ativo");
}
