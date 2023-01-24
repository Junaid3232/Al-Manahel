import {AxiosResponse} from 'axios';
import axios from 'axios';
import {Instance} from 'services';
import {useSelector} from 'react-redux';

export const useApi = () => {
  const BASE_URL = useSelector(state => state.companyUrl.companyUrl);

  const AxiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  //Axios Interceptor

  const processFailedRequest = (response: AxiosResponse) => {
    console.log('response---', response);
    if (response.status === 400 || response.status === 403) {
      throw new Error(
        'We are not able to find your details. Please contact our support team.',
      );
    }
    throw new Error('Something went wrong. Please contact our support team');
  };

  const getResource = async <S extends T | undefined>(
    endpoint: string,
  ): Promise<AxiosResponse<S> | undefined> => {
    console.log('----URL----', endpoint);
    try {
      const response = await AxiosInstance.get<S>(endpoint);
      if (response?.status === 200) {
        return response;
      }
      return response;
    } catch (e: any) {
      console.log('e', e);
      return;
    }
  };

  const postResource = async <S extends T | undefined, Result = S>(
    endpoint: string,
    body: S,
  ): Promise<AxiosResponse<Result> | undefined> => {
    console.log('----end point', endpoint);
    try {
      const response = await AxiosInstance.post<S, AxiosResponse<Result>>(
        endpoint,
        body,
      );
      if (response?.status === 200) {
        return response;
      }
      return response;
    } catch (e: any) {
      console.log('e', e);
      return;
    }
  };

  const deleteResource = async <S extends T | undefined>(
    endpoint: string,
  ): Promise<AxiosResponse<S> | undefined> => {
    try {
      const response = await AxiosInstance.delete<S>(endpoint);
      if (response.status === 200) {
        return response;
      }
      return processFailedRequest(response.status);
    } catch (e: any) {
      processFailedRequest(e.message);
      return;
    }
  };

  return {
    getResource,
    postResource,
    deleteResource,
  };
};
