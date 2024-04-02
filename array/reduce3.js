Array.prototype.reduce = function (callback, valorInicial) {
  const indiceInical = valorInicial ? 0 : 1;
  let acumulator = valorInicial || this[0];
  for (let i = indiceInical; i < this.length; i++) {
    acumulator = callback(acumulator, this[i], i, this);
  }
  return acumulator;
};

const soma = (total, valor) => total + valor;
const nums = [1, 2, 3, 4, 5, 6];
console.log(nums.reduce(soma, 21));
