import React, { Component } from 'react';
import { Input } from 'antd';

// const { Search } = Input;
class Search extends Component{
	// constructor(props){
	// 	super(props);

	// }
	render(){
		return(
  		<div>
    	<br />
    	<Input placeholder="Song Search" onSearch={value => console.log(value)} enterButton />
    	<br />
  		</div>
  )
	}
}
export default Search;