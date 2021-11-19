import { GETMENU } from '@/redux/constant'
import { getMenuTree } from '@/utils/tool'

const initMenu = []
export default function menuReducer(preState = initMenu, action) {
  const { type, data } = action
  switch (type) {
    case GETMENU:
      const result = getMenuTree(data)
      return result
    default:
      return preState
  }
}
