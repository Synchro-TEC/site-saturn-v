import React from 'react';
import {PrismCode} from 'react-prism';
import ShowCode from '../../components/ShowCode.jsx';

const HelpersPage = (props) => {
  return (
    <div className='dm-content'>
      <h4 className='sv-title'>Helpers</h4>

      <p>O Saturn-V disponibiliza diversas classes para uso geral, chamamos essas classes de helpers.</p>

      <h5>Alinhamento de elementos</h5>

      <div style={{height: '50px'}}>
        <div className='sv-bg-color--blue-100 sv-pull-right sv-padd-15'>Pull Right</div>
        <div className='sv-bg-color--green-100 sv-pull-left sv-padd-15'>Pull Left</div>
      </div>

      <div className='sv-vertical-marged-50'></div>

      <h5>Alinhamento de texto</h5>
      <h6>Texto alinhado a esquerda</h6>
      <p className='sv-text-left'>
        Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga. Não
        sou faixa preta cumpadi, sou preto inteiris,
        inteiris. Diuretics paradis num copo é motivis de denguis. Vehicula non. Ut sed ex eros. Vivamus sit amet nibh
        non tellus tristique Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga. Não
        sou faixa preta cumpadi, sou preto inteiris,
        inteiris. Diuretics paradis num copo é motivis de denguis. Vehicula non. Ut sed ex eros. Vivamus sit amet nibh
        non tellus tristique interdum.
      </p>

      <h6>Texto alinhado a direita</h6>
      <p className='sv-text-right'>
        Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga. Não
        sou faixa preta cumpadi, sou preto inteiris,
        inteiris. Diuretics paradis num copo é motivis de denguis. Vehicula non. Ut sed ex eros. Vivamus sit amet nibh
        non tellus tristique Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga. Não
        sou faixa preta cumpadi, sou preto inteiris,
        inteiris. Diuretics paradis num copo é motivis de denguis. Vehicula non. Ut sed ex eros. Vivamus sit amet nibh
        non tellus tristique interdum.
      </p>

      <h6>Texto alinhado ao centro</h6>
      <p className='sv-text-center'>
        Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga. Não
        sou faixa preta cumpadi, sou preto inteiris,
        inteiris. Diuretics paradis num copo é motivis de denguis. Vehicula non. Ut sed ex eros. Vivamus sit amet nibh
        non tellus tristique Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga. Não
        sou faixa preta cumpadi, sou preto inteiris,
        inteiris. Diuretics paradis num copo é motivis de denguis. Vehicula non. Ut sed ex eros. Vivamus sit amet nibh
        non tellus tristique interdum.
      </p>

      <h6>Texto justificado</h6>
      <p className='sv-text-justify'>
        Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga. Não
        sou faixa preta cumpadi, sou preto inteiris,
        inteiris. Diuretics paradis num copo é motivis de denguis. Vehicula non. Ut sed ex eros. Vivamus sit amet nibh
        non tellus tristique Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga. Não
        sou faixa preta cumpadi, sou preto inteiris,
        inteiris. Diuretics paradis num copo é motivis de denguis. Vehicula non. Ut sed ex eros. Vivamus sit amet nibh
        non tellus tristique interdum.
      </p>

      <ShowCode>
        <PrismCode className='language-html'>
          {require('!raw-loader!./TextAlign.html')}
        </PrismCode>
      </ShowCode>

      <h5>Espaçamentos</h5>
      <p>vertical-marged</p>

      <p>badges</p>
      <p>notifications</p>


    </div>
  );

};

HelpersPage.displayName = 'HelpersPage';

export default HelpersPage;
