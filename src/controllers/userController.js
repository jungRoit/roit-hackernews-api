import * as userService from '../services/userService';
import {Router} from 'express';

const userController = Router();

userController.get('/',(req,res,next) => {
  userService.getAllUsers().then(data => {
    res.json({data: data, status: 200 });
  })
  .catch(err => err);
})

userController.get('/:id', (req,res,next) => {
    userService.getUserById(req.params.id).then(data => {
      if(data.length !== 0) {
        res.json({data:data, status:200});
      }else {
        res.json({data:data, status:404});
      }
      
    })
    .catch(err => err);
})

userController.get('/username/:username', (req,res,next) => {
  userService.getUserByUsername(req.params.username).then(data => {
    res.json({data:data, status:200});
  })
  .catch(err => err);
})

export default userController;