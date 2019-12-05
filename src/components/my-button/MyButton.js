import React from 'react'
import './MyButton.css'

export const MyButton = ({ children }) => (
    <div>
        <button>{children}</button>
    </div>
)

export default MyButton