import React from "react";
import ReactDOM from "react-dom";
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import Search from '../component/Search.js';
import { } from '../action/Action.js';
var RightSlider = ({}) => {
	
	return (
		<div>
		    <section className='W_rightslider'>
		        
		        <p className='right_search'>
		        	<input type="text" placeholder='   &nbsp;&nbsp; &nbsp;&nbsp; 搜索'/>
		        	<i className='fa fa-search'></i>
		        </p>
		           <div className="select">
				  		<h3 className="select_condition">筛选条件</h3>
				  		<p>项目进度<i className='fa fa-list-ul'></i></p>
				  		<p>行业<i className='fa fa-th-large'></i></p>
				  		<p>创建时间<i className='fa fa-calendar'></i></p>
	  				</div>
		        
		    </section>
		   		
		 
		</div>		
		)
}
//加工container
RightSlider = connect(
	(state)=>{
		return {
			 
		}
	},{
		
		
	}
)(RightSlider);

export default RightSlider;
