import {Router} from 'express';
import userController from './controllers/userController';
import loginController from './controllers/loginController';

const routes = Router();

routes.get('/',(req,res,next) => {
  res.json({message:'Welcome to Roit Hackernews APi'});
})

routes.use('/users', userController);
routes.use('/login', loginController);

export default routes;