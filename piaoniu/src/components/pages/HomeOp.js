import React from 'react';
import '../../styles/homeOp.less';

class HomeOp extends React.Component{
	render(){
		return <div className="homeOp">
			<div className="inner">
				<div className="left">
					<div className="op-type-1">
						<div className="title">限时抢购</div>
						<div className="desc">天天一元看演出</div>
						<img src="//static.piaoniu.com/nuxt-static/img/hot-image.323d031.png" className="hot-image"/>
						<div className="img-container">
							<div className="img"></div>
						</div>
					</div>
				</div>
				<div className="right">
					<div className="item first">
						<div className="op-type-2">
							<div className="inner">
								<div className="info">
									<div className="title">免费赠票</div>
									<div className="desc">票牛福利社</div>
									<div className="desc-2">音乐诗人李健</div>
								</div>
								<div className="img"></div>
							</div>
						</div>
					</div>
					<div className="item">
						<div className="op-type-2">
							<div className="inner">
								<div className="info">
									<div className="title">光楽园</div>
									<div className="desc">早鸟开售</div>
									<div className="desc-2">殿堂级光影世界</div>
								</div>
								<div className="img img2"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	}
}


export default HomeOp;