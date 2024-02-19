let valor; //não inicializado
console.log(valor);

valor = null; //ausência de valor
console.log(valor);
//  console.log(valor.toString()); //ERRO!

const produto = {};
console.log(produto.preco);
console.log(produto);

produto.preco = 3.5;
console.log(produto);

produto.preco = undefined; //evite atribuir undefimed
console.log(!!produto.preco);
//delete produto.preco
console.log(produto);

produto.preco = null; // sem prec
console.log(produto.preco);
console.log(produto);
