const fs = require("fs");

module.exports = class Contenedor {
  constructor(filename) {
    this.filename = filename; /*path??*/
    this.productos = []; /*productos*/
    this.id = 0; /*inicio en cero para ir aumentando*/
  }

  /*LEctura del archivo*/
  async getAll() {
    try {
      let productos = await fs.promises.readFile(this.filename, "UTF-8");
      return productos;
    } catch (err) {
      console.log("No hay productos");
    }
  }

  /*Funcion de guardado*/
  async save(producto) {
    this.id++;
    producto.id = this.id;
    let item = this.productos.push(producto);
    try {
      fs.writeFile(this.filename, item);
      return producto.id;
    } catch (err) {
      console.log("Error al crear Archivo");
    }
  }
};
