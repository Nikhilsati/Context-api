import React, { createContext, useState } from 'react';
import './App.css';
import ShowName from './ShowName'
import PrintName from './PrintName'
import Button from './Button'
//Context name should capitalize, null is the initial value... it can be anything.. make sure to export
export const MyContext = createContext(null);

const App = () => {
	const [ name, setName ] = useState("Nikhil")
	return (
		<MyContext.Provider value={{ name, setName }}>
			<div>
				<ShowName />
				<PrintName/>
				<Button />
			</div>
		</MyContext.Provider>
	);
};

export default App;
