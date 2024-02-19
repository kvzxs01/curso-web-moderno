// novo recurso do ES2015

const pessoa = {
  nome: "ana",
  idade: 5,
  endereço: {
    rua: "rua abc",
    numero: 1000,
  },
};

const { nome, idade } = pessoa;
console.log(nome, idade);

const { nome: n, idade: i } = pessoa;
console.log(n, i);
const { sobrenome, bemHumorada = true } = pessoa;
console.log(sobrenome, bemHumorada);
