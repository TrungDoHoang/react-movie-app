import React from 'react'
import './footer.scss'
import { logo, footerBg } from '../../assets'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer
            className="footer"
            style={{ backgroundImage: `url(${footerBg})` }}
        >
            <div className="footer__content container">
                <div className="footer__content__logo">
                    <div className="logo">
                        <img src={logo} alt="Logo" />
                        <Link to="/" >tMovie</Link>
                    </div>
                </div>
                <div className="footer__content__menus">
                    <div className="footer__content__menu">
                        <Link to="/" >Home</Link>
                        <Link to="/" >Contact us</Link>
                        <Link to="/" >Term of Services</Link>
                        <Link to="/" >About us</Link>
                    </div>
                    <div className="footer__content__menu">
                        <Link to="/" >Live</Link>
                        <Link to="/" >FAQ</Link>
                        <Link to="/" >Premium</Link>
                        <Link to="/" >Privacy policy</Link>
                    </div>
                    <div className="footer__content__menu">
                        <Link to="/" >You must watch</Link>
                        <Link to="/" >Recent releases</Link>
                        <Link to="/" >Top IMDB</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
