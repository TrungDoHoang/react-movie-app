import React from 'react'
import {footerBg} from '../../assets'
import './page-header.scss'

const PageHeader = (props) => {
    return (
        <div className="page-header" style={{ backgroundImage: `url(${footerBg})`}}>
            {props.children}
        </div>
    )
}

export default PageHeader
