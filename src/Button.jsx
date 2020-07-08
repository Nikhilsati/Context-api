import React, { useContext } from 'react'
import { MyContext } from './App'
const Button = () => {
    const { setName } = useContext(MyContext)
    const nameChange = () => {
        setName("Kunal")
    }
    return (
        <div>
            <button onClick={nameChange}>ChangeName</button>
        </div>
    )
}

export default Button
