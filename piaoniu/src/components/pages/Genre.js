import React from 'react';
import {Route,NavLink,Redirect,withRouter} from 'react-router-dom';
import '../../styles/genre.less';

class Genre extends React.Component{
	constructor(){
		super();
		this.state = {
		list:[{
				src:'https://img.piaoniu.com/icon/home/ych@3x.png',
				title:'话剧歌剧',
				path:'/dramas'
				},{
					src:'https://img.piaoniu.com/icon/home/hjgj@3x.png',
					title:'演唱会',
					path:'/concerts'
				},{
					src:'https://img.piaoniu.com/icon/home/xxzl@3x.png',
					title:'休闲展览',
					path:'/exhibits'
				},{
					src:'https://img.piaoniu.com/icon/home/tyss@3x.png',
					title:'体育赛事',
					path:'/spaots'
				},{
					src:'https://img.piaoniu.com/icon/home/yyh@3x.png',
					title:'音乐会',
					path:'/musics'
				},{
					src:'https://img.piaoniu.com/icon/home/rtqz@3x.png',
					title:'儿童亲子',
					path:'/family'
				},{
					src:'https://img.piaoniu.com/icon/home/wdbl@3x.png',
					title:'舞蹈芭蕾',
					path:'/dance'
				},{
					src:'https://img.piaoniu.com/icon/home/xqzy@3x.png',
					title:'戏曲综艺',
					path:'/zongyi'
				}
			]
		}
	}
	
	render(){
		let {list}=this.state; 
		return <div className="genre">
			<div className="inner">
			{
				list.map((item,key)=>{
					return <NavLink to={item.path} key={key}>
						<img src={item.src}/>
						<div className="title">{item.title}</div>
					</NavLink>
				})
			}

			</div>
		</div>
	}
}

export default Genre;