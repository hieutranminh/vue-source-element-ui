// Config Axios
export const axiosConfig = {
  baseURL: process.env.VUE_APP_API_LOCATION,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 30000, // request timeout
};

// Config Request Interceptor
export const axiosInterceptorRequestConfig = (config) => config;

// Config Request Error Interceptor
export const axiosInterceptorRequestError = (error) => Promise.reject(error);
