import React, { useContext } from 'react';
import { MyContext } from './App';
const PrintName = () => {
	const { name } = useContext(MyContext);
	return (
		<div>
			<p>{name}</p>
		</div>
	);
};

export default PrintName;
