import React from 'react';
import ReactDOM from 'react-dom';
import './styles/base.css';
import App from './App';

//引入路由
import {HashRouter} from 'react-router-dom';

ReactDOM.render(
	<HashRouter>
		<App />
	</HashRouter>,
	document.getElementById('root')
);

