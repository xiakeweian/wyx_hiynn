export default (state,action) => {
		if(state === undefined){
			return {
				'alltypes':[],
				'page':0,
				'lock':true,
				'showbigtipbox':false,
				'showsmalltipbox':false,
				'submit':false
			}
		}
		if(action.type === "GETALLTYPE"){
		//这里改变state对象
		return {
			...state,
			"alltypes" : action.alltypes 
		}
	}
		if(action.type === 'SHOWBIGTIPBOX'){
			return {
				...state,
			'showbigtipbox':true
			}
			
		}
		if(action.type === 'SHOWSMALLTIPBOX'){
			return {
				...state,
			'showsmalltipbox':true
			}
			
		}


		return state;
}
