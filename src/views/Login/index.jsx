import React, { Component } from 'react'
import { Form, Input, Button } from 'antd'
import {
  UserOutlined,
  LockOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone
} from '@ant-design/icons'

import { ajaxRequest } from '@/api'
import './index.less'

export default class NormalLoginForm extends Component {
  onFinish = (values) => {
    if (values) {
      const params = {
        input: {
          userac: values.username,
          passwd: values.password
        },
        sys: {
          prcscd: 'lm4401'
        }
      }
      ajaxRequest('lm4401', params).then((res) => {
        if (res) {
          const { token } = res
          let obj = {
            username: values.username,
            token
          }
          sessionStorage.setItem('user', JSON.stringify(obj))
          this.props.history.push('/')
        }
      })
    }
  }

  render() {
    return (
      <div className="login-container">
        <div className="login-view">
          <h2 className="login-title">后台管理系统</h2>
          <Form
            name="normal_login"
            className="login-form"
            onFinish={this.onFinish}
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 16 }}
            size="large"
          >
            <Form.Item
              label="用户名："
              name="username"
              rules={[{ required: true, message: '请输入用户名!' }]}
            >
              <Input
                allowClear
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="请输入用户名"
              />
            </Form.Item>
            <Form.Item
              label="密码："
              name="password"
              rules={[{ required: true, message: '请输入密码!' }]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
                type="password"
                placeholder="请输入密码"
              />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 5, span: 16 }}>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    )
  }
}
