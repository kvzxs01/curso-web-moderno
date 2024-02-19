const prod1 = {};
prod1.nome = "celular ultra Mega";
prod1.preço = 4998.9;
prod1["Desconto Legal"] = 0.4; // evitar atributos com espaço

console.log(prod1);

const prod2 = {
  nome: "camisa polo",
  preço: 79.9,
  obj: {
    blabla: 1,
    obj: {
      blabla: 2,
    },
  },
};

console.log(prod2);

prod2["Desconto Legal"] = 0.4; // evitar atributos com espaço
console.log(prod2);
