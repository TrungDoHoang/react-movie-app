import React, { useEffect, useRef } from 'react'
import {logo} from '../../assets'
import { Link, useLocation } from 'react-router-dom'
import './header.scss'

function Header() {
    const navRef = useRef([
        {
            display: 'Home',
            path: '/'
        },
        {
            display: 'Movies',
            path: '/movie'
        },
        {
            display: 'TV Series',
            path: '/tv'
        }
    ]).current

    const { pathname } = useLocation()
    const headerRef = useRef()
    const active = navRef.findIndex(e => e.path === pathname)

    useEffect(() => {
        const shrinkHeader = () => {
            if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
                headerRef.current.classList.add('shrink')
            } else {
                headerRef.current.classList.remove('shrink')
            }
        }
        window.addEventListener('scroll', shrinkHeader)
        
        return () => {
            window.removeEventListener('scroll', shrinkHeader)
        }
    },[])
    return (
        <div ref={headerRef} className="header">
            <div className="header__wrap container">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                    <Link to="/" >tMovie</Link>
                </div>
                <ul className="header__nav">
                    {
                        navRef.map((e, index) => (
                            <li key={index} className={ index === active ? 'active' : ''}>
                                <Link to={e.path}>
                                    {e.display}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Header
