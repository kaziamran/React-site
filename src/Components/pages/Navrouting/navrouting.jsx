import React from 'react';
import '../../../styles/css/main.css';
import { NavLink } from 'react-router-dom';


const Navrouting = () => {
  return (
    <>
        <div className="collapse navbar-collapse _home_portfolio_navbar" id="navbarNav">
            <ul className="navbar-nav _home_portfolio_nav_ul">
                <li className="nav-item dropdown _home_portfolio_nav_li">
                    <NavLink to={'/'} className='_home_portfolio_nav_link'>Home</NavLink>
                </li>
                <li className="nav-item dropdown _home_portfolio_nav_li">
                    <NavLink to={'/about'} className='_home_portfolio_nav_link'>About</NavLink>
                </li>
                <li className="nav-item dropdown _home_portfolio_nav_li">
                    <NavLink to={'/contact'} className='_home_portfolio_nav_link'>Contact</NavLink>
                </li>
            </ul>                        
        </div>
    </>
  )
}

export default Navrouting;