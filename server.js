const express = require('express');
const app = express();
const PORT = 8080;
const clase = require('./main.js'); //importar clase Contenedor
const contenedor = new clase.Contenedor('./productos.txt');  //utilizar clase Contenedor

app.listen(PORT);  // escuchar en el puerto 8080 
console.log(`Server on port ${PORT} ...`);


app.get('/', (req, res) => {  //mostrar mensaje de bienvenida al servidor
    res.send('<h1>Mi primer servidor</h1>');
})

app.get('/productos', async (req, res) => {  //mostrar arrays de productos disponibles
    const data = await contenedor.getAll()
    res.send(data);
});

app.get('/productoRandom', async (req, res) => {  //mostrar un producto al azar
    let data = await contenedor.getAll();
    let dataRandom = data[Math.floor(Math.random() * data.length)]; //elegir el producto al azar del array
    res.send(dataRandom);
})


