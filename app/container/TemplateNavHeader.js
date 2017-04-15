import React from 'react';
import ReactDOM from 'react-dom';
import {Link,browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {getalltype} from '../action/Action.js';
var TemplateNavHeader = ({getalltype}) => {
	return (
		<div className='TemplateNavHeader'>
		    <div className='industrytemplatenav'>  <i className='fa fa-th-large'></i> 行业模板</div>
		    <ul className='templatenavlist'>
		    	<li><a><Link to='/templatenavheader/all'>全部</Link></a></li>
		    	<li><a><Link to='/templatenavheader/police'>公安</Link></a></li>
		    	<li><a><Link to='/templatenavheader/aviation'>航空</Link></a></li>
		    	<li><a><Link to='/templatenavheader/gov'>政府</Link></a></li>
		    	<li><a><Link to='/templatenavheader/finance'>金融</Link></a></li>
		    	<li><a><Link to='/templatenavheader/fastsale'>快销</Link></a></li>
		    </ul>
		</div>
		)
}
TemplateNavHeader = connect(
	(state)=>{
		return {
			 
		}
	},{
		getalltype
		
	}
)(TemplateNavHeader);

export default TemplateNavHeader;
