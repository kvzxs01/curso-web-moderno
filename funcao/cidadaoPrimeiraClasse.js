//funcao em 35 é first-class object (Citzens)
//migher-orden function

//criar de forma literal
function fun1() {}

// armazenar em uma variável
const fun2 = function () {};

//armazenar em um array
const array = [
  function (a, b) {
    return a + b;
  },
  fun1,
  fun2,
];

//armazenar em um atributo de objeto
const obj = {};
obj.falar = function () {
  return "opa";
};
console.log(obj.falar());

//passar função como parametro
function run(fun) {
  fun();
}

run(function () {
  console.log("executando...");
});

//uma função pode retornar/ conter uma função
function soma(a, b) {
  return function (c) {
    console.log(a + b + c);
  };
}

soma(2, 3)(4);
const cincoMais = soma(2, 3);
cincoMais(4);
