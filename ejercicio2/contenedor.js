const fs = require("fs");

class Contenedor {
  constructor(filename) {
    this.filename = filename; /*path??*/
    this.data = []; /*objeto*/
  }

  /* funcion para crear el archivo */
  createfile(obj) {
    try {
      obj.id = this.maxID + 1; /*necesita verificar que sea 1 + maxid */
      this.data.push(obj);
      await fs.promises.writeFile(
        this.filename,
        this.data
      ); /* no termino de entender bien el correcto uso de await?????*/
      console.log(
        `Se agrega "${obj.title}" con "${obj.id}" a la base "${this.filename}"`
      );
      return obj.id;
    } catch (err) {
      console.log(`Error al crear Archivo`);
    }
  }
  /*verifica cual es el max id*/
  maxID() {
    arrayan = this.data;
    const ids = arr.map((arrayan) => {
      return arrayan.id;
    });
    const max = Math.max.apply(null, ids);
    return max;
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

  async save(obj) {
    try {
      if (!fs.existsSync(this.filename)) {
        return this.createFile(obj);
      } else {
        this.data = await this.getAll();
        return this.createFile(obj);
      }
    } catch (err) {
      console.log("Error");
    }
  }
}
