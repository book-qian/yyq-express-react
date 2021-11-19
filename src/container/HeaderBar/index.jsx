import React from 'react'
import { Layout, Menu, Dropdown, Button } from 'antd'
import './indec.less'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  GithubOutlined,
  DownOutlined,
  EditOutlined,
  SettingOutlined,
  LogoutOutlined
} from '@ant-design/icons'
const { Header } = Layout

export default function HeaderBar({ collapsed, toggle, loginOut }) {
  const userData = JSON.parse(sessionStorage.getItem('user')) || {}

  const menu = (
    <Menu>
      <Menu.ItemGroup title="用户设置">
        <Menu.Divider />
        <Menu.Item key="1" icon={<EditOutlined />}>
          个人中心
        </Menu.Item>
        <Menu.Item key="2" icon={<SettingOutlined />}>
          系统设置
        </Menu.Item>
      </Menu.ItemGroup>
      <Menu.Divider />
      <Menu.Item onClick={loginOut} key="3" icon={<LogoutOutlined />}>
        退出登录
      </Menu.Item>
    </Menu>
  )
  return (
    <Header className="site-layout-background" style={{ padding: 0 }}>
      <div className="leftView">
        {React.createElement(
          collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
          {
            className: 'trigger',
            onClick: toggle
          }
        )}
      </div>
      <div className="rightView">
        <div className="item">
          <a
            rel="noopener noreferrer"
            href="https://github.com/book-qian"
            target="_blank"
          >
            <GithubOutlined className="icon-github" />
          </a>
        </div>
        <div className="item" style={{ width: '100px' }}>
          <Dropdown
            overlay={menu}
            trigger={['click']}
            overlayStyle={{ width: '200px' }}
          >
            <Button type="link">
              {userData.username || ''}
              <DownOutlined className="icon-drodown" />
            </Button>
          </Dropdown>
        </div>
      </div>
    </Header>
  )
}
