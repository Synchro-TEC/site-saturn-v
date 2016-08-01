import React from 'react';
import {PrismCode} from 'react-prism';
import ShowCode from '../../components/ShowCode.jsx';

const HelpersPage = (props) => {
  return (
    <div className='dm-content'>
      <h4 className='sv-title'>Helpers</h4>

      <p>Pull Right</p>
      <p>Pull Left</p>
      <p>text-center</p>
      <p>text-right</p>
      <p>text-left</p>
      <p>vertical-marged</p>
      <p>badges</p>
      <p>notifications</p>


    </div>
  );

};

HelpersPage.displayName = 'HelpersPage';

export default HelpersPage;
