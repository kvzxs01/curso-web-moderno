//pessoa -> 123 -> {...}
const pessoa = { nome: "joão" };
pessoa.nome = "predro";
console.log(pessoa);

//pessoa -> 456 -> {...}
//pessoa = {nome: "ana"}

Object.freeze(pessoa);

pessoa.nome = "Maria";
pessoa.end = "rua ABC";
delete pessoa.nome;

console.log(pessoa.nome);
console.log(pessoa);

const pessoaConstante = Object.freeze({ nome: "joão" });
pessoaConstante.nome = "Maria";
console.log(pessoaConstante);
