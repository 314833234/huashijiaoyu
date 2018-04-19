import React from 'react'
import './index.scss'

import Contact_bg from '../../../images/contact_bg.jpg'

class Contact extends React.Component{
  constructor(){
    super();

    this.state = {
      dataList: [
        {
          name: '曹先生',
          address: '深圳',
          mobile: '150186*****',
          pass: '符合'
        },
        {
          name: '张先生',
          address: '深圳',
          mobile: '185183*****',
          pass: '符合'
        },
        {
          name: '王小姐',
          address: '广州',
          mobile: '185133*****',
          pass: '符合'
        },
        {
          name: '李先生',
          address: '深圳',
          mobile: '138722*****',
          pass: '不符合'
        },
        {
          name: '菊小姐',
          address: '深圳',
          mobile: '132888*****',
          pass: '符合'
        },
        {
          name: '曹先生',
          address: '深圳',
          mobile: '150186*****',
          pass: '符合'
        },
        {
          name: '张先生',
          address: '深圳',
          mobile: '185183*****',
          pass: '符合'
        },
        {
          name: '王小姐',
          address: '广州',
          mobile: '185133*****',
          pass: '符合'
        },
        {
          name: '李先生',
          address: '深圳',
          mobile: '138722*****',
          pass: '不符合'
        },
        {
          name: '菊小姐',
          address: '深圳',
          mobile: '132888*****',
          pass: '符合'
        }

      ],
      name: '',
      contact: '',
      age: '',
      school: '',
      expMajor: ''
    }
  }

  fnChangeName(e){
      this.setState({
          name: e.target.value
      })
  }

  fnChangeContact(e){
      this.setState({
          contact: e.target.value
      })
  }

  fnChangeAge(e){
      this.setState({
          age: e.target.value
      })
  }

    fnChangeSchool(e){
        this.setState({
            school: e.target.value
        })
    }

    fnChangeExpMajor(e){
        this.setState({
            expMajor: e.target.value
        })
    }

  fnClicksend(){
      this.props.fnSendData({
          name: this.state.name,
          contact: this.state.contact,
          age: this.state.age,
          school: this.state.school,
          expMajor: this.state.expMajor
      })
  }

  render(){
    let arrRoll = [];
    this.state.dataList.forEach((item, index)=>{
      arrRoll.push(<div className="contact-roll-item" key={index}>
        <span>{item.name}</span>
        <span>{item.address}</span>
        <span>{item.mobile}</span>
        <span>{item.pass}</span>
      </div>)
    });

    return (<div className="contact-box">
      <div className="contact-m">
        <h3 className="contact-title">测评结果将发送到您的手机，请确保填写的准确性！为了您的权益，您的隐私将被严格保密</h3>
        <div className="contact">
          <div className="contact-item">
            <input type="text" placeholder="输入您的姓名" onChange={this.fnChangeName.bind(this)}/>
          </div>
          <div className="contact-item">
            <input type="text" placeholder="输入您的手机" onChange={this.fnChangeContact.bind(this)}/>
          </div>
          <div className="contact-item">
            <button type="button" onClick={this.fnClicksend.bind(this)}>立即获取测评结果</button>
          </div>
        </div>
        <p className="contact-tips">测评结果会以短形式发送到您的手机，请注意查收</p>
        <div className="contact-roll-content">
          <div className="contact-roll">
              {arrRoll}
          </div>
        </div>
      </div>
      <div className="contact-w">
        <img className="contact-w-bg" src={Contact_bg}/>
        <div className="contact-w-content">
          <div className="contact-w-item">
            <input type="text" placeholder="输入您真实的姓名" onChange={this.fnChangeName.bind(this)}/>
          </div>
          <div className="contact-w-item">
            <input type="text" placeholder="输入您的手机号码" onChange={this.fnChangeContact.bind(this)}/>
          </div>
          <div className="contact-w-item">
            <input type="text" placeholder="输入您的年龄" onChange={this.fnChangeAge.bind(this)}/>
          </div>
          <div className="contact-w-item">
            <select onChange={this.fnChangeSchool.bind(this)}>
              <option>请选择院校</option>
              <option>华南师范</option>
              <option>暨南大学</option>
              <option>广东财经</option>
              <option>其他</option>
            </select>
          </div>
          <div className="contact-w-item">
            <select onChange={this.fnChangeExpMajor.bind(this)}>
              <option>请选择专业</option>
              <option>行政管理</option>
              <option>工商企业管理</option>
              <option>教育管理</option>
              <option>其他</option>
            </select>
          </div>
          <div className="contact-w-item">
            <button type="button" onClick={this.fnClicksend.bind(this)}>立即申请</button>
          </div>
        </div>
      </div>
    </div>)
  }
}

export default Contact