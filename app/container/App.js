import React from "react";
import ReactDOM from "react-dom";
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import TopContent from './TopContent.js';
import NavHeader from './NavHeader.js';
import RightSlider from './RightSlider.js';
import Content from './Content.js';
import { getalltype } from '../action/Action.js';

var App = ({children,getalltype}) => {
	getalltype();
	return (
		<div>
		   		<TopContent></TopContent>
		   		<NavHeader></NavHeader>
		   		<RightSlider></RightSlider>
		   		<Content></Content>
		   		{children}
		   
		 
		</div>		
		)
}
//加工container
App = connect(
	(state)=>{
		return {
			 
		}
	},{
		getalltype
		
	}
)(App);

export default App;
