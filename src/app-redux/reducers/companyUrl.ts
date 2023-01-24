const companyUrl = (
  state = {
    companyUrl: '',
  },
  action: {},
) => {
  switch (action.type) {
    case 'COMPANY_URL':
      return {
        ...state,
        companyUrl: action.payload,
      };

    default:
      return state;
  }
};

export default companyUrl;
