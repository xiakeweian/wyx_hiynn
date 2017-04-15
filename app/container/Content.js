import React from "react";
import ReactDOM from "react-dom";
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import DetailContent from '../container/DetailContent.js';
import { } from '../action/Action.js';
var Content = ({}) => {
	
	return (
		<div className='W_content'>
		

		   	
		   	<DetailContent></DetailContent>
		   	<DetailContent></DetailContent>
		   	<DetailContent></DetailContent>
		   	<DetailContent></DetailContent>
		   	<DetailContent></DetailContent>
		   	<DetailContent></DetailContent>
		   	<DetailContent></DetailContent>
		   	<DetailContent></DetailContent>
		   	<DetailContent></DetailContent>
		   	<DetailContent></DetailContent>
		   	<DetailContent></DetailContent>
		   	<DetailContent></DetailContent>
		
		</div>		
		)
}
//加工container
Content = connect(
	(state)=>{
		return {
			 
		}
	},{
		
		
	}
)(Content);

export default Content;
