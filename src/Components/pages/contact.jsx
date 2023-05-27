import React from 'react';
import '../../styles/css/main.css';

const Contact = () => {
  return (
    <>
      <section className="_contact_portfolio_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="_page_portfolio_title">
                <h2 className='_page_portfolio_title1'>Contact <span className='_page_portfolio_title1_span'>me</span>
                </h2>
                <span className='_page_portfolio_title_bg_span'>portfolio</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-7 col-md-10 col-sm-12 mx-auto">
              <form className="_contact_portfolio_form">
                <div className="_contact_portfolio_form_list">
                  <div class="form-group _contact_portfolio_form_list1">
                    <label for="inputName" className='_contact_portfolio_form_list1_label'>Your name</label>
                    <input type="text" className="form-control" id="inputName" aria-describedby="name" placeholder="Enter your name" />
                  </div>
                  <div class="form-group _contact_portfolio_form_list1">
                    <label for="inputEmail" className='_contact_portfolio_form_list1_label'>Email address</label>
                    <input type="email" className="form-control" id="inputEmail" aria-describedby="email" placeholder="Enter your email" />
                  </div>
                </div>
                <div class="form-group _contact_portfolio_form_list_subject">
                  <label for="inputSubject" className='_contact_portfolio_form_list1_label'>Your subject</label>
                  <input type="text" className="form-control" id="inputSubject" aria-describedby="subject" placeholder="Enter your Subject" />
                </div>
                <div className="form-group _contact_portfolio_form_list_subject">
                  <label for="textarea" className='_contact_portfolio_form_list1_label'>Your message</label>
                  <textarea className='_contact_portfolio_form_textarea' placeholder='Your message'></textarea>
                </div>

                <div className="_contact_portfolio_form_btn">
                  <a href='#0' className='_home_portfolio_cnt_btn1' target='_blank'>
                      send message
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M13.0506 12.361L7.39371 18.0179L5.97949 16.6037L11.6363 10.9468L6.6866 5.99707H18.0003V17.3108L13.0506 12.361Z" fill="rgba(255,255,255,1)"></path>
                      </svg>
                  </a>
                </div>  
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact;