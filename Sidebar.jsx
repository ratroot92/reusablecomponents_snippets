import React from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';
// // eslint-disable-next-line import/no-unresolved
// import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import * as routes from '../../constants/routes';

// // css
// import '../../global/styles/general.css';
// import '../../global/styles/sidebar.css';

export default function Sidebar() {
  return (
    <>
      <div
        className='shadow navbar-nav bg-gradient-primary sidebar sidebar-dark accordion'
        id='accordionSidebar'
      >
        <div className='pt-4 pb-4 pl-4'>
          <p className='text-white'>
            <span className='dot'></span>My Dashboard
          </p>
        </div>
        <BrowserRouter>
          <ul className='nav'>
            <li className='nav-item'>
              <NavLink className='nav-link active' to={routes.AdminContentURL}>
                Admin
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to={routes.ExamQuestionURL}>
                ExamQuestion
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to={routes.UserFeedbackURL}>
                Feedback
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to={routes.UserResultURL}>
                result
              </NavLink>
            </li>
          </ul>
        </BrowserRouter>
      </div>
    </>
  );
}
