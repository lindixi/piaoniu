import React from 'react';
import '../../styles/header.less';

class Header extends React.Component{
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


export default Header;