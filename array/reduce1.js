const alunos = [
  { nome: "João", nota: 7.3, bolsista: false },
  { nome: "Maria", nota: 9.2, bolsista: true },
  { nome: "Pedro", nota: 9.8, bolsista: false },
  { nome: "Ana", nota: 8.7, bolsista: true },
];

console.log(alunos.map((a) => a.nota));
const resultado = alunos;
alunos.map((a) => a.nota);
alunos.reduce(function (acumulador, atual) {
  return acumulador + atual;
}, 0);

console.log(resultado);

const resultado2 = alunos;

alunos.map((a) => a.nota);

alunos.reduce((acumulador, atual) => {
  return acumulador + atual;
});

console.log(resultado2);
