import React from 'react';
import ReactDOM from "react-dom";
import '../../styles/css/main.css';

const ProjectsCard = ({closeBtn}) => {
  return ReactDOM.createPortal (
    <>
      <section className='_projects_card_modal_portfolio_wrapper' onClick={closeBtn}> 
        <div className="_projects_card_modal_portfolio_wrap">
          <div className="_projects_card_modal_portfolio_header">
            <h3>ths is a client porject</h3>
          </div>
          <div className="_projects_card_modal_portfolio_btn">
            <button className='btn btn-primary' onClick={closeBtn}>close</button>
          </div>
        </div>
      </section>
    </>, 
    document.querySelector(".project_card_modal_parent_div") 
  )
}

export default ProjectsCard;