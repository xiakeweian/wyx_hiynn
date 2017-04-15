import React from "react";
import ReactDOM from "react-dom";
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import TopContent from './TopContent.js';
import NavHeader from './NavHeader.js';
import TemplateNavHeader from './TemplateNavHeader.js';
import TemplateContent from './TemplateContent.js';
import RightSlider from './RightSlider.js';
import {getalltype} from '../action/Action.js';
var LookIndustryTemplate = ({children,getalltype}) => {
	return (
		<div className='W_LookIndustryTemplate'>
				<TopContent></TopContent>
				<TemplateNavHeader></TemplateNavHeader>
				<TemplateContent></TemplateContent>
				<RightSlider></RightSlider>
		   		{children}
		   
		 
		</div>		
		)
}
//加工container
LookIndustryTemplate = connect(
	(state)=>{
		return {
			 
		}
	},{
		getalltype
		
	}
)(LookIndustryTemplate);

export default LookIndustryTemplate;
