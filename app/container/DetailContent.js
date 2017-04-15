import React,{Component}from "react";
import { connect } from 'react-redux';
import { getalltype } from '../action/Action.js';
var DetailContent = ({alltypes}) => {
		
		return (
				<div className='DetailContent'>
				    <img src='/assets/images/DetailContent.jpg'/>
				    <h4 className='title_name'>{alltypes.myproduct[0].title}</h4>
				    <div className='ProductManager'>负责人:郭志强</div>
				    <div className='TwoPart'> 
				    	<span>公安，指挥中心</span>
				    	<span>2017.4.13创建</span>
				    </div>
				    <ul className='bottom_part'>
					    <li className='addproduct' onClick={()=>{event.stopPropagation();this.props.showbigtipbox(false)}}>添加</li>
					    <li>上传</li>
					    <li className='lastone'>...</li>
				    </ul>
				</div>
			)
}
DetailContent = connect(
	(state)=>{
		return {
			"alltypes" : state.indexReducer.alltypes
			
			
		}
	},{
		getalltype
	}
)(DetailContent);

export default DetailContent;