const pilotos = ["Vettel", "Alonso", "Raikkonen", "Massa"];
pilotos.pop(); //remove o ultimo array
console.log(pilotos);

pilotos.push("Verstappen");
console.log(pilotos);

pilotos.shift(); //remove o primeiro array
console.log(pilotos);

pilotos.unshift("Hamilton"); //coloca um primeiro array removido
console.log(pilotos);

//splice pode adicionar e remover elementos

//adicionar e remover
pilotos.splice(2, 0, "Bottas", "Massa");
console.log(pilotos);

//remover
pilotos.splice(3, 1); //massa quebrou dnv :(
console.log(pilotos);

const algunsPilotos1 = pilotos.slice(2); // novo array
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1, 4); //novo array
console.log(algunsPilotos2);
