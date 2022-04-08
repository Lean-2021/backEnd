class Usuario{
    constructor(nombre,apellido,libros,mascotas){
        this.nombre = nombre
        this.apellido=apellido
        this.libros = libros
        this.mascotas = mascotas
    }
    getFullName(){
        console.log(`${this.nombre} ${this.apellido}`);
    }
    addMascota(name){
        this.mascotas.push(name);
        return console.log(this.mascotas)
    }
    countMascotas(){
        console.log(this.mascotas.length);
    }
    addBokk(name,autor){
        this.libros.push({nombre:name,autor:autor});
        return console.log(this.libros);
    }
    getBookNames(){
        const nameBook = this.libros.map(book=>book.nombre);
        return console.log(nameBook);
    }
}

const usuario = new  Usuario('Leandro','Wagner',[],[]);

usuario.getFullName();
// usuario.addMascota('pajaro');
usuario.addMascota('perro');
// usuario.addMascota('gato');
usuario.countMascotas();
// usuario.addBokk('El Alquimista','Paulo Coelho');
usuario.addBokk('Martin Fierro','Jose Hernndez');
// console.log(usuario);
usuario.getBookNames();


