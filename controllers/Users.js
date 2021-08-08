import User from "../models/Users.js"
import bcrypt from 'bcryptjs'
import jsonwebtoken from 'jsonwebtoken'

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
    const token = jsonwebtoken.sign(
        {id:userData.id, username:userData.username, email:userData.email},
        "SHSHSHS",
        {expiresIn:"78000"}
    )
    return res.json ({
        id: userData.id,
        username : userData.username,
        email: userData.email,
        token 
    })
}

// module.exports = authorize;
 
// const authorize = () => {
//     return [
//         // authenticate JWT token and attach decoded token to request as req.user
//         jwt({ secret, algorithms: ['HS256'] }),

//         // attach full user record to request object
//         async (req, res, next) => {
//             // get user with id from token 'sub' (subject) property
//             const user = await db.User.findByPk(req.User.sub);

//             // check user still exists
//             if (!userData)
//                 return res.json({ message: 'Unauthorized' });

//             // authorization successful
//             req.userData = userData.get();
//             next();
//         }
//     ];
// }

export const getUser = async (req, res) => {
    try {
        const Users = await User.findAll();
        res.send(Users);
    } catch (err) {
        console.log(err);
    }
}