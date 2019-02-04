import * as userDAO from '../dao/userDAO';

const validateLoginService = (user) => {
  return userDAO.getUserByUsernameAndPassword(user);
}

export {validateLoginService};