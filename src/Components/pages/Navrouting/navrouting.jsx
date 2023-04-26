import React from 'react';
import '../../../styles/css/main.css';
import { NavLink } from 'react-router-dom';


const Navrouting = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark _home_portfolio_navbar">
            <div className="container">
                <button className="navbar-toggler _toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse _home_portfolio_navbar" id="navbarNav">
                    <ul className="navbar-nav _home_portfolio_nav_ul">
                        <li className="nav-item dropdown _home_portfolio_nav_li">
                            <NavLink className='_home_portfolio_nav_link'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.51472 4.92893L4.92893 3.51472L7.05025 5.63604L5.63604 7.05025L3.51472 4.92893ZM16.9497 18.364L18.364 16.9497L20.4853 19.0711L19.0711 20.4853L16.9497 18.364ZM19.0711 3.51472L20.4853 4.92893L18.364 7.05025L16.9497 5.63604L19.0711 3.51472ZM5.63604 16.9497L7.05025 18.364L4.92893 20.4853L3.51472 19.0711L5.63604 16.9497ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z" fill="rgba(6,7,115,1)"></path></svg>
                            </NavLink>
                        </li>
                        <li className="nav-item dropdown _home_portfolio_nav_li">
                            <NavLink to={'/'} className='_home_portfolio_nav_link'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M19 21.0001H5C4.44772 21.0001 4 20.5524 4 20.0001V11.0001L1 11.0001L11.3273 1.61162C11.7087 1.26488 12.2913 1.26488 12.6727 1.61162L23 11.0001L20 11.0001V20.0001C20 20.5524 19.5523 21.0001 19 21.0001ZM6 19.0001H18V9.15757L12 3.70302L6 9.15757V19.0001ZM9 10.0001H15V16.0001H9V10.0001ZM11 12.0001V14.0001H13V12.0001H11Z" fill="rgba(6,7,115,1)"></path></svg>
                            </NavLink>
                        </li>
                        <li className="nav-item dropdown _home_portfolio_nav_li">
                            <NavLink to={'/about'} className='_home_portfolio_nav_link'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M20 22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13Z" fill="rgba(6,7,115,1)"></path></svg>
                            </NavLink>
                        </li>
                        <li className="nav-item dropdown _home_portfolio_nav_li">
                            <NavLink to={'/contact'} className='_home_portfolio_nav_link'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z" fill="rgba(6,7,115,1)"></path></svg>
                            </NavLink>
                        </li>
                    </ul>                        
                </div>                                                                                                    
            </div>
        </nav>
    </>
  )
}

export default Navrouting;