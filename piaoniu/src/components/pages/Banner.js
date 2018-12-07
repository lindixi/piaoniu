import React from 'react';
import axios from 'axios';

import '../../styles/banner.less';

import { Carousel, WingBlank } from 'antd-mobile';

//引入css样式
import 'antd-mobile/dist/antd-mobile';



class Banner extends React.Component{
	constructor(){
		super();
		this.state = {
		data:[{
			src:'https://img.piaoniu.com/banner/528d8916f9f71af731e2d7d4aa0dc9cef17a8327.jpg'
			},{
				src:'https://img.piaoniu.com/banner/55dad3bbd8a038a5fd87225dcc7f88ccc3d4974a.jpg'
			},{
				src:'https://img.piaoniu.com/banner/7c6ddcaef1375f377d5f813c66718cb0b61907ba.jpg'
			},{
				src:'https://img.piaoniu.com/banner/d9df13eed5176444145d02600180a496d37a56a2.jpg'
			},{
				src:'https://img.piaoniu.com/banner/a162596d61d7ec4a259c6f9fbda7d3b8717b2a5c.jpg'
			},{
				src:'https://img.piaoniu.com/banner/4c8c415b9d0341290c7110402b0e2fb5ef381554.jpg'
			}],
			imgHeight: 125
		}
	}
	componentWillMount(){
		axios.get('/pnapi/api/v2/home/recommends',{
			params:{
				pageIndex:1,
				pageSize:10
			}
		}).then(res=>{
		console.log(res);
		}).catch(error=>{
			console.log(error);
		})
	}
	
	render(){
		return <div className="banner">
			<div className="container">
			<WingBlank>
		        <Carousel
		          autoplay={false}
		          infinite

		        >
		          {this.state.data.map(val => (
		            <a
		              key={val}
		              href="#"
		              style={{ display: 'inline-block', width: '100%' }}
		            >
		              <img
		                src={val.src}
		                alt=""
		                style={{ width: '100%',verticalAlign: 'top' }}
		                onLoad={() => {
		                  // fire window resize event to change height
		                  window.dispatchEvent(new Event('resize'));
		                  this.setState({ imgHeight: 'auto' });
		                }}
		              />
		            </a>
		          ))}
		        </Carousel>
		      </WingBlank>
			</div>
		</div>
	}
}


export default Banner;