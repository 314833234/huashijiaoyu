import React from 'react';
import './index.scss';

import Major from '../../images/major.jpg'
import Other from '../../images/other.jpg'

import Banner from '../Common/Banner'
import Answer from '../Common/Answer'
import Contact from '../Common/Contact'
import Plan from '../Common/Plan'
import Hot from '../Common/Hot'
import School from '../Common/School'
import Header from '../Common/Header'
import Nav from '../Common/Nav'

class Home extends React.Component{
  constructor(){
    super();

  }

  sendPostData(options){
      fetch('http://101.200.62.235:8080/edu/submit', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(options)
      }).then(res=>{
          return res.json();
      }).then(function(res){
        if(res.status == 1){
            alert('提交成功')
        }
        else{
            alert('提交失败，请稍后重新提交')
        }
      })
  }

  render(){
    return (<div>
      <Banner/>
      <Answer/>
      <Hot/>
      <School/>
      <Contact fnSendData={this.sendPostData.bind(this)}/>
      <div className="other">
        <img src={Other}/>
      </div>
      <Plan/>
    </div>)
  }
}

export default Home