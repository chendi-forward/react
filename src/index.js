import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router'

import App from './components/app';
import NewsContainer from './components/newsContainer';
import NewsDetail from './components/newsDetail';
import UserCenter from './components/userCenter';



render((
	<Router history={hashHistory}>
		<Route path='/' component={App}>
			<IndexRoute component={NewsContainer}></IndexRoute>
			<Route path='/detail/:uniquekey' component={NewsDetail} />
			<Route path='/usercenter' component={UserCenter} />
		</Route>
	</Router>
), document.getElementById('root'));

