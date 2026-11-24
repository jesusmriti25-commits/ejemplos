const { Sequelize } = require("sequelize");
const productoModelo = require("./models/producto");

const conexion = new Sequelize("mi_proyecto", "uyivpQ8ZLsimAx3.root", "uzrpZwi41Uk4oaen", {
    host: "gateway01.us-west-2.prod.aws.tidbcloud.com",
    port: 4000,
    dialect: "mysql",
    dialectOptions: {
        ssl: {
          minVersion: 'TLSv1.2',
          rejectUnauthorized: true
        }
     } 
});

const Producto = productoModelo(conexion);

conexion.sync({ force: false })
    .then(() => {
        console.log("Conexion establecida con exito");
    })
    .catch((error) => {
        console.log("Error al conectar a la base de datos: " + error);
    });

module.exports = {
    conexion,
    Producto
};
//HOST:

//gateway01.us-west-2.prod.aws.tidbcloud.com

//PORT:4000

//USERNAME:uyivpQ8ZLsimAx3.root

//PASSWORD:uzrpZwi41Uk4oaen  uzrpZwi41Uk4oaen

//DATABASE:mi_proyecto

//CA:<CA_PATH></CA_PATH>