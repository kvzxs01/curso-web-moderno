//closure é p escopo criado quando uma funcao é declarada
//esse escopot permite a função acessar e manipular variáveis externas à função

//contexto léxico em ação!

const x = "global";

function fora() {
  const x = "local";
  function dentro() {
    return x;
  }
  return dentro;
}

const minhaFuncao = fora();
console.log(minhaFuncao());
