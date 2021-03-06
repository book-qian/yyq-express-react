import axios from 'axios'
import { message } from 'antd'
import { getToken, setToken } from '@/utils/auth'

const service = axios.create({
  timeout: 10000
})

service.interceptors.request.use(
  (config) => {
    if (getToken()) {
      config.headers['token'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response) => {
    const { config, data } = response
    if (config.url.includes('login')) {
      setToken(data.token)
    }
    return response.data
  },
  (error) => {
    const { data } = error.response
    message.error(data.message || '网络请求异常')
  }
)

export default service
