import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import indexReducer from './reducer/indexReducer.js';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { Router, Route, hashHistory } from 'react-router';
import {createStore , applyMiddleware , combineReducers} from 'redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { getalltype } from './action/Action.js';
import App from './container/App.js';
import Arvhive_product from './container/Arvhive_product.js';
import LookIndustryTemplate from './container/LookIndustryTemplate.js';


//日志中间件
var logger = createLogger();

//处理加工一下reducer
var reducer = combineReducers({
	indexReducer,
	routing: routerReducer
});
 
//创建了一个store对象，使用counter来创建
var store = createStore(reducer,applyMiddleware(thunk,logger));
//创建一个History对象
const history = syncHistoryWithStore(hashHistory, store);
//此时就可以上组
ReactDOM.render(
	
	<div>
		
		<Provider store={store}>
			<Router history={history}>
			   <Route path="/" component={App}></Route>
			   <Route path='/arvhive' component={Arvhive_product}></Route>
			   <Route path='/lookindustrytemplate' component={LookIndustryTemplate}>
			        <Route path='/templatenavheader/all'></Route>
			        <Route path='/templatenavheader/police'></Route>
			        <Route path='/templatenavheader/aviation'></Route>
			        <Route path='/templatenavheader/gov'></Route>
			        <Route path='/templatenavheader/finance'></Route>
			        <Route path='/templatenavheader/fastsale'></Route>
			        
			   </Route>

			</Router>

		</Provider>

	</div>
	
	,
	document.getElementById("container")

	)
