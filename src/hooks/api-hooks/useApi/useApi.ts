import {AxiosResponse} from 'axios';
import axios from 'axios';
import {AuthToken, Instance} from 'services';

export const useApi = () => {
  const AxiosInstance = Instance();

  //Axios Interceptor

  const processFailedRequest = (status: number) => {
    if (status === 400 || status === 403) {
      throw new Error(
        'We are not able to find your details. Please contact our support team.',
      );
    }
    throw new Error('Something went wrong. Please contact our support team');
  };

  const getResource = async <S extends T | undefined>(
    endpoint: string,
  ): Promise<AxiosResponse<S> | undefined> => {
    try {
      const response = await AxiosInstance.get<S>(endpoint);
      if (response.status === 200) {
        return response;
      }
      return processFailedRequest(response.status);
    } catch (e: any) {
      processFailedRequest(e.message);
      return;
    }
  };

  const postResource = async <S extends T | undefined, Result = S>(
    endpoint: string,
    body: S,
  ): Promise<AxiosResponse<Result> | undefined> => {
    try {
      const response = await AxiosInstance.post<S, AxiosResponse<Result>>(
        endpoint,
        body,
      );
      if (response.status === 200) {
        return response;
      }
      return processFailedRequest(response.status);
    } catch (e: any) {
      processFailedRequest(e.status);
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
