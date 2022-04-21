const fs = require('fs'); //importación de File System NodeJS


class Contenedor{
    constructor(fileName){     //crear clase recibiendo datos de un archivo
        this.fileName = fileName;
    }
    async save(product){   // método para agregar productos tomando en cuenta el ultimo Id ingresado
        try {
            const dataFile = await fs.promises.readFile(this.fileName,'utf-8');
            const data = JSON.parse(dataFile);
            if(data.length===0){     // si no hay datos previos toma como valor esa unica vez el 1
                data.push({id:1,...product}); 
                const newData= JSON.stringify(data); 
                await fs.promises.writeFile(this.fileName,newData);
                const dataId = data.pop();
                return dataId.id;      
            }
            let dat = data.length-1;
            data.push({id:data[dat].id +1,...product}); 
            const newData= JSON.stringify(data); 
            await fs.promises.writeFile(this.fileName,newData);
            const dataId = data.pop();
            return dataId.id;      
        } catch (error) {
            console.log('Error de datos',error)
        }
    }
    async getById(id){  //método para buscar productos por ID
        try {
            const dataFile = await fs.promises.readFile(this.fileName,'utf-8');
            const data = JSON.parse(dataFile);
            const dataObject = data.find(element=>element.id===id);
            if(dataObject){     
                return dataObject
            }
            else{
                return null
            }
        } catch (error) {
            console.log('Error de datos',error);
        }
    }
    async getAll(){  //método para obtener todos los productos
        try {
            const dataFile = await fs.promises.readFile(this.fileName,'utf-8');
            const data = JSON.parse(dataFile);
            return data
        } 
        catch (error) {
            console.log('Error de datos',error);
        }
    }
    async deleteById(id){  // método para borrar el producto con el Id ingresado
        try {
            const dataFile = await fs.promises.readFile(this.fileName,'utf-8');
            const data = JSON.parse(dataFile);
            const deleteProduct = data.filter(element=>element.id!==id);
            const newData= JSON.stringify(deleteProduct); 
            await fs.promises.writeFile(this.fileName,newData);
        } catch (error) {
            console.log('Error de datos',error);
        }
    }
    async deleteAll(){   //método para borrar todos los productos
        try {
            await fs.promises.writeFile(this.fileName,'[]');
        } catch (error) {
            console.log('Error de datos',error);   
        }
    }
}

module.exports = {Contenedor};   // exportar la clase Contenedor
