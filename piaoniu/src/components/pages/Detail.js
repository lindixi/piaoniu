import React from 'react';
import axios from 'axios';
import Top from '../commons/Top';

import '../../styles/detail.less';

class Detail extends React.Component{
	constructor(){
		super();
		this.state = {
			detailList :[],
			needList:[]
		}
	}
	componentWillMount(){
		let hash = window.location.hash.split('/')[2];
		console.log(hash);
		axios.get('/pnapi/api/v2/home/recommends',
			{params:{
				pageIndex:1,
				pageSize:10
		}})
		.then(res=>{
//			console.log(res.data.data);
			this.setState({
				detailList:res.data.data
			});
			console.log(this.state.detailList);
			var need = this.state.detailList.filter(item=>{
					if(item.recommendContent.id==hash){
						return item
					}
			})
			
			this.setState({
				needList:need
			})
			console.log(this.state.needList)
		})
		.catch(err=>{
			console.log(err);
		})
	}
	render(){
		return <div className="detail">
			<Top/>
			<nav className="navbar">
				<div className="btn-left">返回</div>
				<div className="middle-wrap">
					<div className="middle-title">演出详情</div>
				</div>
			</nav>
			{this.state.needList.map(tem=>{
				return <div><div className="header">
				<div className="header-image">
					<canvas className="blured-poster"></canvas>
				</div>
				<div className="header-main">
					<img className="poster" src={tem.recommendContent.poster}/>
					<div className="info">
						<div className="topD">
							<div className="title">{tem.recommendContent.name}</div>
							<div className="stars-score">
								<div className="score">{tem.recommendContent.star.toFixed(1)}</div>
								<ul className="starts">	
									<li>
										<img src="//static.piaoniu.com/nuxt-static/img/starYellow.b0a4b5a.png"/>
									</li>
									<li>
										<img src="//static.piaoniu.com/nuxt-static/img/starYellow.b0a4b5a.png"/>
									</li>
									<li>
										<img src="//static.piaoniu.com/nuxt-static/img/starYellow.b0a4b5a.png"/>
									</li>
									<li>
										<img src="//static.piaoniu.com/nuxt-static/img/starYellow.b0a4b5a.png"/>
									</li>
									<li>
										<img src="//static.piaoniu.com/nuxt-static/img/starYellow.b0a4b5a.png"/>
									</li>
								</ul>
							</div>
							<div className="price-line">
								<div className="price-infoD">
									<span className="priceD">{tem.recommendContent.lowPrice}</span>
									<span className="qiD">元起</span>
								</div>
								<div className="buy-num">已有10034人购买👑</div>
							</div>
						</div>
					</div>
					<div className="concern-comment">
						<div className="comment">
							<span>想看</span>
						</div>
						<div className="concern">
							<span>评论</span>
						</div>
					</div>
				</div>
			</div>
			<div className="header-bottom">{tem.recommendContent.timeRange}</div>
			<div className="venue">
				<div className="inner">
					<div className="name">{tem.recommendContent.venueName}</div>
				</div>
				<div className="icon">
					<img src="//static.piaoniu.com/nuxt-static/img/icon-park2.c5fced0.png"/>
				</div>
			</div>
			<div className="ticket-info">
				<div className="text">购票须知</div>
				<div className="arr-right type-undefined"></div>
			</div>
			<div className="service-info">
				<div className="text">平台保障</div>
				<div className="item">
					<div className="service-item">
						<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACnElEQVRIS72W0UsUURTGv3N3dnsLTactKSTSkAyjqJmIiKDHoCgQKowIctdapR5868U/wIdCzV0NhJLoKSmo6C16kFyjJcsSEkKRoJ1tfYmondl7YmabZdZ2dRay+3rPfL97vnvuOUNYZX3TL2/LQ5wiiBPM3AZGvRNOyBDRDEM+CUA+qpu6s1RJhsptGPu6GxCy+sB8iQGFgQ8A3oL4ixPP1ABgLwG7CbBANIac0qemBgv7nvUXwDjQeZIFjQMUJOIhNpX45je358sdJL3/ahMFrS5migFskuQO9fXo44qAjBbtkYybIEoGlcDZ2smhhdUsdPeWD8caTSv/AMyaIFyvTyYG3L1iBs7JSUyA8FDNhjpofuCXH3E3hpt6NhibcuNgnCGWp91MHIDtOQdzc4CYVbPBY9WKl0LMF4BsJTPUYt9JAaB3jTDzhaCptNSm/NlSKbuCXdYcEd1Tp+IRsktRcuAziG+pUyO91djiFBTaA4ZeczH0Q5moeTe8XDhwpB9M1wTld1Baj8TANAgr0FypWipBbfGMVneXIc8x85Hw9OikHWtXF5T8JxB3U1qLPiNgu5pM7Knm9F5xIUSs/lV82Pu9oUXfg2jRBiwx8DKcTJz3C1hL3Nb5qkXvE3CU0gejP1nwYNjjv6F17mKIG3kz17s1NWZ4wX7EHYAe6SdJ3WUBaT3aDMY0CIv5XO64C/ErXgqoYFHmUEyX0nruQrakvmfdCy3n+Up7ixYZetdTydwYTiZaVwZ5IWD6CMh2P+J/7mBWEC2sWaZFCHijX/GSMvXz0LL6lTaTeWc4GZ/wU2klD62kVShKi98O6rtV/Jdm50DWs1276a7rwHEh6zoyi5AVQ5+AWQnMeIe+ANoYaK166Hur41/8tvwG+pnapsUnZS8AAAAASUVORK5CYII="/>
						<span>无票赔付</span>
					</div>
					<div className="service-item">
						<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACnElEQVRIS72W0UsUURTGv3N3dnsLTactKSTSkAyjqJmIiKDHoCgQKowIctdapR5868U/wIdCzV0NhJLoKSmo6C16kFyjJcsSEkKRoJ1tfYmondl7YmabZdZ2dRay+3rPfL97vnvuOUNYZX3TL2/LQ5wiiBPM3AZGvRNOyBDRDEM+CUA+qpu6s1RJhsptGPu6GxCy+sB8iQGFgQ8A3oL4ixPP1ABgLwG7CbBANIac0qemBgv7nvUXwDjQeZIFjQMUJOIhNpX45je358sdJL3/ahMFrS5migFskuQO9fXo44qAjBbtkYybIEoGlcDZ2smhhdUsdPeWD8caTSv/AMyaIFyvTyYG3L1iBs7JSUyA8FDNhjpofuCXH3E3hpt6NhibcuNgnCGWp91MHIDtOQdzc4CYVbPBY9WKl0LMF4BsJTPUYt9JAaB3jTDzhaCptNSm/NlSKbuCXdYcEd1Tp+IRsktRcuAziG+pUyO91djiFBTaA4ZeczH0Q5moeTe8XDhwpB9M1wTld1Baj8TANAgr0FypWipBbfGMVneXIc8x85Hw9OikHWtXF5T8JxB3U1qLPiNgu5pM7Knm9F5xIUSs/lV82Pu9oUXfg2jRBiwx8DKcTJz3C1hL3Nb5qkXvE3CU0gejP1nwYNjjv6F17mKIG3kz17s1NWZ4wX7EHYAe6SdJ3WUBaT3aDMY0CIv5XO64C/ErXgqoYFHmUEyX0nruQrakvmfdCy3n+Up7ixYZetdTydwYTiZaVwZ5IWD6CMh2P+J/7mBWEC2sWaZFCHijX/GSMvXz0LL6lTaTeWc4GZ/wU2klD62kVShKi98O6rtV/Jdm50DWs1276a7rwHEh6zoyi5AVQ5+AWQnMeIe+ANoYaK166Hur41/8tvwG+pnapsUnZS8AAAAASUVORK5CYII="/>
						<span>出票保真</span>
					</div>
					<div className="service-item">
						<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACnElEQVRIS72W0UsUURTGv3N3dnsLTactKSTSkAyjqJmIiKDHoCgQKowIctdapR5868U/wIdCzV0NhJLoKSmo6C16kFyjJcsSEkKRoJ1tfYmondl7YmabZdZ2dRay+3rPfL97vnvuOUNYZX3TL2/LQ5wiiBPM3AZGvRNOyBDRDEM+CUA+qpu6s1RJhsptGPu6GxCy+sB8iQGFgQ8A3oL4ixPP1ABgLwG7CbBANIac0qemBgv7nvUXwDjQeZIFjQMUJOIhNpX45je358sdJL3/ahMFrS5migFskuQO9fXo44qAjBbtkYybIEoGlcDZ2smhhdUsdPeWD8caTSv/AMyaIFyvTyYG3L1iBs7JSUyA8FDNhjpofuCXH3E3hpt6NhibcuNgnCGWp91MHIDtOQdzc4CYVbPBY9WKl0LMF4BsJTPUYt9JAaB3jTDzhaCptNSm/NlSKbuCXdYcEd1Tp+IRsktRcuAziG+pUyO91djiFBTaA4ZeczH0Q5moeTe8XDhwpB9M1wTld1Baj8TANAgr0FypWipBbfGMVneXIc8x85Hw9OikHWtXF5T8JxB3U1qLPiNgu5pM7Knm9F5xIUSs/lV82Pu9oUXfg2jRBiwx8DKcTJz3C1hL3Nb5qkXvE3CU0gejP1nwYNjjv6F17mKIG3kz17s1NWZ4wX7EHYAe6SdJ3WUBaT3aDMY0CIv5XO64C/ErXgqoYFHmUEyX0nruQrakvmfdCy3n+Up7ixYZetdTydwYTiZaVwZ5IWD6CMh2P+J/7mBWEC2sWaZFCHijX/GSMvXz0LL6lTaTeWc4GZ/wU2klD62kVShKi98O6rtV/Jdm50DWs1276a7rwHEh6zoyi5AVQ5+AWQnMeIe+ANoYaK166Hur41/8tvwG+pnapsUnZS8AAAAASUVORK5CYII="/>
						<span>配送保障</span>
					</div>
				</div>
			</div>
			<div className="sections">
				<div className="section introduce">
					<div className="section-title">演出简介</div>
					<div className="content">
						<div className="inner">
							<div className="icon">
								<p>
									<span>门票信息</span>
								</p>
								<p>
									<img src="https://img.piaoniu.com/upload-ueditor-image-20181210-1544410868377016508.png"/>
								</p>
								<p>&nbsp;</p>
								<p className="ql-align-center">
									<img src={tem.recommendContent.poster}/>
								</p>
								<p>
									<span>你好，我叫Halopark，是一座光影城堡，我有信心成为你朋友圈有史以来最酷的拍照背景板。</span>
								</p>
								<p>
									<span style={{color:'black'}}>Halo park光</span>
									<span style={{fontSize:'14px'}}>楽</span>
									<span style={{color:'black'}}>园，意为让你在光影的变幻莫测中感受高科技带来的欢乐与体验。</span>
								</p>
								<p><span style={{color:'black'}}>1.5w平米、4.5小时神奇探索，22项极致光影体验、天天完美视觉冲击。</span></p>
								<p><span style={{color:'black'}}>Halo park光</span><span style={{fontSize:'14px'}}>楽</span><span style={{color:'black'}}>园，这里的一切都将让你感到浪漫非凡，神奇无比。</span></p>
							</div>
						</div>
					</div>
				</div>
			</div>
			</div>})}
			<div className="credit" style={{paddingLeft:'0'}}>
				<div className="hd">票牛服务保障</div>
				<div className="items">
					<div className="credit-item">
						<img src="//static.piaoniu.com/nuxt-static/img/icon-zhenpiao2.6bf8fbd.png" className="credit-icon"/>
						<span className="text">无票赔付</span></div><div className="credit-item">
					</div>
					<div className="credit-item">
						<img src="//static.piaoniu.com/nuxt-static/img/icon-danbao2.2e56eee.png" className="credit-icon"/>
						<span className="text">出票保真</span></div><div class="credit-item">
					</div>
					<div className="credit-item">
						<img src="//static.piaoniu.com/nuxt-static/img/icon-youpiao2.0df1e5e.png" className="credit-icon"/>
						<span className="text">配送保障</span>
					</div>
				</div>
			</div>
		</div>
	}
}


export default Detail;