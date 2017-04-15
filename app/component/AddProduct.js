/*
* @Author: wuyanxia
* @Date:   2017-04-14 18:56:40
* @Last Modified by:   wuyanxia
* @Last Modified time: 2017-04-14 19:28:08
*/

'use strict'
import React,{Component} from "react";
import ReactDOM from "react-dom";
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import {} from '../action/Action.js';
import BigTipBox from './BigTipBox.js';
class AddProduct extends Component{
	
	// 组件的生命周期
	componentDidMount(){
	 
	}
	render(){
		return (
			<div>添加</div>
				  
				)
	}
}
//加工container
AddProduct = connect(
	(state)=>{
		return {
			 
		}
	},{
		
		
	}
)(AddProduct);

export default AddProduct;
