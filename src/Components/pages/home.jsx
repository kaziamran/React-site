import React from 'react';
import '../../styles/css/main.css'

const Home = () => {
  return (
    <div>
        <div className='_home_portfolio_wrapper'>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-lg-5 col-md-12 col-sm-12'>
                        <div className="_home_portfolio_img">
                            <img src="../../images/portfolio-img.png" class="img-fluid" alt="image" />
                        </div>
                    </div>
                    <div className='col-lg-7 col-md-12 col-sm-12'>
                        <div className="_home_portfolio_cnt">
                            <h2 className='_home_portfolio_cnt_tlt'>this is kazi emran</h2>
                            <h5 className='_home_portfolio_cnt_tlt1'>web developer</h5>
                            <p className='_home_portfolio_cnt_para'>I'm a web developer. Currently 
                                i'm working as a web designer in Appifylab. 
                                My preferred tools are React js, JavaScript,
                                 HTML5, CSS3, Bootstrap5, Wordpress and VScode etc.
                            </p>
                            <div className="_home_portfolio_cnt_btns">
                                <button>Download cv</button>
                                <button>Hire me</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home;