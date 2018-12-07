import React from 'react';
import List from '../List';
import '../../../styles/concerts.less';



class Concerts extends React.Component{
	render(){
		return <div className="concerts">
			<List/>
		</div>
	}
}

export default Concerts;