/*
* @Author: wuyanxia
* @Date:   2017-04-14 19:14:50
* @Last Modified by:   wuyanxia
* @Last Modified time: 2017-04-14 19:45:37
*/

'use strict';
import React,{Component} from "react";
import ReactDOM from "react-dom";
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import {showbigtipbox} from '../action/Action.js';
class BigTipBox extends Component{
	
	// 组件的生命周期
	componentDidMount(){
		$("#bigtipbox").css({"margin-top" : -1000});
		$("#bigtipbox").animate({"margin-top" : -180});
	 
	}
	render(){
		return (
				  <div className='bigtipbox'>
					  <form action="">
					      <h2>创建产品</h2>
					      <p>
					      		*产品名称：<input type="text" placeholder='新建产品1'  />
					      </p>
					      <p>
					      		*行业类别：
					      		<select>
							      		<option value="公安">公安</option>
							      		<option value="航空">航空</option>
							      		<option value="政府">政府</option>
							      		<option value="金融">金融</option>
							      		<option value="快销">快销</option>
					      		</select>
					      </p>
					      <p>
					      		描述：<textarea cols="20" rows="10"></textarea>
					      </p>
					      <p>
					      *分辨率：
					      <select>
					          <option value="1920pt*1080pt">1920pt*1080pt</option>
					          <option value="1366pt*768px">1366pt*768px</option>
					      </select>
					      </p>
					      <p>+从行业模板创建产品</p>
					      <p>
					         <button>创建空白产品</button>
					      </p>
					   </form>

				  </div>
				)
	}
}
//加工container
BigTipBox = connect(
	(state)=>{
		return {
			 
		}
	},{
		
		
	}
)(BigTipBox);

export default BigTipBox;