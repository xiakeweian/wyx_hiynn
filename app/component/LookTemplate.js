import React,{Component}from "react";
import ReactDOM from "react-dom";
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { } from '../action/Action.js';
class LookTemplate extends Component {
	
	componentDidMount(){
	 
	}
	render(){
		return (
				<div>
				  <Link className='W_looktemplate' to='/lookindustrytemplate'>查看行业模板</Link>
				 
				</div>		
				)
	}
}
//加工container
LookTemplate = connect(
	(state)=>{
		return {
			 
		}
	},{
		
		
	}
)(LookTemplate);

export default LookTemplate;
