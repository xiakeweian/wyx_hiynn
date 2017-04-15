import React,{Component}from "react";
import ReactDOM from "react-dom";
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import LookTemplate from '../component/LookTemplate.js';
import { } from '../action/Action.js';
class Arvhive extends Component {
	componentDidMount(){

	}

	render(){
		return (
		<div>
    
		 
		</div>		
		)
	}
}
//加工container
Arvhive = connect(
	(state)=>{
		return {
			 
		}
	},{
		
		
	}
)(Arvhive);

export default Arvhive;
