import React from 'react'
import useTypewriter from 'react-typewriter-hook'

const Animation = () => {
  const str = `    小溪慢慢的流，也会汇聚成大海啊！短期的正确，往往很清晰，但是不知通往何方。
                长期的正确，往往和模糊，但是有一个确定的大方向`
  const talk = useTypewriter(str)

  return <div style={{ fontSize: '16px' }}>{talk}</div>
}

export default Animation
