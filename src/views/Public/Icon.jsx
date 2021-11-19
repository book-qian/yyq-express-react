import React, { Component } from 'react'
import {
  HomeOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
  LoadingOutlined,
  SmileTwoTone,
  HeartTwoTone,
  CheckCircleTwoTone
} from '@ant-design/icons'

const style = {
  fontSize: '20px'
}
export default class Icon extends Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }}
      >
        <HomeOutlined style={style} />
        <SettingFilled style={style} />
        <SmileOutlined style={style} />
        <SyncOutlined spin style={style} />
        <SmileOutlined rotate={180} style={style} />
        <LoadingOutlined style={style} />
        <SmileTwoTone />
        <HeartTwoTone twoToneColor="#eb2f96" />
        <CheckCircleTwoTone twoToneColor="#52c41a" />
      </div>
    )
  }
}
