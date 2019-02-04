import * as userDAO from '../dao/userDAO';

const validateLoginService = (user) => {
  return userDAO.validateLogin(user);
}

export {validateLoginService};