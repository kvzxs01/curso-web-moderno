const escola = [
  {
    nome: "turma 1",
    alunos: [
      {
        nome: "Gustavo",
        nota: 8.1,
      },
      {
        nome: "Ana",
        nota: 9.3,
      },
    ],
  },
  {
    nome: "turma 2",
    alunos: [
      {
        nome: "Rebeca",
        nota: 8.9,
      },
      {
        nome: "Roberto",
        nota: 7.3,
      },
    ],
  },
];

const getNotaDoAluno = (aluno) => aluno.nota;
const getNotaDaTurma = (turma) => turma.alunos.map(getNotaDoAluno);

const nota1 = escola.map(getNotaDaTurma);
console.log(nota1);

const nota2 = escola.flatMap(getNotaDaTurma);
console.log(nota2);
