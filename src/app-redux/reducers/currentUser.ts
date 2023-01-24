const currentUser = (
  state = {
    isFirstTime: true,
    loggedIn: false,
    user: {},
  },
  action: {},
) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
        loggedIn: true,
      };
    case 'LOG_OUT':
      return {
        ...state,
        user: {},
        loggedIn: false,
      };
    case 'IS_LOGGED_IN':
      return {
        ...state,
        user: {},
        loggedIn: false,
      };

    default:
      return state;
  }
};

export default currentUser;
