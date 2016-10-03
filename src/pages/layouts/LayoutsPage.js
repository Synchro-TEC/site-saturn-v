import React from 'react';
import {PrismCode} from 'react-prism';

const LayoutPage = (props) => {

  return(
    <div className='dm-content'>
      <h4 className='sv-title'>Layout</h4>

      <div className='sv-row'>
        <div className='sv-column'>
          <div className='browser-mockup'>
            <img height='auto' src='layout-01.svg' width='100%' />
          </div>
          <p className='sv-text-center'><a href='/dist/layout-01.html' target='_blank'>Open Example</a></p>
        </div>
        <div className='sv-column'>
          <div className='browser-mockup'>
            <img height='auto' src='layout-02.svg' width='100%' />
          </div>
          <p className='sv-text-center'><a href='/dist/layout-02.html' target='_blank'>Open Example</a></p>
        </div>
        <div className='sv-column'>
          <div className='browser-mockup'>
            <img height='auto' src='layout-03.svg' width='100%' />
          </div>
          <p className='sv-text-center'><a href='/dist/layout-03.html' target='_blank'>Open Example</a></p>
        </div>
      </div>

      <div className='sv-row'>
        <div className='sv-column'>
          <div className='browser-mockup'>
            <img height='auto' src='layout-04.svg' width='100%' />
          </div>
          <p className='sv-text-center'><a href='/dist/layout-04.html' target='_blank'>Open Example</a></p>
        </div>
        <div className='sv-column'>
          <div className='browser-mockup'>
            <img height='auto' src='layout-05.svg' width='100%' />
          </div>
          <p className='sv-text-center'><a href='/dist/layout-05.html' target='_blank'>Open Example</a></p>
        </div>
        <div className='sv-column'>
          <div className='browser-mockup'>
            <img height='auto' src='layout-06.svg' width='100%' />
          </div>
          <p className='sv-text-center'><a href='/dist/layout-06.html' target='_blank'>Open Example</a></p>
        </div>
      </div>

    </div>
  )
};

LayoutPage.displayName = 'LayoutPage';

export default LayoutPage;
