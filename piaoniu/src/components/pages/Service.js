import React from 'react';

import '../../styles/service.less';

class Service extends React.Component{
	render(){
		return <div className="service">
			<div className="service-entry__left">
				<div className="title">票牛服务保障</div>
				<div className="services">
					<div className="service-item">
						<img src="//static.piaoniu.com/nuxt-static/img/icon-diamond.ab4be9f.png"/>
						<span>无需赔付</span>
					</div>
					<div className="service-item">
						<img src="//static.piaoniu.com/nuxt-static/img/icon-shield.48f9b3a.png"/>
						<span>出票保真</span>
					</div>
					<div className="service-item">
						<img src="//static.piaoniu.com/nuxt-static/img/icon-protect.13cd898.png"/>
						<span>配送保障</span>
					</div>
				</div>
			</div>
			<div className="service-entry__right">了解更多</div>
		</div>
	}
}


export default Service;