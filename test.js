const clase = require('./main.js');   //importar archivo de datos previos

const contenedor = new clase.Contenedor('./productos.txt'); //utilizar la case Contenedor con el nombre del archivo que se pase por parámetro

// nuevos productos
product1={
    title:'Impresoras Epson',
    price:23000,
    thumbnail:'https://http2.mlstatic.com/impresora-epson-l1110-ecotank-tinta-continua-sustituye-l310-D_NQ_NP_969552-MLM31217005158_062019-F.jpg'
}

product2={
    title:'Mercusys MW301R',
    price:1100,
    thumbnail:'https://static3.tcdn.com.br/img/img_prod/684622/roteador_wireless_mercusys_mw301r_300mbs_199_1_20190703143220.jpg'
}

// funcion prueba para probar los métodos creados en la clase Contenedor 
async function prueba(){
    // const mostrar = await contenedor.save(product1);
    // const mostrar = await contenedor.getById(1);
    // const mostrar = await contenedor.getAll();
    // await contenedor.deleteById(2);
    // await contenedor.deleteAll();

    // console.log(mostrar)
}
prueba();