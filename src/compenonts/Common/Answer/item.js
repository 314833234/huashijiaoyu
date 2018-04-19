import React from 'react';

class AnswerItem extends React.Component{
  constructor(){
    super();
  }

  onChangeRadio(e){
    console.log(e.target.checked)
  }

  render(){
    let arrLabel = [];
    this.props.options.forEach((item, index)=>{
      arrLabel.push(<label className="answer-label" key={index}>
        <input className="answer-radio" type="radio" name={this.props.name} defaultChecked={item.checked} onChange={this.onChangeRadio}/>
        <span className="answer-tx">{item.name}</span>
      </label>)
    });

    return (<div className="answer-content">
      {arrLabel}
    </div>)
  }
}

export default AnswerItem