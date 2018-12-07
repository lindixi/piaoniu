import React from 'react';
import axios from 'axios';
import {HashRouter,Router} from 'react-router-dom';

import '../../styles/list.less';

import { ListView } from 'antd-mobile';

axios.defaults.baseURL='http://localhost:8000';
class List extends React.Component{
	constructor(){
		super();
		this.state = {
			likeList:[]
		}
	}
	componentWillMount(){
		axios.get('/pnapi/api/v2/home/recommends',
			{params:{
				pageIndex:1,
				pageSize:10
		}})
		.then(res=>{
//			console.log(res.data.data);
			this.setState({
				likeList:res.data.data
			});
			console.log(this.state.likeList)
		})
		.catch(err=>{
			console.log(err);
		})
	}
	render(){
		return <div className="movieList">
			<div className="guess-like-title">猜你喜欢</div>
			<div className="guess-like-wrap">
				{this.state.likeList.map((item,i)=>{
					return <div className="activity" key={i}>
					<div className="main-top">
						<a href="#" className="poster-wrap">
							<div className="video-play">
								<video></video>
							</div>
							<div className="poster">
								<img src={item.recommendContent.poster}/>
							</div>
						</a>
						<div className="info">
							<div className="title-line">
								<a className="title">
									<span className="city">[广州]</span>{item.recommendContent.properName}
								</a>
								<div className="activityTag"></div>
							</div>
							<div className="time-address">
								<span className="time">2018.12.08-12.09</span>
								<span className="split">|</span>
								<span className="address">{item.recommendContent.venueName}</span>
							</div>
							<div className="rank">
								评分&nbsp;
								<span>9.7</span>
							</div>
							<div className="price-wrap">
								<div>
									<span className="price">{item.recommendContent.lowPrice}</span>
									<span className="qi">元起</span>
								</div>
								<div className="status-text"></div>
							</div>
							<div className='promotion-info'></div>
						</div>
					</div>
				</div>
				})}
			</div>
		</div>
	}
}

export default List;