export const companyUrl = (url: string) => {
  return {
    type: 'COMPANY_URL',
    payload: url,
  };
};
