import cart from "../models/cart.js"
import product from "../models/Product.js"



export const addCart = async (req, res, next) => {
    try{
        await product.findById(req.body.id)[0];
        cart.
        res.json({
            "message":"cart added"
        });
    }catch(err){
        console.log(err);
    }
} 

export const getCart = async (req, res) => {
    try{
        await cart.findAll({
            where: {
                cart_id: req.params.cart_id
            }
        })
        res.send(product[0])
    }catch(err){
        console.log(err);
    }
}


export const deleteCart = async(req, res) => {
    try {
        await cart.destroy({
            where: {
                cart_id: req.params.cart_id
            }
        });
        res.json({
            "message": "cart deleted"
        });
    }catch (err){
        console.log(err);
    }
}

