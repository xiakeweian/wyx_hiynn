import React from "react";
import ReactDOM from "react-dom";
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import TopContent from './TopContent.js';
import NavHeader from './NavHeader.js';
import RightSlider from './RightSlider.js';
import Content from './Content.js';
import {getalltype} from '../action/Action.js';
var Arvhive_product = ({children,getalltype}) => {

	return (
		<div className='W_ArchiveProduct'>
				<TopContent></TopContent>
				<NavHeader></NavHeader>
				<RightSlider></RightSlider>
				 <Content></Content>	
				   	{children}
				   
		 
		</div>		
		)
}
//加工container
Arvhive_product = connect(
	(state)=>{
		return {
			 
		}
	},{
		getalltype
		
	}
)(Arvhive_product);

export default Arvhive_product;
