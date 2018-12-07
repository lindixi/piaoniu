import React from 'react';

import axios from 'axios';

import '../../styles/free.less';

class Free extends React.Component{
	constructor(){
		super();
		this.state={
			freeList:[]
		}
	}

	render(){
		return <div className="free">
			<div className="container">
				<img src="https://img.piaoniu.com/banner/2f4f2d8fdc3fbc9188d24eba434754d6ebdbad72.jpg"/>
			</div>
		
		
		</div>
	}
}

export default Free;