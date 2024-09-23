import Axios from 'axios'

const API_URL = 'http://localhost:8005/'
// function authRequestInterceptor(config) {
//   const token = getAuthToken()
//   if (token) {
//     config.headers.authorization = `Bearer ${token}`
//   }
//   config.headers.Accept = 'application/json'
//   return config
// }

export const axiosInstance = Axios.create({
  baseURL: API_URL
})

axiosInstance.defaults.timeout = 10000
// axiosInstance.interceptors.request.use(authRequestInterceptor)
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
  }
)
