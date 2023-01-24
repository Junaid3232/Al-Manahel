const employeCode = (
  state = {
    employeCode: null,
  },
  action: {},
) => {
  switch (action.type) {
    case 'EMPLOYEE_CODE':
      return {
        ...state,
        employeCode: action.payload,
      };

    default:
      return state;
  }
};

export default employeCode;
