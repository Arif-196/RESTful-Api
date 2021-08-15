import { Sequelize } from "sequelize";

import db from "../config/database.js";
// import Product from "./Product.js";
// import User from "../models/Users.js"

const { DataTypes } = Sequelize;

const Cart = db.define('Cart', {
    cart_id :{
        type: DataTypes.NUMBER,
        autoIncrement: true,
        primaryKey: true
    },
    users_id:{
        type: DataTypes.NUMBER

    },
  

    quantity :{ 
        type: DataTypes.NUMBER
    },
    totalPrice :{
        type : DataTypes.DOUBLE
    },
    cartAdd :{
        type:DataTypes.DATE
    },
    createdAt :{
        type:DataTypes.DATE
    },
    updatedAt :{
        type:DataTypes.DATE
    }
},{
    tableName: 'Cart',
    
});
Cart.associate = (models) => {
    Cart.belongsTo(models.User ,{
      foreignKey: {
        name: 'users_id',
        allowNull: false
      },
      as: 'Cart'
    });
  };


Cart.associate = (models) => {
    console.log(models);
    Cart.hasMany(models.Product, {
      foreignKey: "cart_id",
      as: 'Cart'
    });
  };


export default Cart;