import React from 'react';

const HomePage = () => (
  <div>
    <div className='col dm-hero sv-bg-color--blue-600'>

    </div>
    <div className='dm-home-content'>
      <div className='sv-row'>
        <div className='sv-column sv-text-center sv-padd-50'>
          <img height='auto' src='css.svg' width='120' />
          <h6>Just CSS, no JS, jQuery or any other JavaScript Framework.</h6>
        </div>
        <div className='sv-column sv-text-center sv-padd-50'>
          <img height='auto' src='compass.svg' width='120' />
          <h6>Hybrid Architecture; the best parts of the SMACSS, BEM and ITCSS for us.</h6>
        </div>
        <div className='sv-column sv-text-center sv-padd-50'>
          <img height='auto' src='devices.svg' width='120' />
          <h6>Responsive and mobile friendly.</h6>
        </div>
      </div>
    </div>
    <div className='sv-row sv-bg-color--steel-200 sv-no-margins'>
      <div className='dm-home-synchro'>
        <div className='sv-row'>
          <div className='sv-column sv-text-center sv-padd-25'>
            <a href='https://github.com/Synchro-TEC' rel='noopen' target='_blank'>
              <img height='auto' src='logo-synchro.png' width='120'/>
            </a>
          </div>
          <div className='sv-column sv-text-center sv-padd-25'>
            <a href='https://github.com/Synchro-TEC' rel='noopen' target='_blank'>
              <img height='50' src='syntec.svg' width='auto'/>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className='dm-credits sv-row sv-bg-color--steel-100 sv-no-margins'>
      <div className='sv-column  sv-padd-10 sv-text-center'>
        Icons made by <a href='http://www.flaticon.com/authors/freepik' title='Freepik'>Freepik</a> from
        <a href='http://www.flaticon.com' title='Flaticon'>www.flaticon.com</a> is licensed by
        <a href='http://creativecommons.org/licenses/by/3.0/' target='_blank' title='Creative Commons BY 3.0'>CC 3.0 BY</a> <br />
        <a href='http://www.freepik.com/free-vector/outer-space_797691.htm'>Designed by Freepik</a>
      </div>
    </div>
  </div>
);

export default HomePage;