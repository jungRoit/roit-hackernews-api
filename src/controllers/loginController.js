import {Router} from 'express';
import * as loginService from '../services/loginService';
import bcrypt from 'bcrypt';


const loginController = Router();

loginController.post('/',(req,res,next) => {
  const hashedPassword = bcrypt.hash(req.body.password, 10, (err,hash) => hash);

  const user = {
    username: req.body.username,
    password: req.body.password
  }

  loginService.validateLoginService(user).then(data => {
    if(data.length) {
      res.json({data: data, status:200 });
    }else { 
      res.json({status: 404});
      
    }
  })
  .catch(err => err);
})

export default loginController;
