import React from 'react';
import {PrismCode} from 'react-prism';

const InstallPage = (props) => {

  return(
    <div className='dm-content'>
      <h4 className='sv-title'>Install</h4>
      <p>
        Install Saturn-V is easy, use our CDN!
      </p>

      <div className='dm-code-container'>
        <pre className='line-numbers' data-start='1'>
          <PrismCode className='language-html'>
            {require('!raw-loader!./installDemo.html')}
          </PrismCode>
        </pre>
      </div>


    </div>
  )
};

InstallPage.displayName = 'InstallPage';

export default InstallPage;
