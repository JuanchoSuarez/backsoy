import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("basedatos_backendmovil","jose","password",{

    port: 5432,
    host: "localhost",
    dialect:"postgres",
})