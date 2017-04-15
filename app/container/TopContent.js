import React from 'react';
import {connect} from 'react-redux';
import { Link, browserHistory } from 'react-router';
import User from '../component/User.js';
import {getalltype} from '../action/Action.js';

var TopContent = () => {
	return (
		<div>
			<header className='topcontent'>
				<h1 className='logo'>
					图易
				</h1>
				
				<User></User>
          	

			</header>
		</div>

		)
}
TopContent = connect(
	(state)=>{
		return {
         
		}
	},
		{

		}
	)(TopContent);
	export default TopContent;
