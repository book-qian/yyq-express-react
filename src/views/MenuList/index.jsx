import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as Icon from '@ant-design/icons'
import { Menu } from 'antd'
const { SubMenu, Item } = Menu

export default function MenuList(props) {
  const rootSubmenuKeys = props.menu.map((t) => t.key)
  const [openKeys, setOpenKeys] = useState(['/home'])
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1)
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys)
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : [])
    }
  }
  // 创建icon
  function getIcon(name) {
    return name && React.createElement(Icon[name])
  }

  // 循环遍历数组中的子项 subs ，生成子级 menu
  const renderSubMenu = ({ key, icon, title, subs }) => {
    return (
      <SubMenu key={key} icon={getIcon(icon)} title={title}>
        {subs &&
          subs.map((t) => {
            return t.subs && t.subs.length > 0
              ? renderSubMenu(t)
              : renderMenuItem(t)
          })}
      </SubMenu>
    )
  }

  const renderMenuItem = ({ key, icon, title }) => {
    return (
      <Item key={key} icon={getIcon(icon)}>
        <Link to={key}>
          <span>{title}</span>
        </Link>
      </Item>
    )
  }

  return (
    <Menu
      theme="dark"
      mode="inline"
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      defaultSelectedKeys={['/home']}
    >
      {props.menu.map((item) => {
        return item.subs && item.subs.length > 0
          ? renderSubMenu(item)
          : renderMenuItem(item)
      })}
    </Menu>
  )
}
