import React from 'react'
import { Layout } from 'antd'
import MenuList from '@/views/MenuList'
const { Sider } = Layout
export default function SideBar(props) {
  return (
    <Sider trigger={null} collapsible collapsed={props.collapsed}>
      <div className="logo" />
      <MenuList menu={props.menu} />
    </Sider>
  )
}
