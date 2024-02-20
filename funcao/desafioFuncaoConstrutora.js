class pessoa {
  constructor(nome) {
    this.nome = nome;
  }
  falar() {
    console.log(`meu nome é ${this.nome}`);
  }
}

const p1 = new pessoa("joão");
p1.falar();

//resposta

function Pessoa(nome) {
  this.nome = nome;

  this.falar = function () {
    console.log(`meu nome é ${this.nome}`);
  };
}

const p2 = new Pessoa("joão");
p2.falar();
