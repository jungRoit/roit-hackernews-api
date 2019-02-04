import Knex from '../dbconfig/db/knex';

const getAllUsers = () => {
  return Knex('users');
}

const getUserById = (id) => {
  return Knex('users').where({id:id});
}

const getUserByUsername = (username => {
  return Knex('users').where({username:username});
})

const getUserByUsernameAndPassword = (user) =>{
  return Knex('users').where({
    username:user.username,
    password: user.password
  });
}

export {getAllUsers, getUserById, getUserByUsername, getUserByUsernameAndPassword};