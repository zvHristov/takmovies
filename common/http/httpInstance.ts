import axios, { AxiosRequestConfig, AxiosInstance, AxiosResponse, AxiosError, } from 'axios';


const BASE_URI = process.env.EXPO_PUBLIC_API_URL;

export const config: AxiosRequestConfig = {
    baseURL: BASE_URI,
    timeout: 10000,
    headers: {
      Accept: 'application/json',
      cors: 'cors'
    },
  };


const customUserAgent = "ReactNative";
axios.defaults.headers.common["User-Agent"] = customUserAgent;
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const instance: AxiosInstance = axios.create(config);

instance.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => {
      // Handle error
      if (error.response && error.response.status === 400) {
        return Promise.reject(error);
      }
    //   return Promise.reject(error);
    }
  
);
  
export default instance;