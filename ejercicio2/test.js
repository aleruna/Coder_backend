const Contenedor = require("./contenedor.js");

/*objeto a guardar*/

const objEscuadra = {
  title: "Escuadra",
  price: 123.45,
  thumbnail:
    "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
};

const objCalculadora = {
  title: "Calculadora",
  price: 234.56,
  thumbnail:
    "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
};

const objGlobo = {
  title: "Globo Terráqueo",
  price: 345.67,
  thumbnail:
    "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
};

const contenedor = new Contenedor("./productos.txt");

(async function () {
  // veo todo los objetos
  var productos = await contenedor.getAll();
  console.log(productos);

  // Guardo objeto
  var obj_1 = contenedor.save(objEscuadra);
  var obj_2 = contenedor.save(objCalculadora);
  var obj_3 = contenedor.save(objGlobo);

  console.log(obj_1);
  console.log(obj_2);
  console.log(obj_3);

  // veo si funciona
  console.log(productos);
})();
