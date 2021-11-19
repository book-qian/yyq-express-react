import React, { Component } from 'react'
import { Menu } from 'antd'
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined
} from '@ant-design/icons'

const { SubMenu } = Menu

export default class MenuView extends Component {
  state = {
    current: 'mail'
  }

  handleClick = (e) => {
    console.log('click ', e)
    this.setState({ current: e.key })
  }

  render() {
    const { current } = this.state
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[current]}
        mode="horizontal"
      >
        <Menu.Item key="mail" icon={<MailOutlined />}>
          Navigation One
        </Menu.Item>
        <Menu.Item key="app" disabled icon={<AppstoreOutlined />}>
          Navigation Two
        </Menu.Item>
        <SubMenu
          key="SubMenu"
          icon={<SettingOutlined />}
          title="Navigation Three - Submenu"
        >
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item key="alipay">
          <a
            href="https://github.com/book-qian?tab=projects"
            target="_blank"
            rel="noopener noreferrer"
          >
            导航到我的github
          </a>
        </Menu.Item>
      </Menu>
    )
  }
}
