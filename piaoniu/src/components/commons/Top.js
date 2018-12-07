import React from 'react';
import '../../styles/top.less';

class Top extends React.Component{
	render(){
		return <div className="top">
			<a href="#">
				<div className="logo"></div>
				<div className="copywrite">
					<p className="app">下载票牛app</p>
					<p className="bottom">领188元新人礼包</p>
				</div>
				<div className="botton">立即下载</div>
			</a>
		</div>
	}
}



export default Top;