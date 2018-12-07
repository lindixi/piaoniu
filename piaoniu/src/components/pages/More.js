import React from 'react';

import '../../styles/more.less';

class More extends React.Component{
	render(){
		return <a href="#" className="more-b">
			<span>更多精彩内容待你发现</span>
			<span className="arrow"></span>
		</a>
	}
}


export default More;