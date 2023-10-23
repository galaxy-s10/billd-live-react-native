import axios, { Axios, AxiosRequestConfig } from 'axios';

export interface IResponse<T = any>
  extends Promise<{
    code: number;
    data: T;
    message: string;
  }> {}

interface MyAxiosInstance extends Axios {
  // eslint-disable-next-line
  (config: AxiosRequestConfig): IResponse;
  // eslint-disable-next-line
  (url: string, config?: AxiosRequestConfig): IResponse;
}

class MyAxios {
  // axios 实例
  instance: MyAxiosInstance;

  constructor(config: AxiosRequestConfig) {
    // @ts-ignore
    this.instance = axios.create(config);

    // 请求拦截器
    this.instance.interceptors.request.use(
      (cfg) => {
        return cfg;
      },
      (error) => {
        console.log(error);
        return Promise.reject(error);
      }
    );

    // 响应拦截器
    this.instance.interceptors.response.use(
      (response) => {
        // console.log('response.config.url', response.config.url);
        // console.log('response.data', response.data);
        return response.data;
      },
      (error) => {
        console.log('响应拦截到错误', error);
        if (error.message.indexOf('timeout') !== -1) {
          console.error(error.message);
          // window.$message.error('请求超时，请重试');
        }
        const statusCode = error.response.status as number;
        const errorResponse = error.response;
        const errorResponseData = errorResponse.data;
        const whiteList = ['400', '401', '403', '404', '500'];
        if (error.response) {
          if (!whiteList.includes(`${statusCode}`)) {
            // window.$message.error(error.message);
            return Promise.reject(error.message);
          }
          if (statusCode === 400) {
            console.error(errorResponseData.message);
            // window.$message.error(errorResponseData.message);
            return Promise.reject(errorResponseData);
          }
          if (statusCode === 401) {
            console.error(errorResponseData.message);
            // window.$message.error(errorResponseData.message);
            return Promise.reject(errorResponseData);
          }
          if (statusCode === 403) {
            console.error(errorResponseData.message);
            // window.$message.error(errorResponseData.message);
            return Promise.reject(errorResponseData);
          }
          if (statusCode === 404) {
            console.error(errorResponseData.message);
            // window.$message.error(errorResponseData.message);
            return Promise.reject(errorResponseData);
          }
          if (statusCode === 500) {
            console.error(errorResponseData.error);
            // window.$message.error(errorResponseData.error);
            return Promise.reject(errorResponseData);
          }
        } else {
          // 请求超时没有response
          console.error(error.message);
          // window.$message.error(error.message);
          return Promise.reject(error.message);
        }
      }
    );
  }

  get<T = any>(
    url: string,
    config?: AxiosRequestConfig<any> | undefined
  ): IResponse<T> {
    return this.instance.get(url, config);
  }

  post<T = any>(
    url: string,
    data?: {} | undefined,
    config?: AxiosRequestConfig
  ): IResponse<T> {
    return this.instance.post(url, data, config);
  }
}

export default new MyAxios({
  baseURL: 'https://live-api.hsslive.cn',
  timeout: 1000 * 5,
});
