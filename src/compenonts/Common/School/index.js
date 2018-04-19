/**
 * Created by Administrator on 2018/4/18.
 */
import React from 'react'
import './index.scss'

import School_1 from '../../../images/school_1.jpg'
import School_2 from '../../../images/school_2.jpg'
import School_3 from '../../../images/school_3.jpg'

class School extends React.Component{
    render(){
        return (<div className="school">
            <div className="school-box">
                <h3 className="school-title">院校一览</h3>
                <ul className="school-list">
                    <li className="school-item"><img src={School_1} /></li>
                    <li className="school-item"><img src={School_2} /></li>
                    <li className="school-item"><img src={School_3} /></li>
                </ul>
                <button type="button" className="school-btn">点击了解更多信息</button>
            </div>
        </div>)
    }
}

export default School