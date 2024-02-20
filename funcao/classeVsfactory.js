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

const criarPessoa = (nome) => {
  return {
    falar: () => console.log(`meu nome é ${nome}`),
  };
};

const p2 = criarPessoa("joão");
p2.falar();
