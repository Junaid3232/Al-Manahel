import axios from 'axios';

import {BASE_URL} from 'utils';

export const Instance = () => {
  // let user = useSelector(state => state.currentUser.user);

  const AxiosInstance = axios.create({
    // baseURL: BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return AxiosInstance;
};
