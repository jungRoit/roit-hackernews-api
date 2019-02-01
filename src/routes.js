import {Router} from 'express';
import userController from './controllers/userController';

const routes = Router();

routes.get('/',(req,res,next) => {
  res.json({message:'Welcome to Roit Hackernews APi'});
})

routes.use('/users',userController);

export default routes;