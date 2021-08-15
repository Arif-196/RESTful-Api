// Import express
import express from "express";
// Import Controller Product
import { 
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
 } from "../controllers/Product.js";

 import {
     createUser,  
     loginUser,
     getUser
} from "../controllers/Users.js";

 import {
    addCart, 
    getCart,
    getProductByIdCart,
    deleteCart 
} from "../controllers/cart.js";
 
 // Init express router
const router = express.Router();
 
// Route get semua product
router.get(`/products`, getProducts);
// Route get product by id
router.get(`/products/:id`, getProductById);
// Route create product baru
router.post(`/products-create`, createProduct);
// Route update product by id
router.put(`/products/:id`, updateProduct);
// Route delete product by id
router.delete(`/products/:id`, deleteProduct);

//CREATE USER
router.post(`/users/sign-up`,createUser);
//LOGIN USER
router.post(`/users/login`,loginUser);
// GET USER
router.get(`/get-users`,getUser);
//CART 
router.post(`/add-cart/:id`, addCart);
router.get(`/get-cart`, getCart);
router.get(`/get-cart/id`, getProductByIdCart);
router.delete(`/delete-cart/:id`, deleteCart);
 
// export router
export default router;