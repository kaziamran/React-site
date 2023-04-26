import React from 'react';
import Navrouting from './Navrouting/navrouting';
import '../../styles/css/main.css';

const Home = () => {
  return (
    <>
        <div className='_home_portfolio_wrapper'>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-lg-4 col-md-12 col-sm-12'>
                        <div className="_home_portfolio_img">
                            <img src="../../images/portfolio-img.png" class="img-fluid" alt="image" />
                        </div>
                    </div>
                    <div className='col-lg-8 col-md-12 col-sm-12'>
                        <div className="_home_portfolio_cnt">
                            <h2 className='_home_portfolio_cnt_tlt'>this is kazi emran</h2>
                            <h5 className='_home_portfolio_cnt_tlt1'>web developer</h5>
                            <p className='_home_portfolio_cnt_para'>I'm a web developer. Currently 
                                i'm working as a web designer in Appifylab. 
                                My preferred tools are React js, JavaScript,
                                 HTML5, CSS3, Bootstrap5, Wordpress and VScode etc.
                            </p>
                            <div className="_home_portfolio_cnt_btns">
                                <button className='_home_portfolio_cnt_btn1'>Download cv 
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path d="M13 10H18L12 16L6 10H11V3H13V10ZM4 19H20V12H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V12H4V19Z" fill="#fff"></path></svg>
                                </button>
                                <button className='_home_portfolio_cnt_btn2'>Hire me
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path d="M24 12L18.3431 17.6569L16.9289 16.2426L21.1716 12L16.9289 7.75736L18.3431 6.34315L24 12ZM2.82843 12L7.07107 16.2426L5.65685 17.6569L0 12L5.65685 6.34315L7.07107 7.75736L2.82843 12ZM9.78845 21H7.66009L14.2116 3H16.3399L9.78845 21Z" fill="#fff"></path></svg>
                                </button>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home;