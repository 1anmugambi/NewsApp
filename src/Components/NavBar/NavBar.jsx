import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { navs } from '../Configuration/Config'

const NavBar = () => {
    return (
        <>

            <nav className="navbar bg-dark bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand">News App</a>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>

            <nav>
                <ul className='nav justify-content-center'>
                    {navs.map((item, index) => (
                        <li key={index} className='nav-item'>
                            <a href={item.page} className='nav-link'>{item.nav}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )
}

export default NavBar