const updateUserData = (state, action) => {
  if ((state === undefined)) {
    return {
      isAuth: false,
      userName: null,
    };
  }
  switch (action.type) {
    case 'USER_LOGIN':
      return {
        isAuth: true,
        userName: action.payload,
      };
    case 'WRONG_USER':
      return {
        isAuth: false,
        userName: null,
      };
    case 'CREATE_NEW_USER':
      return {
        isAuth: true,
        userName: action.payload,
      }
    default:
      return state.userData;
  }
};

export default updateUserData;
