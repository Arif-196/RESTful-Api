import { Sequelize } from "Sequelize";
import db from "../config/database.js"

const {DataTypes} = Sequelize;

const Users = db.define('Users', {
    username: {
        type:DataTypes.STRING
    },
    password: {
        type:DataTypes.STRING
    },
    email:{
        type:DataTypes.STRING
    }
    },
    {
        freezeTableName: true

})

export default Users;