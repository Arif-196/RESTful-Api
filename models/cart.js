import { Sequelize } from "sequelize";

import db from "../config/database.js";

const { DataTypes } = Sequelize;

const cart = db.define('cart', {
    quantity :{ 
        type: DataTypes.NUMBER
    },
    totalPrice :{
        type : DataTypes.DOUBLE
    }
},{
    freezeTableName:true
});

export default cart;