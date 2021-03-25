import React from 'react';

import pec from '../../assets/images/pec_logo.jpg';
import epe from '../../assets/images/epe_logo.png';

import '../../global/styles/general.css';
import '../../global/styles/header.css';

function Header() {
  return (
    <>
      <div>
        <nav className='container-fluid set-header bg-white'>
          <div className='row'>
            <div className='col-xl-4 col-lg-4 col-md-4 pt-2'>
              <div className='text-md-left text-center mb-2 mr-10'>
                <a href='/admin'>
                  <img className='company-logo' src={pec} alt='main_logo' />
                </a>
              </div>
            </div>
            <div className='col-xl-4 col-lg-4 col-md-4 pt-2'>
              <div className='text-center'>
                <h4 className='text-black font-weight-bold'>
                  Engineering Practice <br /> Examination (EPE)
                </h4>
              </div>
            </div>
            <div className='col-xl-4 col-lg-4 col-md-4 pt-2'>
              <div className='text-right float-right pl-5 mb-2'>
                <img className='department-logo' src={epe} alt='cpd_logo' />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
