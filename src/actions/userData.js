import { isInvalid } from '../utils/helpFuncsForBrouser';

const userLogin = (userName) => {
  return {
    type: 'USER_LOGIN',
    payload: userName,
  };
};

const createNewUser = (userName) => {
  return {
    type: 'CREATE_NEW_USER',
    payload: userName,
  };
};


const authorization = (dispatch, { usersService }) => (data, form) => {
  usersService
    .authUser(data)
    .then(() => dispatch(userLogin(data.userName)))
    .catch(() => isInvalid(form));
};

const registration = (dispatch, { usersService }) => (data, form) => {
  usersService
    .createNewUser(data)
    .then(() => dispatch(createNewUser(data.userName)))
    .catch(() => isInvalid(form));
};

export { authorization, registration };
