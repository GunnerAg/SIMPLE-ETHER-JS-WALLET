/*jshint strict:false */

(function () {
  "use strict";
  // this function is strict...
})();

// Setting up our app requirements

const express = require("express");
const app = express();
const Server = require("http").Server;
const server = new Server(app);
const path = require("path");
const port = 5000;

// Setting up our port
function log (){
  console.log(
    "Este ejecutable esta usando ether-js, en concreto el metodo createRandom que se describe aqui : https://docs.ethers.io/v5/api/signer/#Wallet-createRandom"
  );

  console.log(
    "Para acceder al resultado de la ejecuccion abre este link en tu navegador: http:/localhost:5000"
  );

  console.log(
    "Para ver el codigo en el que se basa este ejecutable puedes acceder al siguiente repositorio. "
  );
}

server.listen(port, () => log());


app.use("/", express.static(getDir() + "/views"));
/* A middleware that can be used to enable CORS with various options. */

app.get("/", function (req, res) {
  res.sendFile(getDir() + "/views/index.html");
});

// Using a function to set default app path
function getDir() {
  if (process.pkg) {
    return path.resolve(process.execPath + "/..");
  } else {
    return path.join(require.main ? require.main.path : process.cwd());
  }
}


