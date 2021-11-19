import request from '@/utils/http'

const BASE_API = '/gateway/'

export function ajaxRequest(url, data) {
  return request({
    url: BASE_API + url,
    method: 'post',
    data
  })
}
