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
router.post(`/Users/registrasi-create`,createUser);
//LOGIN USER
router.post(`/Users/validasi-login`,loginUser);
// GET USER
router.get(`/get-Users`,getUser);
//CART 
router.post(`/add-cart`, addCart);
router.get(`/get-cart`, getCart);
router.delete(`/delete-cart`, deleteCart);
 
// export router
export default router;