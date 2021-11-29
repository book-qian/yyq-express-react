import { GETMENU } from '@/redux/constant'

const initMenu = []
export default function menuReducer(preState = initMenu, action) {
  const { type, data } = action
  switch (type) {
    case GETMENU:
      const result = [...data]
      return result
    default:
      return preState
  }
}
