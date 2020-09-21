import React from 'react';

const SearchBox = ({searchChange})=>{
	return(
		<div className = "pa2">
			<input className = "pa3 b b--green bg-lightest-blue" 
				type="text" 
				placeholder="Search Robot"
				onChange = {searchChange}
				/>
		</div>
	)
}

export default SearchBox;