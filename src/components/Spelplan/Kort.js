import React from 'react'
import './Kort.css'

export default function Kort(props) {
    return (
        <div onClick={() => console.log(props.id)} className="JSXkort">
            JSXKORT {props.id}
        </div>
    )
}