import React, { Component } from 'react';
import { Input } from 'antd';

class Search extends Component{
	constructor(props){
		super(props);
		this.state={
			results:[],
		};
	}

	handleOnInputChange = (event) => {
		const query=event.target.value;
		let results=[];
		
		if(query.length)
		{
			this.props.songs.map((item,idx)=>{
				if(item.name.includes(query)){
					results[idx]=item;
				}
			});
		this.state.results=results;
		// console.log(results);
		}
		this.props.callbackFromParent(this.state.results);
	}

	

	render(){
		return(
  		<label>
    	
    	<Input placeholder="Song Search" onChange={this.handleOnInputChange} enterButton />
    	<i class="fa fa-search" aria-hidden="true"/>
    	
  		</label>
  )
	}
}
export default Search;