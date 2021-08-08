import { Sequelize } from "sequelize";

import db from "../config/database.js";
import Product from "./Product.js";

const { DataTypes } = Sequelize;

const Cart = db.define('cart', {
    cart_id :{
        type: DataTypes.NUMBER,
        autoIncrement: true,
        primaryKey: true
    },
    users_id:{
        type: DataTypes.NUMBER

    },
    products_id:{
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
    tableName: 'cart',
    
});
Cart.associate = (models) => {
    Cart.belongsTo(models.User, {
      foreignKey: {
        name: 'users_id',
        allowNull: false
      },
      as: 'cart'
    });
  };


Cart.associate = (models) => {
    console.log(models);
    Cart.hasMany(models.Product, {
      foreignKey: {
        name: 'products_id',
        allowNull: false
      },
      as: 'Cart'
    });
  };


export default Cart;