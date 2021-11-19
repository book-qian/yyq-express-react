import React from 'react'
import { Menu, Dropdown, Button, message, Space, Tooltip } from 'antd'
import { DownOutlined, UserOutlined } from '@ant-design/icons'

console.log(111)
function handleButtonClick(e) {
  message.info('Click on left button.')
  console.log('click left button', e)
}

function handleMenuClick(e) {
  message.info('Click on menu item.')
  console.log('click', e)
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1" icon={<UserOutlined />}>
      1st menu item
    </Menu.Item>
    <Menu.Item key="2" icon={<UserOutlined />}>
      2nd menu item
    </Menu.Item>
    <Menu.Item key="3" icon={<UserOutlined />}>
      3rd menu item
    </Menu.Item>
  </Menu>
)

export default function DrapDownMenu() {
  return (
    <Space wrap>
      <Dropdown.Button onClick={handleButtonClick} overlay={menu}>
        Dropdown
      </Dropdown.Button>
      <Dropdown.Button
        overlay={menu}
        placement="bottomCenter"
        icon={<UserOutlined />}
      >
        Dropdown
      </Dropdown.Button>
      <Dropdown.Button onClick={handleButtonClick} overlay={menu} disabled>
        Dropdown
      </Dropdown.Button>
      <Dropdown.Button
        overlay={menu}
        buttonsRender={([leftButton, rightButton]) => [
          <Tooltip title="tooltip" key="leftButton">
            {leftButton}
          </Tooltip>,
          React.cloneElement(rightButton, { loading: true })
        ]}
      >
        With Tooltip
      </Dropdown.Button>
      <Dropdown overlay={menu}>
        <Button>
          Button <DownOutlined />
        </Button>
      </Dropdown>
    </Space>
  )
}
