function soBoaNoticia(nota) {
  if (nota >= 7) {
    console.log("aprovado com: ", nota);
  }
}

soBoaNoticia(7.5);
soBoaNoticia(6.1);

function seForVerdadeEuFalo(valor) {
  if (valor) {
    console.log("é verdade...", valor);
  }
}

seForVerdadeEuFalo("");
seForVerdadeEuFalo(null);
seForVerdadeEuFalo(undefined);
seForVerdadeEuFalo();
seForVerdadeEuFalo(-1);
seForVerdadeEuFalo(0);
seForVerdadeEuFalo([]);
seForVerdadeEuFalo(NaN);
seForVerdadeEuFalo({});
seForVerdadeEuFalo("?");
