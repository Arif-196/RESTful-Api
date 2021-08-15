// import sequelize 
import { Sequelize } from "sequelize";
// import connection 
import db from "../config/database.js";
import Cart from './cart.js'
 
// init DataTypes
const { DataTypes } = Sequelize;
 
// Define schema
const Product = db.define('Products', {
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
  },
  cart_id:{
    type: DataTypes.NUMBER
}
},{
  // Freeze Table Name
  tableName: 'Products'
});
Product.associate = (models) => {
  Product.belongsTo(models.User, {
    foreignKey: {
      name: 'user_id',
      allowNull: false
    },
    as: 'products'
  });
};

Product.associate = (models) => {
  Product.belongsTo(models.Cart, {
    foreignKey: "cart_id",
    as: 'products'
  });
};

 
// Export model Product
export default Product;