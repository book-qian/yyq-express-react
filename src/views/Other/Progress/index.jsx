import React, { Component } from 'react'
import { Progress, Button } from 'antd'
import { MinusOutlined, PlusOutlined } from '@ant-design/icons'
export default class ProgressView extends Component {
  state = {
    percent: 0
  }
  increase = () => {
    let percent = this.state.percent + 10
    if (percent > 100) {
      percent = 100
    }
    this.setState({ percent })
  }

  decline = () => {
    let percent = this.state.percent - 10
    if (percent < 0) {
      percent = 0
    }
    this.setState({ percent })
  }
  render() {
    return (
      <>
        <Progress type="circle" percent={this.state.percent} />
        <Button.Group>
          <Button onClick={this.decline} icon={<MinusOutlined />} />
          <Button onClick={this.increase} icon={<PlusOutlined />} />
        </Button.Group>
      </>
    )
  }
}
