import React from 'react';
import {PrismCode} from 'react-prism';
import ShowCode from '../../components/ShowCode.jsx';

const GridPage = (props) => {

  return(
    <div className='dm-content'>
      <a name="grid"></a>
      <div className='dm-grid-show'>

          <h4 className='sv-color-blue-grey-800'>Grid System</h4>

          <p>
            Nosso <em>Grid System</em> é responsivo, desenvolvido usando flex-box e segue o padão de 12 colunas.
            Para cada linha do grid, deve usada a classe <code>.sv-container</code> e para as colunas <code>.sv-grid-</code> e o número
            de colunas que deseja, entre 1 e 12, exemplo <code>.sv-grid-3, .sv-grid-6</code>.
          </p>
          <p>
            Podemos também definir tamanhos diferentes para nossas colunas dependendo do tamanho da viewport, para isso a classe
            <code>.sv-grid-</code> pode ser usada em conjunto com as classes com o sulfixos <code>-md</code> (tablets) e
            <code>-xs</code> (smartphones).
          </p>
          <p>
            Por exemplo, em um cenário onde queremos um espaço de 2 colunas no desktop, 6 colunas no tablet e 12 colunas no smartphone
            podemos usar o seguinte código: <code>sv-grid-2 sv-grid-6-md sv-grid-12-xs</code>.
          </p>

          <p>Veja abaixo um exemplo, redimencione a tala para ver o comportamento grid.</p>

          <div className='sv-container'>
            <div className='sv-grid-2 sv-grid-4-md sv-grid-6-xs'><div className='col'>2 | 4-md | 6-xs</div></div>
            <div className='sv-grid-2 sv-grid-4-md sv-grid-6-xs'><div className='col'>2 | 4-md | 6-xs</div></div>
            <div className='sv-grid-2 sv-grid-4-md sv-grid-6-xs'><div className='col'>2 | 4-md | 6-xs</div></div>
            <div className='sv-grid-2 sv-grid-4-md sv-grid-6-xs'><div className='col'>2 | 4-md | 6-xs</div></div>
            <div className='sv-grid-2 sv-grid-4-md sv-grid-6-xs'><div className='col'>2 | 4-md | 6-xs</div></div>
            <div className='sv-grid-2 sv-grid-4-md sv-grid-6-xs'><div className='col'>2 | 4-md | 6-xs</div></div>
          </div>

          <div className='sv-container'>
            <div className='sv-grid-2 sv-grid-3-md sv-grid-12-xs'><div className='col'>2 | 3-md | 12-xs</div></div>
            <div className='sv-grid-8 sv-grid-6-md sv-grid-12-xs'><div className='col'>8 | 6-md | 12-xs</div></div>
            <div className='sv-grid-2 sv-grid-3-md sv-grid-12-xs'><div className='col'>2 | 3-md | 12-xs</div></div>
          </div>

          <div className='sv-container'>
            <div className='sv-grid-2'><div className='col'>2</div></div>
            <div className='sv-grid-4'><div className='col'>4</div></div>
            <div className='sv-grid-2'><div className='col'>2</div></div>
            <div className='sv-grid-2'><div className='col'>2</div></div>
            <div className='sv-grid-2'><div className='col'>2</div></div>
          </div>

          <div className='sv-container'>
            <div className='sv-grid-6'><div className='col'>6</div></div>
            <div className='sv-grid-6'><div className='col'>6</div></div>
          </div>

          <div className='sv-container'>
            <div className='sv-grid-4'><div className='col'>4</div></div>
            <div className='sv-grid-4'><div className='col'>4</div></div>
            <div className='sv-grid-4'><div className='col'>4</div></div>
          </div>

          <div className='sv-container'>
            <div className='sv-grid-3'><div className='col'>3</div></div>
            <div className='sv-grid-3'><div className='col'>3</div></div>
            <div className='sv-grid-3'><div className='col'>3</div></div>
            <div className='sv-grid-3'><div className='col'>3</div></div>
          </div>

          <div className='sv-container'>
            <div className='sv-grid-2'><div className='col'>2</div></div>
            <div className='sv-grid-2'><div className='col'>2</div></div>
            <div className='sv-grid-2'><div className='col'>2</div></div>
            <div className='sv-grid-2'><div className='col'>2</div></div>
            <div className='sv-grid-2'><div className='col'>2</div></div>
            <div className='sv-grid-2'><div className='col'>2</div></div>
          </div>

          <div className='sv-container'>
            <div className='sv-grid-1 sv-grid-2-md sv-grid-6-xs'><div className='col'>1</div></div>
            <div className='sv-grid-1 sv-grid-2-md sv-grid-6-xs'><div className='col'>1</div></div>
            <div className='sv-grid-1 sv-grid-2-md sv-grid-6-xs'><div className='col'>1</div></div>
            <div className='sv-grid-1 sv-grid-2-md sv-grid-6-xs'><div className='col'>1</div></div>
            <div className='sv-grid-1 sv-grid-2-md sv-grid-6-xs'><div className='col'>1</div></div>
            <div className='sv-grid-1 sv-grid-2-md sv-grid-6-xs'><div className='col'>1</div></div>
            <div className='sv-grid-1 sv-grid-2-md sv-grid-6-xs'><div className='col'>1</div></div>
            <div className='sv-grid-1 sv-grid-2-md sv-grid-6-xs'><div className='col'>1</div></div>
            <div className='sv-grid-1 sv-grid-2-md sv-grid-6-xs'><div className='col'>1</div></div>
            <div className='sv-grid-1 sv-grid-2-md sv-grid-6-xs'><div className='col'>1</div></div>
            <div className='sv-grid-1 sv-grid-2-md sv-grid-6-xs'><div className='col'>1</div></div>
            <div className='sv-grid-1 sv-grid-2-md sv-grid-6-xs'><div className='col'>1</div></div>
          </div>

          <div className='sv-container'>
            <div className='sv-grid-5'><div className='col'>5</div></div>
            <div className='sv-grid-7'><div className='col'>7</div></div>
          </div>

          <ShowCode>
            <PrismCode className="language-html">
              {require('!raw-loader!./demo.html')}
            </PrismCode>
          </ShowCode>
      </div>
    </div>
  );

};

GridPage.displayName = 'GridPage';

export default GridPage;
