/**
 * Created by Administrator on 2018/4/18.
 */
import React from 'react'
import './index.scss'

class Hot extends React.Component{
    render(){
        return (<div className="hot">
            <h3 className="hot-title">热门推荐</h3>
            <ul className="hot-list">
                <li><span><br/>高中升<br/>专科</span></li>
                <li><span><br/>专科升<br/>本科</span></li>
                <li><span><br/>专本<br/>套读</span></li>
                <li><span><br/>其他<br/>方案</span></li>
            </ul>
        </div>)
    }
}

export default Hot