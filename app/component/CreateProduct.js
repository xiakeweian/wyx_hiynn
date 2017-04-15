import React,{Component} from "react";
import ReactDOM from "react-dom";
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { } from '../action/Action.js';
class CreateProduct extends Component{
	
	// 组件的生命周期
	componentDidMount(){
	 
	}
	render(){
		return (
				<div>

				   <a className='W_createproduct'> 创建产品</a>
				 
				</div>		
				)
	}
}
//加工container
CreateProduct = connect(
	(state)=>{
		return {
			 
		}
	},{
		
		
	}
)(CreateProduct);

export default CreateProduct;
