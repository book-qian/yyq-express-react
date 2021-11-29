import request from '@/utils/http'

const BASE_API = 'http://localhost:3001/'

export function ajaxRequest(url, data) {
  return request({
    url: BASE_API + url,
    method: 'post',
    data
  })
}
