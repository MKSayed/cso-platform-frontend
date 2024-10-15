import Axios, { type InternalAxiosRequestConfig } from 'axios'

const API_URL = 'http://10.10.60.153:8081/' // Development API URL

function authRequestInterceptor(config: InternalAxiosRequestConfig): InternalAxiosRequestConfig {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.authorization = `Bearer ${token}`
  }
  config.headers.Accept = 'application/json'
  return config
}

// Axios instance to be used to make API calls throughout the application
export const axiosInstance = Axios.create({
  baseURL: API_URL,
})

axiosInstance.defaults.timeout = 60000 // Application wide request timeout
axiosInstance.interceptors.request.use(authRequestInterceptor) // Intercept all request and attach authorization heaader
axiosInstance.interceptors.response.use(
  (response) => {
    // return response.data;
    console.log(response)
    return response
  },
  (error) => {
    console.log(error)
    if (error.code === 'ERR_NETWORK') {
      console.log("Couldn't reach the server")
    } else if (error.code === 'ECONNABORTED') {
      console.log('Connection timed out')
    }
    return Promise.reject(error)
  },
)
