import React from 'react'
import './index.scss'

import BannerSrcM from '../../../images/banner_m.jpg'
import BannerSrcW from '../../../images/banner.jpg'

class Banner extends React.Component{
  render(){
    return (<div className="banner">
      <div className="banner-m"><img src={BannerSrcM}/></div>
      <div className="banner-w"><img src={BannerSrcW}/></div>
    </div>)
  }
}

export default Banner