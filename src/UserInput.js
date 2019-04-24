import React  from 'react';

const UserInput = (props) => {

	return (
		<div>
			<input 
			type="text" 
			onChange = {props.changed} 
			value ={props.currentUsername}
			/>
		</div>
	)
	
}

export default UserInput