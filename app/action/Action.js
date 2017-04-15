export const getalltype = () => (dispatch , getState) => {
	$.get("php/json.txt",function(data){
		console.log(data);
		if(typeof data != "object"){
			data = JSON.parse(data);
			console.log(data);
		}
		dispatch({"type":"GETALLTYPE" , "alltypes" : data});
	});
}
export const showbigtipbox = (torf) =>(dispatch,getState) =>{
	dispatch({'type':'SHOWBIGTIPBOX',"v" :torf});
}
