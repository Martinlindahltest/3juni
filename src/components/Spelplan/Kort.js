import React from 'react'
import './Kort.css'

export default function Kort(props) {
    return (
        <div onClick={() => console.log('jsxkort')} className="JSXkort">
            JSXKORT {props.id}
        </div>
    )
}