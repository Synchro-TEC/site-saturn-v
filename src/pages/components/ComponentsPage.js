import React from 'react';
import {PrismCode} from 'react-prism';
import ShowCode from '../../components/ShowCode.jsx';

const ComponentsPage = (props) => {

  return(
    <div className='dm-content'>
      <h4 className='sv-title'>Components</h4>
      <p>Components are small peaces of code that</p>
      <h5>Message Box</h5>

      <div className='sv-messagebox info'>
        <button className='sv-messagebox__close'>&times;</button>
        <h6>Info Message</h6>
        <div>Message to show</div>
      </div>

      <ShowCode>
        <PrismCode className='language-html'>
          {require('!raw-loader!./messageInfo.html')}
        </PrismCode>
      </ShowCode>


      <div className='sv-messagebox success'>
        <button className='sv-messagebox__close'>&times;</button>
        <h6>The Title</h6>
        <div>Message to show</div>
      </div>

      <div className='sv-messagebox warning'>
        <button className='sv-messagebox__close'>&times;</button>
        <h6>The Title</h6>
        <div>Message to show</div>
      </div>

      <div className='sv-messagebox error'>
        <button className='sv-messagebox__close'>&times;</button>
        <h6>The Title</h6>
        <div>Message to show</div>
      </div>

    </div>
  )
};

ComponentsPage.displayName = 'ComponentsPage';

export default ComponentsPage;
