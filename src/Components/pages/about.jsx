import React from 'react';
import '../../styles/css/main.css';

const About = () => {
  return (
    <>
        <div className="_about_portfolio_wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="_about_portfolio_title">
                  <h2 className='_about_portfolio_title1'>about <span className='_about_portfolio_title1_span'>me</span>
                  </h2>
                  <span className='_about_portfolio_title_bg_span'>about me</span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="_about_portfolio_left_info">
                    <h3 className='_about_portfolio_left_info_txt'>
                      personal infos
                    </h3>
                    <div className="_about_portfolio_left_info_list">
                      <ul className='_about_portfolio_left_info_list_ul'>
                        <li className='_about_portfolio_left_info_list_li'>
                          <p className='_about_portfolio_left_info_list_li_para'>Name : kazi md. emran</p>
                        </li>
                        <li className='_about_portfolio_left_info_list_li'>
                          <p className='_about_portfolio_left_info_list_li_para'>Phone : +8801866-749596</p>
                        </li>
                        <li className='_about_portfolio_left_info_list_li'>
                          <p className='_about_portfolio_left_info_list_li_para'>Email : kaziamran4@gmail.com</p>
                        </li>
                      </ul>
                    </div>

                    <div className="_home_portfolio_cnt_btns">
                        <a href='https://drive.google.com/file/d/1j2VTZlGG4YYFgo_Rhl95Zkdhrgb8Uh-0/view?usp=share_link' className='_home_portfolio_cnt_btn1' target='_blank'>
                            Download cv
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path d="M13 10H18L12 16L6 10H11V3H13V10ZM4 19H20V12H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V12H4V19Z" fill="#fff"></path></svg>
                        </a>
                    </div>  
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">

              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default About;