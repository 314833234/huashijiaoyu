import React from 'react'
import './index.scss'

class Plan extends React.Component{
  render(){
    return (<div className="plan">
      <h3 className="plan-title"><span>四大学历提升方案，适合人群广</span></h3>
      <ul className="plan-list">
        <li className="plan-item">
          <h3>高升本</h3>
          <span>在线咨询</span>
          <span>报考专业</span>
        </li>
        <li className="plan-item">
          <h3>专升本</h3>
          <span>在线咨询</span>
          <span>报考专业</span>
        </li>
        <li className="plan-item">
          <h3>专本套餐</h3>
          <span>在线咨询</span>
          <span>报考专业</span>
        </li>
        <li className="plan-item">
          <h3>其他形式</h3>
          <span>在线咨询</span>
          <span>报考专业</span>
        </li>
      </ul>
      <button type="button" className="plan-btn">免费获取个人学历方案</button>
    </div>)
  }
}

export default Plan