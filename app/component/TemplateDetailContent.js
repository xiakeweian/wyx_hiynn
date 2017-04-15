import React,{Component}from "react";
import { connect } from 'react-redux';
import { } from '../action/Action.js';
class TemplateDetailContent extends Component{
	
	// 组件的生命周期
	componentDidMount(){
	     
	}
	maplist(dataarr,index){
		return dataarr.map((item)=>{
			return {

			}
			

		})


	}
	render(){
		return (
			<div className='DetailContent'>
			    <img src='/assets/images/DetailContent.jpg'/>
			    <h4 className='title_name'>重庆指挥中心重庆指挥中心重庆指挥中心</h4>
			    <div className='ProductManager'>负责人:郭志强</div>
			    <div className='TwoPart'> 
			    	<span>公安，指挥中心</span>
			    	<span>2017.4.13创建</span>
			    </div>
			    <ul className='bottom_part'>
				    <li>添加</li>
				    <li>上传</li>
				    <li className='lastone'>...</li>
			    </ul>

			</div>
			)

	}
}
TemplateDetailContent = connect(
	(state)=>{
		return {
			
		}
	},{
		
	}
)(TemplateDetailContent);

export default TemplateDetailContent;