import User from "../models/Users.js"
import bcrypt from 'bcryptjs'
import jsonwebtoken from 'jsonwebtoken'
import db from "../config/database.js"

export const createUser = async (req, res) => {
    const {username, password, email} = req.body

    const user ={
        username,
        email,
        password: await bcrypt.hash(password, 10)
    }
    try {
        await User.create(user)
        res.json({
            "message" : "User Create"
        })
    }catch (error){
        console.log(error);
    }
}

export const loginUser = async (req, res) => {
    const {username, password} = req.body
    const userData = await User.findOne({
        where:{
            username: username
        }
    })

    if(!userData){
        res.json({
            "message" :"User Not Found"
        })
    }

    const validUser = await bcrypt.compare(password, userData.password)
    if(!validUser){
        res.json({
            "message" : "Password Incorrect"
        })
    }
    const token = 'Bearer ' + jsonwebtoken.sign(
        {id:userData.id, username:userData.username, email:userData.email},
        "SHSHSHSHSHSHS"
    )

    
    return res.json ({
        id: userData.id,
        username : userData.username,
        email: userData.email,
        accesToken:token
    })
}


    export const verifyToken = async (req, res, next) => {
        const tokenHeader = req.headers['x-acces-token'];

        if(tokenHeader.split(' ')[0] !== 'Bearer'){
            return res.json ({
                "message" : "incorrect token!!"
            })
        }

        const token = tokenHeader.split(' ')[1];
        if(!token){
            return res.json ({
                "message":"no token provided"
            });
        }
        jsonwebtoken.verify(token, config.secret, (err, decoded)=>{
            if(err) {
                console.log(err);
            }

            req.id = decoded.id;
            next();
        })
    }


export const getUser = async (req, res) => {

    const token = req.headers.authorization.split(" ")[1]
    const user = jsonwebtoken.decode(token, 'SHSHSHSHSHSHS')
    console.log(user); 
    if(user) {
        try {
            const Users = await User.findAll();
            res.send(Users);
        } catch (err) {
            console.log(err);
        }
    }else{
        return res.json ({
            "message" : "incorrect token!!"
        })
    }
    
}