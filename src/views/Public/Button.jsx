import React from 'react'
import { Button, Row, Col, Divider } from 'antd'
import { SearchOutlined, PoweroffOutlined } from '@ant-design/icons'
import './button.less'

const style = { background: '#bae7ff', padding: '8px 0', textAlign: 'center' }
const arr = [1, 2, 3, 4]
export default function ButtonView() {
  return (
    <div>
      <Divider orientation="left">幽灵按钮</Divider>
      <Row gutter={16}>
        {arr.map((item) => {
          return (
            <Col key={item} className="gutter-row" span={6}>
              <div style={style}>
                <Button type="dashed" ghost>
                  我是幽灵按钮
                </Button>
              </div>
            </Col>
          )
        })}
      </Row>
      <Divider orientation="center">主按钮</Divider>
      <Row gutter={16}>
        {arr.map((item) => {
          return (
            <Col key={item} className="gutter-row" span={6}>
              <div style={style}>
                <Button type="primary">我是主按钮</Button>
              </div>
            </Col>
          )
        })}
      </Row>
      <Divider orientation="right">图标按钮</Divider>
      <Row gutter={16}>
        {arr.map((item) => {
          return (
            <Col key={item} className="gutter-row" span={6}>
              <div style={style}>
                <Button type="primary" icon={<SearchOutlined />}>
                  我是图标按钮
                </Button>
              </div>
            </Col>
          )
        })}
      </Row>
      <Divider orientation="right">关闭按钮</Divider>
      <Row gutter={16}>
        {arr.map((item) => {
          return (
            <Col key={item} className="gutter-row" span={6}>
              <div style={style}>
                <Button type="primary" disabled icon={<PoweroffOutlined />}>
                  我是关闭按钮
                </Button>
              </div>
            </Col>
          )
        })}
      </Row>
    </div>
  )
}
