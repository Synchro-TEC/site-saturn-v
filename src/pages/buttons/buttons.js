import React from 'react';
import {PrismCode} from 'react-prism';
import ShowCode from '../../components/ShowCode.jsx';

const ButtonsPage = (props) => {

  return(
    <div className='dm-content'>
      <h4 className='sv-title'>Buttons</h4>

      <p>
        Botões são essenciais para a interação do usuário com a aplicação. O Saturn-V implementa um conjunto de estilos com o objetivo
        de cobrir a maioria dos cenários.
      </p>

      <h5 className='sv-title'>Conjunto principal de botões</h5>

      <p><button className='sv-button default'>Default button</button></p>
      <p><button className='sv-button primary'>Primary button</button></p>
      <p><button className='sv-button info'>Info button</button></p>
      <p><button className='sv-button danger'>Danger button</button></p>
      <p><button className='sv-button link'>Link button</button></p>

      <ShowCode>
        <PrismCode className='language-html'>
          {require('!raw-loader!./DefaultButtons.html')}
        </PrismCode>
      </ShowCode>
      <div className='sv-vertical-marged-50'></div>

      <h5 className='sv-title'>Variações</h5>

      <h6>Small Buttons</h6>
      <p><button className='sv-button default small'>Small Default button</button></p>
      <p><button className='sv-button primary small'>Small Primary button</button></p>
      <p><button className='sv-button info small'>Small Info button</button></p>
      <p><button className='sv-button danger small'>Small Danger button</button></p>

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
