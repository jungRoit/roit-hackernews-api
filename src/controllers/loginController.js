import {Router} from 'express';
import * as loginService from '../services/loginService';

const loginController = Router();

loginController.post('/',(req,res,next) => {
  const user = {
    username: req.body.username,
    password: req.body.password
  }

  loginService.validateLoginService(user).then(data => {
    if(data.length !== 0) {
      res.json({data: data, status: 200});
    }else {
      res.json({status: 404});
    }
  })
  .catch(err => err);
})

export default loginController;
