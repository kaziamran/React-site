import React from 'react';
import ReactDOM from "react-dom";
import '../../styles/css/main.css';

const ProjectsCard = ({closeModal}) => {

  return ReactDOM.createPortal (
    <>
      <div className='_projects_card_modal_portfolio_wrapper' onClick={closeModal}> 
        <div className="_projects_card_modal_portfolio_wrap">
          <div className="_projects_card_modal_portfolio_header">
            <h3>ths is a client porject</h3>
            <p>lorum ipsum lorum ipsum lorum ipsum lorum 
              ipsum lorum ipsum lorum ipsumlorum ipsum</p>
          </div>
          <div className="_projects_card_modal_portfolio_btn">
            <button className='btn btn-primary' onClick={closeModal}>Close</button>
          </div>
        </div>
      </div>
    </>, 
    document.querySelector(".project_card_modal_parent_div")
  )
}

export default ProjectsCard;