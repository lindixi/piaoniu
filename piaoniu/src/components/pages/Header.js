import React from 'react';
import axios from 'axios';
import {Route,withRouter} from 'react-router-dom';

import '../../styles/header.less';

class Header extends React.Component{
	searchClick(){
		
	}
	render(){
		return <div className="header">
			<div className="city-picker">广州</div>
			<div className="ui-searchbox">
				<div className="ui-inner">
					<div className="ui-wrap">
						<div className="ui-icon icon-search"></div>
						<span className="ui-placeholder">搜索明星、演出、场馆</span>
						
					</div>
					
				</div>
			</div>
			<a className="person-icon"></a>
		</div>
	}
}

Header = withRouter(Header);
export default Header;