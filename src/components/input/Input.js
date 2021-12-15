import React from 'react'
import './input.scss'

const Input = (props) => {
    return (
        <input 
            className={props.className}
            value={props.value}
            type={props.type}
            placeholder={props.placeholder}
            onChange={props.onChange ? e => props.onChange(e) : null}
        />
    )
}

export default Input
