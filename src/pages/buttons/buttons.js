import React from 'react';
import {PrismCode} from 'react-prism';
import ShowCode from '../../components/ShowCode.jsx';

//TODO: REVIEW DOCUMENTATION AFTER BUTTONS CHANGED!!!

const ButtonsPage = (props) => {

  return(
    <div className='dm-content'>
      <h4 className='sv-title'>Buttons</h4>

      <h6>Main buttons</h6>

      <p>
        <button className='sv-button default marged'>Default button</button>
        <button className='sv-button primary marged'>Primary button</button>
        <button className='sv-button info marged'>Info button</button>
        <button className='sv-button danger marged'>Danger button</button>
        <button className='sv-button warning marged'>Warning button</button>
      </p>

      <ShowCode>
        <PrismCode className='language-html'>
          {require('!raw-loader!./DefaultButtons.html')}
        </PrismCode>
      </ShowCode>
      <div className='sv-vertical-marged-50'></div>

      <h6>Small Buttons</h6>

      <p>
        <button className='sv-button default small marged'>Small Default button</button>
        <button className='sv-button primary small marged'>Small Primary button</button>
        <button className='sv-button info small marged'>Small Info button</button>
        <button className='sv-button danger small marged'>Small Danger button</button>
        <button className='sv-button warning small marged'>Small Warning button</button>
      </p>

      <ShowCode>
        <PrismCode className='language-html'>
          {require('!raw-loader!./SmallButtons.html')}
        </PrismCode>
      </ShowCode>
      <div className='sv-vertical-marged-50'></div>


      <h6>Link Buttons</h6>

      <p>
        <button className='sv-button link link-default  marged'>Link Default button</button>
        <button className='sv-button link link-primary  marged'>Link Primary button</button>
        <button className='sv-button link link-info  marged'>Link Info button</button>
        <button className='sv-button link link-danger  marged'>Link Danger button</button>
        <button className='sv-button link link-warning  marged'>Link Warning button</button>
      </p>

      <ShowCode>
        <PrismCode className='language-html'>
          {require('!raw-loader!./SmallButtons.html')}
        </PrismCode>
      </ShowCode>
      <div className='sv-vertical-marged-50'></div>


      <h6>Full Buttons</h6>
      <p><button className='sv-button default full'>Default full button</button></p>
      <p><button className='sv-button primary full'>Primary full button</button></p>
      <p><button className='sv-button info full'>Default full button</button></p>
      <p><button className='sv-button danger full'>Default full button</button></p>
      <p><button className='sv-button warning full'>Warning full button</button></p>

      <ShowCode>
        <PrismCode className='language-html'>
          {require('!raw-loader!./FullButtons.html')}
        </PrismCode>
      </ShowCode>
      <div className='sv-vertical-marged-50'></div>

      <h6>Circle Buttons</h6>
      <p><button className='sv-button default circle'>Ok</button></p>
      <p><button className='sv-button default circle small'>+</button></p>
      <p><button className='sv-button primary circle '>Ok</button></p>
      <p><button className='sv-button primary circle small'>+</button></p>
      <ShowCode>
        <PrismCode className='language-html'>
          {require('!raw-loader!./CircleButtons.html')}
        </PrismCode>
      </ShowCode>
      <div className='sv-vertical-marged-50'></div>

      <h6>With margin Buttons</h6>
      <p>
        <button className='sv-button default marged'>Default button 1</button>
        <button className='sv-button default marged'>Default button 2</button>
      </p>

      <ShowCode>
        <PrismCode className='language-html'>
          {require('!raw-loader!./MargedButtons.html')}
        </PrismCode>
      </ShowCode>
      <div className='sv-vertical-marged-50'></div>

      <h6>Disabled Buttons</h6>

      <p><button className='sv-button default' disabled>Button 1</button></p>
      <p><button className='sv-button primary' disabled>Button 1</button></p>
      <p><button className='sv-button info' disabled>Button 1</button></p>
      <p><button className='sv-button danger' disabled>Button 1</button></p>
      <p><button className='sv-button warning' disabled>Button 1</button></p>


      <ShowCode>
        <PrismCode className='language-html'>
          {require('!raw-loader!./DisabledButtons.html')}
        </PrismCode>
      </ShowCode>
      <div className='sv-vertical-marged-50'></div>

    </div>
  )
};

ButtonsPage.displayName = 'ButtonsPage';

export default ButtonsPage;
