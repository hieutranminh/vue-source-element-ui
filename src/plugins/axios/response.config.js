// Config Response Interceptor

export const axiosInterceptorResponseConfig = (response) => response;

// Config Response Error Interceptor
export const axiosInterceptorResponseError = (error) => {
  if (error) {
    return Promise.reject(error);
  }
  // return empty object for aborted request
  return Promise.resolve({});
};
