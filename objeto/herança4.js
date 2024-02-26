const obj3 = {};
obj3.__proto__ = meuObjeto.prototype;
obj3.nome = "obj3";
obj3.falar();

//resumindo a loucura...
console.log(new meuObjeto().__proto__ === meuObjeto.prototype);
console.log(meuObjeto.__proto__ === Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__ === null);
