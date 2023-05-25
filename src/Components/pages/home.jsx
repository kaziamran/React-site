import React from 'react';
import Navrouting from './Navrouting/navrouting';
import '../../styles/css/main.css';

const Home = () => {
  return (
    <>
        <div className='_home_portfolio_wrapper'>
            <div className="_home_portfolio_elipse01">
                <img src="../../images/ellipse01.png" className='img-fluid _home_portfolio_elipse01_img' alt="image" />
            </div>
            <div className="_home_portfolio_elipse02">
                <img src="../../images/ellipse02.png" className='img-fluid _home_portfolio_elipse01_img' alt="image" />
            </div>
            <div className="_home_portfolio_elipse03">
                <img src="../../images/ellipse03.png" className='img-fluid _home_portfolio_elipse01_img' alt="image" />
            </div>
            <div className="_home_portfolio_elipse04">
                <img src="../../images/ellipse04.png" className='img-fluid _home_portfolio_elipse01_img' alt="image" />
            </div>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-lg-4 col-md-12 col-sm-12'>
                        <div className="_home_portfolio_left_wrap">
                            <div className="_home_portfolio_img">
                                <div className='_home_portfolio_img_div'>
                                    <img src="../../images/portfolio-img1.png" class="img-fluid _home_portfolio_img_tag" alt="image" />
                                </div>
                                <div className="_home_portfolio_change_img">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                        <path d="M21 15V18H24V20H21V23H19V20H16V18H19V15H21ZM21.0082 3C21.556 3 22 3.44495 22 3.9934V13H20V5H4V18.999L14 9L17 12V14.829L14 11.8284L6.827 19H14V21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082ZM8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7Z" fill="rgba(6,7,115,1)"></path>
                                    </svg>
                                </div>
                            </div>
                            <div className="_home_portfolio_social_link">
                                <div className="_home_portfolio_social_link_heading">
                                    <h5 className='_home_portfolio_social_link_heading_txt'>social links</h5>
                                </div>
                                <div className="_home_portfolio_social_link_nav">
                                    <ul className='_home_portfolio_social_link_nav_ul'>
                                        <li className='_home_portfolio_social_link_nav_li'>
                                            <a title='Linkedin' href="https://www.linkedin.com/in/kazi-emranwebdev/" className='_home_portfolio_social_link_nav_link' target='_blank'>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                                    <path d="M13.0605 8.11073L14.4747 9.52494C17.2084 12.2586 17.2084 16.6908 14.4747 19.4244L14.1211 19.778C11.3875 22.5117 6.95531 22.5117 4.22164 19.778C1.48797 17.0443 1.48797 12.6122 4.22164 9.87849L5.63585 11.2927C3.68323 13.2453 3.68323 16.4112 5.63585 18.3638C7.58847 20.3164 10.7543 20.3164 12.7069 18.3638L13.0605 18.0102C15.0131 16.0576 15.0131 12.8918 13.0605 10.9392L11.6463 9.52494L13.0605 8.11073ZM19.778 14.1211L18.3638 12.7069C20.3164 10.7543 20.3164 7.58847 18.3638 5.63585C16.4112 3.68323 13.2453 3.68323 11.2927 5.63585L10.9392 5.98941C8.98653 7.94203 8.98653 11.1079 10.9392 13.0605L12.3534 14.4747L10.9392 15.8889L9.52494 14.4747C6.79127 11.741 6.79127 7.30886 9.52494 4.57519L9.87849 4.22164C12.6122 1.48797 17.0443 1.48797 19.778 4.22164C22.5117 6.95531 22.5117 11.3875 19.778 14.1211Z" fill="#060773">
                                                    </path>
                                                </svg>
                                            </a>
                                        </li>

                                        <li title='Github' className='_home_portfolio_social_link_nav_li'>
                                            <a href="https://github.com/kaziamran" className='_home_portfolio_social_link_nav_link' target='_blank'>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z" fill="#060773"></path>
                                                </svg>
                                            </a>
                                        </li>

                                        <li title='Facebook' className='_home_portfolio_social_link_nav_li'>
                                            <a href="https://www.facebook.com/profile.php?id=100088313264770" className='_home_portfolio_social_link_nav_link' target='_blank'>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M13 9H17.5L17 11H13V20H11V11H7V9H11V7.12777C11 5.34473 11.1857 4.69816 11.5343 4.04631C11.8829 3.39446 12.3945 2.88288 13.0463 2.53427C13.6982 2.18565 14.3447 2 16.1278 2C16.6498 2 17.1072 2.05 17.5 2.15V4H16.1278C14.8041 4 14.401 4.07784 13.9895 4.29789C13.6862 4.46011 13.4601 4.68619 13.2979 4.98951C13.0778 5.40096 13 5.80407 13 7.12777V9Z" fill="#060773"></path>
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
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
                                <a href='https://drive.google.com/file/d/1j2VTZlGG4YYFgo_Rhl95Zkdhrgb8Uh-0/view?usp=share_link' className='_home_portfolio_cnt_btn1' target='_blank'>
                                    Download cv
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path d="M13 10H18L12 16L6 10H11V3H13V10ZM4 19H20V12H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V12H4V19Z" fill="#fff"></path></svg>
                                </a>
                                <a href='https://wa.me/+8801866749596' className='_home_portfolio_cnt_btn2' target='_blank'> 
                                    Hire me
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path d="M24 12L18.3431 17.6569L16.9289 16.2426L21.1716 12L16.9289 7.75736L18.3431 6.34315L24 12ZM2.82843 12L7.07107 16.2426L5.65685 17.6569L0 12L5.65685 6.34315L7.07107 7.75736L2.82843 12ZM9.78845 21H7.66009L14.2116 3H16.3399L9.78845 21Z" fill="#fff"></path></svg>
                                </a>
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