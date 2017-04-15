import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import { Link, browserHistory } from 'react-router';
class User extends Component {
	componentDidMount(){

	}
	render(){
		return (
	
		   <select className='downmenu'>   
        			<option value="1">1</option>   
        			<option value="2">2</option>   
        			<option value="3">3</option>   
        			<option value="4">4</option>   
        			<option value="5">5</option>   
      		</select> 
		
		)
	}
}
User = connect(
	(state)=>{
		return {
         
		}
	},
		{

		}
	)(User);
	export default User;
