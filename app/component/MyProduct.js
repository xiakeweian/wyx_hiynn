import React,{Component}from "react";
import ReactDOM from "react-dom";
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import LookTemplate from '../component/LookTemplate.js';
import { } from '../action/Action.js';
class MyProduct extends Component {
	componentDidMount(){

	}
	render(){
		return (
		<div>
		   	// <Link className='product' to='/'>我的产品（42）</Link>
		   
		 
		</div>		
		)
	}
}

//加工container
MyProduct = connect(
	(state)=>{
		return {
			 
		}
	},{
		
		
	}
)(MyProduct);

export default MyProduct;
