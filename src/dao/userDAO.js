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

export {getAllUsers, getUserById, getUserByUsername};