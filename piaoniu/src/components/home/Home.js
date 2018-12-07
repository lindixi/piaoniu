import React from 'react';
import Top from '../commons/Top';
import Header from '../pages/Header';
import Genre from '../pages/Genre';
import Banner from '../pages/Banner';
import HomeOp from '../pages/HomeOp';
import Service from '../pages/Service';
import Hot from '../pages/Hot';
import Discount from '../pages/Discount';
import Free from '../pages/Free';
import More from '../pages/More';
import List from '../pages/List';


class Home extends React.Component{
	render(){
		return <div>
			<Top/>
			<Header/>
			<Genre/>
			<Banner/>
			<HomeOp/>
			<Service/>
			<Hot/>
			<Discount/>
			<Free/>
			<More/>
			<List/>
		</div>
	}
}

export default Home;