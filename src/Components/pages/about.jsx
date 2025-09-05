import React, { useState } from 'react';
import sumizeit from "../../../src/images/Sumizeit-Dev.png"; 
import xono from "../../../src/images/xono-v2-dev.png"; 
import profSite from "../../../src/images/profile_site.jpeg";
import digitalSite from "../../../src/images/digital.png";
import babble from "../../images/babble.png";
import itelsoft from "../../images/itelsoftbd.png"
// import ProjectsCard from '../Modal/ProjectsCard';
// import ProjectsCardContent from '../Modal/ProjectsCardContent';
import '../../styles/css/main.css';

const About = () => {

  return (
    <>
      <section className="_about_portfolio_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="_page_portfolio_title">
                <h1 className='_page_portfolio_title1'>about <span className='_page_portfolio_title1_span'>me</span>
                </h1>
                <span className='_page_portfolio_title_bg_span'>portfolio</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="_about_portfolio_left_info">
                  <h2 className='_about_portfolio_left_info_txt'>
                    personal information
                  </h2>
                  <div className="_about_portfolio_left_info_list">
                    <ul className='_about_portfolio_left_info_list_ul'>
                      <li className='_about_portfolio_left_info_list_li'>
                        <p className='_about_portfolio_left_info_list_li_para'>Name : Kazi Md. Emran</p>
                      </li>
                      <li className='_about_portfolio_left_info_list_li'>
                        <p className='_about_portfolio_left_info_list_li_para'>Address : Mirabazar, Sylhet, Bangladesh</p>
                      </li>
                      <li className='_about_portfolio_left_info_list_li'>
                        <p className='_about_portfolio_left_info_list_li_para'>Language : Bangla, English, Hindi</p>
                      </li>
                      <li className='_about_portfolio_left_info_list_li'>
                        <p className='_about_portfolio_left_info_list_li_para'>Freelance : <b>Available</b></p>
                      </li>
                      <li className='_about_portfolio_left_info_list_li'>
                        <p className='_about_portfolio_left_info_list_li_para'>Phone/Whatsapp : <b>+8801866-749596</b></p>
                      </li>
                      <li className='_about_portfolio_left_info_list_li'>
                        <p className='_about_portfolio_left_info_list_li_para'>Email : <b>kaziamran4@gmail.com</b></p>
                      </li>
                    </ul>
                  </div>

                  <div className="_home_portfolio_cnt_btns">
                      <a href='https://drive.google.com/file/d/1mfV-inlY8q0vM6xXjqTcsF4p3EeM2R7Z/view' className='_home_portfolio_cnt_btn1' target='_blank'>
                          Download cv
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path d="M13 10H18L12 16L6 10H11V3H13V10ZM4 19H20V12H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V12H4V19Z" fill="#fff"></path></svg>
                      </a>
                  </div>  
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="_about_portfolio_r8_info">
                  <h3 className='_about_portfolio_left_info_txt'>
                    job experience
                  </h3>
                  <div className="_about_portfolio_r8_job_info">
                    <h3 className='_about_portfolio_r8_job_info_txt1'>2021-Present</h3>
                    <h4 className='_about_portfolio_r8_job_info_txt2'>Front-end Developer at <a href="https://www.appifylab.com/" target='_blank'>Appifylab</a> 
                    </h4>
                    <p className='_about_portfolio_left_info_list_li_para'>
                      1) PSD/XD/Figma to Pixel Perfect Responsive HTML5 Templates. 
                    </p>
                    <p className='_about_portfolio_left_info_list_li_para'>  
                      2) Cross-browser compatible and W3C validated HTML and CSS. 
                    </p>
                    <p className='_about_portfolio_left_info_list_li_para'>  
                      3) Sound knowledge of HTML5, CSS, CSS3, Bootstrap, Flex-box, CSS3 animations, 
                      media queries and jQuery plugins. 
                    </p>
                    <p className='_about_portfolio_left_info_list_li_para'>  
                      4) Experience with Tailwind CSS. 
                    </p>
                    <p className='_about_portfolio_left_info_list_li_para'>  
                      5) Solid understanding of the responsive design and cross-browser compatibility. 
                    </p>
                    <p className='_about_portfolio_left_info_list_li_para'>  
                      6) Basic understanding of JavaScript, jQuery, PHP etc. Knows the value of writing clean, 
                      elegant, and well-documented code. Code versioning tools like Git
                    </p>
                    <p className='_about_portfolio_left_info_list_li_para'>  
                      7) Working with React js and typescript.
                    </p>
                  </div> 
              </div>
            </div>
          </div>

          {/* my projects */}
          <div className="row mt-5">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="_page_portfolio_title">
                <h4 className='_page_portfolio_title1'>my <span className='_page_portfolio_title1_span'>project</span></h4>
                <span className='_page_portfolio_title_bg_span'>portfolio</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="_project_portfolio_single_card" onClick={()=> window.open('https://kaziamran.github.io/profile/', '_blank')}>
                <div className="_project_portfolio_card_img">
                  <img src={profSite} className='img-fluid _project_portfolio_card_img_tag' alt="image" />
                </div>
                <div className="_project_portfolio_card_content pt-3">
                  <a className='_project_portfolio_card_content_link' href="https://kaziamran.github.io/profile/" target='_blank'>My site</a>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div className="_project_portfolio_single_card" onClick={()=> window.open('https://msit.app/?fbclid=IwY2xjawMnLgdleHRuA2FlbQIxMABicmlkETFOdENMRGxZMVlVSVExTTVCAR4vb-YUIEc7fzpG8jLnDn7sh5YTnxZnrohy6FP-aybzFKSgv3ZqiOOht38xxw_aem_cz2LxbRcqoS3ENc-DW_B1w', '_blank')}>
                <div className="_project_portfolio_card_img">
                  <img src={itelsoft} className='img-fluid _project_portfolio_card_img_tag' alt="image" />
                </div>
                <div className="_project_portfolio_card_content pt-3">
                  <a className='_project_portfolio_card_content_link' href="https://kaziamran.github.io/profile/" target='_blank'>Redign Admin panel</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="_project_portfolio_single_card" onClick={()=> window.open('https://kaziamran.github.io/Sumizeit-Dev/', '/_blank')}>
                <div className="_project_portfolio_card_img">
                  <img src={sumizeit} className='img-fluid _project_portfolio_card_img_tag' alt="image" />
                </div>
                <div className="_project_portfolio_card_content pt-3">
                  <a className='_project_portfolio_card_content_link' href="https://kaziamran.github.io/Sumizeit-Dev/" target='_blank'>Sumizeit-Dev site</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="_project_portfolio_single_card" onClick={()=> window.open('https://kaziamran.github.io/digital-agency-website-design/', '_blank')}>
                <div className="_project_portfolio_card_img">
                  <img src={digitalSite} className='img-fluid _project_portfolio_card_img_tag' alt="image" />
                </div>
                <div className="_project_portfolio_card_content pt-3">
                  <a className='_project_portfolio_card_content_link' href="https://kaziamran.github.io/digital-agency-website-design/" target='_blank'>Digital-agency website</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="_project_portfolio_single_card" onClick={()=> window.open('https://kaziamran.github.io/xono-v2-dev/', '_blank')}>
                <div className="_project_portfolio_card_img">
                  <img src={xono} className='img-fluid _project_portfolio_card_img_tag' alt="image" />
                </div>
                <div className="_project_portfolio_card_content pt-3">
                  <a className='_project_portfolio_card_content_link' href="https://kaziamran.github.io/xono-v2-dev/" target='_blank'>xono-v2-Dev site</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="_project_portfolio_single_card" onClick={()=> window.open('https://kaziamran.github.io/babble/', '_blank')}>
                <div className="_project_portfolio_card_img">
                  <img src={babble} className='img-fluid _project_portfolio_card_img_tag' alt="image" />
                </div>
                <div className="_project_portfolio_card_content pt-3">
                  <a className='_project_portfolio_card_content_link' href="https://kaziamran.github.io/babble/" target='_blank'>babble site</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About;