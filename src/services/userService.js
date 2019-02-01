import * as userDAO from '../dao/userDAO';

const getAllUsers = () => {
  return userDAO.getAllUsers();
}

const getUserById = (id) => {
  return userDAO.getUserById(id);
}

const getUserByUsername = (username) => {
  return userDAO.getUserByUsername(username);
}

export {getAllUsers, getUserById, getUserByUsername};