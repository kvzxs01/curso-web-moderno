const moduloA = require("../../moduloA");
console.log(moduloA.ola);

const legal = require("./pastaC");
console.log(legal);

const http = require("http");
http
  .createServer((req, res) => {
    res.write("Bom dia!");
    res.end();
  })
  .listen(4948);
