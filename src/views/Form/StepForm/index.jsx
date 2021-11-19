import React, { Component } from 'react'
import { Form, Input, Button, Checkbox, Steps } from 'antd'
const { Step } = Steps

const formStyle = {
  margin: '0 auto',
  width: '600px',
  padding: '20px'
}
export default class index extends Component {
  state = {
    current: 0
  }

  onChange = (current) => {
    console.log('onChange:', current)
    this.setState({ current })
  }

  onFinish = (values) => {
    console.log('Success:', values)
  }

  onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  renderFormItem = (params) => {}

  render() {
    const { current } = this.state
    return (
      <>
        <Steps current={current} onChange={this.onChange}>
          <Step title="Step 1" description="This is a description." />
          <Step title="Step 2" description="This is a description." />
          <Step title="Step 3" description="This is a description." />
        </Steps>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
          autoComplete="off"
          style={formStyle}
        >
          {current === 0 ? (
            <div className="step-1">
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  { required: true, message: 'Please input your username!' }
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: 'Please input your password!' }
                ]}
              >
                <Input.Password />
              </Form.Item>
            </div>
          ) : current === 1 ? (
            <div className="step-2" style={{ display: current === 1 }}>
              <Form.Item
                label="node"
                name="笔记"
                rules={[{ required: true, message: '请输入笔记' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="content"
                name="content"
                rules={[{ required: true, message: '请输入内容' }]}
              >
                <Input />
              </Form.Item>
            </div>
          ) : (
            <div className="step-3" style={{ display: current === 2 }}>
              我是表单
            </div>
          )}

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </>
    )
  }
}
