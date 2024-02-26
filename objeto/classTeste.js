class Carro {
  constructor(marca, modelo, valor, velocidadeMax) {
    this.marca = marca;
    this.modelo = modelo;
    this.valor = valor;
    this.velocidadeMax = velocidadeMax;
    this.falarVelocidade = function () {
      console.log(`velocidade maxima: ${this.velocidadeMax}`);
    };
  }
}

const toyotaEtios = new Carro("Toyota", "Etios", "35000", "210km/h");
toyotaEtios.falarVelocidade = "210km/h";
console.log(toyotaEtios);
