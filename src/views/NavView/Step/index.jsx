import React from 'react'
import { Steps, Button, message } from 'antd'

const { Step } = Steps

const steps = [
  {
    title: '活动基本信息',
    content: '第一步'
  },
  {
    title: '活动奖励设置',
    content: '第二步'
  },
  {
    title: '活动模板配置',
    content: '第三步'
  }
]

export default function StepView() {
  const [current, setCurrent] = React.useState(0)

  const next = () => {
    setCurrent(current + 1)
  }

  const prev = () => {
    setCurrent(current - 1)
  }
  return (
    <div>
      <Steps current={current}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">{steps[current].content}</div>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            下一步
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success('Processing complete!')}
          >
            完成
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            上一步
          </Button>
        )}
      </div>
    </div>
  )
}
