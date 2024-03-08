import express from 'express';
const routerAdmin = express.Router();
import restaurantController from './controllers/restaurant.controller';


/* Restaurant*/ 
routerAdmin.get('/', restaurantController.goHome);

routerAdmin
.get('/signup', restaurantController.getSignUp)
.post('/signup', restaurantController.processSignup);

routerAdmin
.get('/login', restaurantController.getLogin)
.post('/login', restaurantController.processLogin);

/*Prduct */
/** User  */

export default routerAdmin;