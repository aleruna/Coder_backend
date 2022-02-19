class Usuario {
  constructor(nombre, apellido, libros, mascotas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
  }

  /*getter*/
  getFullName() {
    return `Gracias ${this.nombre} ${this.apellido} por ingresar`;
  }

  addBook(nombre, autor) {
    return this.libros.push({ nombre: nombre, autor: autor });
  }

  countMascotas() {
    return this.mascotas.length;
  }

  /*setter*/
  addMascota(mascota) {
    this.mascotas.push(mascota);
  }

  getBookNames() {
    return this.libros.map((libros) => libros.nombre);
  }
}

const usuario = new Usuario("usuario1", "apellido1", [], []);

console.log(usuario.getFullName());

usuario.addMascota("sapo");
usuario.addBook("casa usher", "edgar allan poe");
usuario.addBook("el gato negro", "edgar allan poe");

console.log(usuario.getBookNames());

console.log(usuario.countMascotas());

console.log("Alejandra Elisei");
