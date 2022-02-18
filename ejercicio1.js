class Usuario {
  constructor(nombre, apellido, libros, mascotas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
  }
  getFullName() {
    console.log(`Gracias ${this.nombre} ${this.apellido} por ingresar`);
  }
  addMascota(mascota) {
    this.mascotas.push(mascota);
    console.log("Fue agregada " + mascota + " a la base");
    console.log(this.mascotas);
  }
  countMascotas() {
    let contar = this.mascotas.length;
    console.log(contar);
  }

  addBook(nombre, autor) {
    var diccionario = { nombre, autor };
    this.libros.push(diccionario);
  }
  getBookNames() {
    const indexed = this.libros.map((libros) => libros.nombre);
    console.log(indexed);
  }
}

console.log("Alejandra Elisei");

const usuario = new Usuario(
  "dino",
  "saurio",
  [
    { nombre: "bla", autor: "blade" },
    { nombre: "ro", autor: "sa" },
  ],
  ["lagarto", "iguana"]
);
usuario.getFullName();
usuario.addMascota("sapo");
usuario.addBook("mar", "costa");
usuario.getBookNames();
