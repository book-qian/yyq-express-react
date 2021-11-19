const TokenKey = 'token'
const UserId = 'UserId'

export function getToken() {
  return sessionStorage.getItem(TokenKey)
}

export function setToken(token) {
  return sessionStorage.setItem(TokenKey, token)
}

export function setUserId(userId) {
  return sessionStorage.setItem(UserId, userId)
}

export function getUserId() {
  return sessionStorage.getItem(UserId)
}
