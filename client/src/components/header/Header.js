import React from 'react'
import { Link } from 'react-router-dom'
import Menu from './Menu'
import SearchBar from './SearchBar'

const Header = () => {

    return (
        <div className="header bg-light">
            <nav className="navbar navbar-expand-lg navbar-light justify-content-between align-middle">
                <Link to="/" className="logo">
                    <h1 className="navbar-brand text-uppercase p-0 m-0"
                    onClick={() => window.scrollTo({top: 0})}>
                        Nexus
                    </h1>
                    <h5 className="text-dark">a new way to connect</h5>
                </Link>
                <Menu />
                <SearchBar />
            </nav>
        </div>
    )
}

export default Header
