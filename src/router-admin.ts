import express from 'express';
const routerAdmin = express.Router();
import restaurantController from './controllers/restaurant.controller';
import productController from './controllers/product.controller';


/* Restaurant*/ 
routerAdmin.get('/', restaurantController.goHome);
routerAdmin
.get('/signup', restaurantController.getSignUp)
.post('/signup', restaurantController.processSignup);
routerAdmin
.get('/login', restaurantController.getLogin)
.post('/login', restaurantController.processLogin);

routerAdmin.get('/logout', restaurantController.logout);
routerAdmin.get('/check-me', restaurantController.checkAuthSession);

/*Prduct */
routerAdmin.get('/product/all', productController.getAllProducts);
routerAdmin.post('/product/create', productController.createNewProduct);
routerAdmin.post('/product/:id', productController.updateChosenProduct);


/** User  */

export default routerAdmin;