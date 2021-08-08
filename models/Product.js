// import sequelize 
import { Sequelize } from "sequelize";
// import connection 
import db from "../config/database.js";
import Cart from './cart.js'
 
// init DataTypes
const { DataTypes } = Sequelize;
 
// Define schema
const Product = db.define('products', {
  // Define attributes
  title: {
    type: DataTypes.STRING
  },
  price: {
    type: DataTypes.DOUBLE
  },
  createdAt:{
    type:DataTypes.DATE
  },
  updatedAt:{
    type:DataTypes.DATE
  }
},{
  // Freeze Table Name
  tableName: 'products'
});
Product.associate = (models) => {
  Product.belongsTo(models.Product, {
    foreignKey: {
      name: 'user_id',
      allowNull: false
    },
    as: 'Product'
  });
};
Product.belongsTo(Cart)
 
// Export model Product
export default Product;