import React from 'react';
import './index.scss'

import AnswerItem from './item'

class Answer extends React.Component{
  constructor(){
    super();

    this.state = {
      dataList: [
        {
          title: '您目前的学历层次',
          key: 'education',
          options: [
            {id: 1, name: '高中及以下', checked: false},
            {id: 2, name: '中专', checked: false},
            {id: 3, name: '大专', checked: false},
            {id: 4, name: '其他', checked: false}
          ]
        },
        {
          title: '您能接受的拿证时长',
          key: 'time',
          options: [
            {id: 1, name: '1年到2年', checked: false},
            {id: 2, name: '2年到3年', checked: false},
            {id: 3, name: '3年及以上', checked: false}
          ]
        },
        {
          title: '您的年龄是',
          key: 'age',
          options: [
            {id: 1, name: '18-23岁', checked: false},
            {id: 2, name: '23-30岁', checked: false},
            {id: 3, name: '30-35岁', checked: false},
            {id: 4, name: '35-40岁', checked: false}
          ]
        },
        {
          title: '您为什么要提升学历',
          key: 'reason',
          options: [
            {id: 1, name: '找工作', checked: false},
            {id: 2, name: '考公务员', checked: false},
            {id: 3, name: '入户', checked: false}
          ]
        },
        {
          title: '您更倾向于哪种取证方式',
          key: 'way',
          options: [
            {id: 1, name: '在家自学', checked: false},
            {id: 2, name: '学校听课', checked: false},
            {id: 3, name: '辅导教学', checked: false}
          ]
        }
      ]
    }
  }

  render(){
    let arrItem = [];

    this.state.dataList.forEach((item, index)=>{
      arrItem.push(<div className="answer" key={index}>
        <h3 className="answer-title">{(index + 1) + '、' + item.title}</h3>
        <AnswerItem name={item.key} options={item.options}/>
      </div>)
    });

    return (<div className="answer-box">
      <div className="answer-other">
        <h3 className="answer-other-title"><span>为您量身定制学历提升方案</span></h3>
        <h4>在线快速测评，马上知道</h4>
        <p>"提交成功后，根据条件即可申请助学金"</p>
      </div>
      <div className="answer-w">
        <h4>在线测评，测测您适合什么学历提升方式</h4>
      </div>
      <div className="answer-list">{arrItem}</div>
    </div>)
  }
}

export default Answer