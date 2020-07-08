import React, { useContext } from 'react';
import { MyContext } from './App'

const ShowName = () => {

    const { name } = useContext(MyContext)
	return (
		<div>
			<h1>{name}</h1>
		</div>
	);
};

export default ShowName;
