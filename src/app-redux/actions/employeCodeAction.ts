export const employeCode = (code: number) => {
  return {
    type: 'EMPLOYEE_CODE',
    payload: code,
  };
};
