import React from "react";
import ReactDOM from "react-dom";
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import TemplateDetailContent from '../component/TemplateDetailContent.js';
import { } from '../action/Action.js';
var TemplateContent = ({}) => {
	
	return (
		<div className='W_content'>
		   	<TemplateDetailContent></TemplateDetailContent>
		   	<TemplateDetailContent></TemplateDetailContent>
		   	<TemplateDetailContent></TemplateDetailContent>
		   	<TemplateDetailContent></TemplateDetailContent>
		   	<TemplateDetailContent></TemplateDetailContent>
		   	<TemplateDetailContent></TemplateDetailContent>
		   	<TemplateDetailContent></TemplateDetailContent>
		   	<TemplateDetailContent></TemplateDetailContent>
		   	<TemplateDetailContent></TemplateDetailContent>
		   	<TemplateDetailContent></TemplateDetailContent>
		   	<TemplateDetailContent></TemplateDetailContent>
		   	<TemplateDetailContent></TemplateDetailContent>
		  
		</div>		
		)
}
//加工container
TemplateContent = connect(
	(state)=>{
		return {
			 
		}
	},{
		
		
	}
)(TemplateContent);

export default TemplateContent;
