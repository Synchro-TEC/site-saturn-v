import React from 'react';
import {PrismCode} from 'react-prism';

const ButtonsPage = (props) => {

  return(
    <div className='dm-content'>
      <h4 className='sv-color-blue-grey-800 sv-header'>Buttons</h4>

      <p><button className='sv-button default'>Default button</button></p>
      <p><button className='sv-button primary'>Primary button</button></p>
      <p><button className='sv-button info'>Info button</button></p>
      <p><button className='sv-button danger'>Danger button</button></p>
      <p><button className='sv-button link'>Link button</button></p>

      <p><button className='sv-button default'>Default button</button></p>
      <p><button className='sv-button default small'>Small button</button></p>

      <p><button className='sv-button default full'>Default full button</button></p>
      <p><button className='sv-button primary full'>Primary full button</button></p>
      <p><button className='sv-button info full'>Default full button</button></p>
      <p><button className='sv-button danger full'>Default full button</button></p>

      <p><button className='sv-button default circle'>Ok</button></p>
      <p><button className='sv-button default circle small'>+</button></p>
      <p><button className='sv-button primary circle '>Ok</button></p>
      <p><button className='sv-button primary circle small'>+</button></p>

      <p>
        <button className='sv-button default marged'>Default button 1</button>
        <button className='sv-button default marged'>Default button 2</button>
      </p>

      <p><button className='sv-button default' disabled>Button 1</button></p>
      <p><button className='sv-button primary' disabled>Button 1</button></p>
      <p><button className='sv-button info' disabled>Button 1</button></p>
      <p><button className='sv-button danger' disabled>Button 1</button></p>

    </div>
  )
};

ButtonsPage.displayName = 'ButtonsPage';

export default ButtonsPage;
