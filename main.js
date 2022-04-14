class Usuario{
    constructor(nombre,apellido,libros,mascotas){
        this.nombre = nombre
        this.apellido=apellido
        this.libros = libros
        this.mascotas = mascotas
    }
    getFullName(){
        return `${this.nombre} ${this.apellido}`;
    }
    addMascota(name){
        this.mascotas.push(name);
    }
    countMascotas(){
        return this.mascotas.length;
    }
    addBokk(name,autor){
        this.libros.push({nombre:name,autor:autor});
    }
    getBookNames(){
        const nameBook = this.libros.map(book=>book.nombre);
        return nameBook;
    }
}

const usuario = new  Usuario('Leandro','Wagner',[],[]);

console.log(usuario.getFullName());
usuario.addMascota('pajaro');
usuario.addMascota('gato');
console.log(usuario.countMascotas());
usuario.addBokk('El Alquimista','Paulo Coelho');
usuario.addBokk('Martin Fierro','Jose Hernndez');
console.log(usuario.getBookNames());


