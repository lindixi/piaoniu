import React from 'react';

import axios from 'axios';

import '../../styles/hot.less';

//axios.defaults.baseURL = 'https://localhost:8000';

class Hot extends React.Component{

	constructor(){

		super();

		this.state={
			hotList:[]
    	}
    }
    
    componentWillMount(){


    	axios.get('/pnapi/api/v1/activities/hot',{
    		params:{
    			pageIndex:1,
    			pageSize:10
    		}
    		}).then(res=>{
    			let data = res.data.data
				this.setState({
					hotList:data
				})
    		console.log(this.state.hotList);
    		}).catch(error=>{
    			console.log(error);
    	})
    }

	

	render(){

		return <div className="hot">

			<div className="activity-floor">

				<div className="header-hot">

					<div className="title">近期热门</div>

					<a href="#" className="more">全部</a>

				</div>

				<div className="activities">
					<div className="wrap">
							{this.state.hotList.map(item=>{
								return <div className="activity-floor-item" key={item}>
											<a href="#">
												<div className="poster">
													<img src={item.poster}/>
													<p className="count">22万</p>
												</div>
				
												<div className="name">{item.properName}</div>
				
												<div className="price">
				
													<span className="price-num">￥{item.lowPrice}</span>
				
													<span className="price-desc">起</span>
				
												</div>
				
											</a>
	
										</div>
							})}
					</div>

				</div>

			</div>

		</div>

	}

}

export default Hot;
