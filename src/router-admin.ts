import express from 'express';
const routerAdmin = express.Router();
import restaurantController from './controllers/restaurant.controller';
import productController from './controllers/product.controller';
import makeUpLoader from './libs/utils/uploader';


/* Restaurant*/ 
routerAdmin.get('/', restaurantController.goHome);
routerAdmin
.get('/signup', restaurantController.getSignUp)
.post('/signup', makeUpLoader("members").single("memberImage"), restaurantController.processSignup); 
routerAdmin
.get('/login', restaurantController.getLogin)
.post('/login', restaurantController.processLogin);

routerAdmin.get('/logout', restaurantController.logout);
routerAdmin.get('/check-me', restaurantController.checkAuthSession);

/*Prduct */
routerAdmin.get(
    '/product/all',
restaurantController.verifyRestaurant, 
productController.getAllProducts);

routerAdmin.post(
    '/product/create',
restaurantController.verifyRestaurant,
makeUpLoader("products").array("productImages", 5), 
productController.createNewProduct);

routerAdmin.post(
    '/product/:id', 
restaurantController.verifyRestaurant, 
productController.updateChosenProduct);


/** User  */

export default routerAdmin;