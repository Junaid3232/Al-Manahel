export const setUser = (userObj: []) => {
  return {
    type: 'SET_USER',
    payload: userObj,
  };
};

export const logOut = () => {
  return {
    type: 'LOG_OUT',
  };
};

export const isLoggedIn = (data: boolean) => {
  return {
    type: 'IS_LOGGED_IN',
    payload: data,
  };
};
