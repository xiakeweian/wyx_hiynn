import React from "react";
import ReactDOM from "react-dom";
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import MyProduct from '../component/MyProduct.js';
import Arvhive from '../component/Arvhive.js';
import LookTemplate from '../component/LookTemplate.js';
import CreateProduct from '../component/CreateProduct.js';
import { } from '../action/Action.js';
var NavHeader = ({}) => {
	
	return (
		<div>
		   		<nav className='navheader'>
		   				<Link className='product' to='/'>我的产品（42）</Link>
		   				<Link  className='arvhive' to='/arvhive'>. 归档产品（14）</Link>
		   				<Link className='W_looktemplate' to='/lookindustrytemplate'>查看行业模板</Link>  
		   				<Link className='W_createproduct' to='/createproduct'> 创建产品</Link>
		   		
		   		</nav>
		   
		 
		</div>		
		)
}
//加工container
NavHeader = connect(
	(state)=>{
		return {
			 
		}
	},{
		
		
	}
)(NavHeader);

export default NavHeader;
