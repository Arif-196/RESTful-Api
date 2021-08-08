import { Sequelize } from "Sequelize";
import db from "../config/database.js"


const {DataTypes} = Sequelize;

const User = db.define('users', {
    username: {
        type:DataTypes.STRING
    },
    password: {
        type:DataTypes.STRING
    },
    email:{
        type:DataTypes.STRING
    },
    createdAt:{
        type:DataTypes.DATE
    },
    updatedAt:{
        type:DataTypes.DATE
    }
    },
    {
        tableName: 'users'

})
User.associate = (models) => {
    User.hasOne(models.Cart, {
      foreignKey: {
        name: 'users_id',
        allowNull: false
      },
      as: 'User'
    });
  };

export default User