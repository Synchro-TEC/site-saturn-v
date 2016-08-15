import React from 'react';
import {PrismCode} from 'react-prism';
import ShowCode from '../../components/ShowCode.jsx';

const TypographPage = (props) => {

  return(
    <div className='dm-content'>
      <h4 className='sv-title'>Typograph</h4>
      <p>Tipografia no Saturn-V prove um limpo e simples conjunto de estilos para os elementos tipograficos básicos.</p>

      <h5 className='sv-title'>Parágrafos</h5>

      <h6>Formatação Padrão</h6>
      <p>Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga. Não sou faixa preta cumpadi, sou preto inteiris,
        inteiris. Diuretics paradis num copo é motivis de denguis. Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique
        interdum.</p>

      <p>Mé faiz elementum girarzis, nisi eros vermeio. Detraxit consequat et quo num tendi nada. Posuere libero varius. Nullam a nisl ut
        ante blandit hendrerit. Aenean sit amet nisi. Si num tem leite então bota uma pinga aí cumpadi!</p>

      <h6>Formatação Thin</h6>
      <p className='thin'>Mé faiz elementum girarzis, nisi eros vermeio. Detraxit consequat et quo num tendi nada. Posuere libero varius.
        Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Si num tem leite então bota uma pinga aí cumpadi!</p>

      <h6>Formatação Bold</h6>
      <p className='bold'>Mé faiz elementum girarzis, nisi eros vermeio. Detraxit consequat et quo num tendi nada. Posuere libero varius.
        Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Si num tem leite então bota uma pinga aí cumpadi!</p>
      <ShowCode>
        <PrismCode className='language-html'>
          {require('!raw-loader!./Paragraphs.html')}
        </PrismCode>
      </ShowCode>

      <div className='sv-vertical-marged-50' />
      <h5 className='sv-title'>Header</h5>


      <h1>H1 - Header 1</h1>
      <h2>H2 - Header 2</h2>
      <h3>H3 - Header 3</h3>
      <h4>H4 - Header 4</h4>
      <h5>H5 - Header 5</h5>
      <h6>H6 - Header 6</h6>

      <h1 className='thin'>H1 - Header 1</h1>
      <h2 className='thin'>H2 - Header 2</h2>
      <h3 className='thin'>H3 - Header 3</h3>
      <h4 className='thin'>H4 - Header 4</h4>
      <h5 className='thin'>H5 - Header 5</h5>
      <h6 className='thin'>H6 - Header 6</h6>

      <h1 className='bold'>H1 - Header 1</h1>
      <h2 className='bold'>H2 - Header 2</h2>
      <h3 className='bold'>H3 - Header 3</h3>
      <h4 className='bold'>H4 - Header 4</h4>
      <h5 className='bold'>H5 - Header 5</h5>
      <h6 className='bold'>H6 - Header 6</h6>

      <ShowCode>
        <PrismCode className='language-html'>
          {require('!raw-loader!./Headers.html')}
        </PrismCode>
      </ShowCode>

      <div className='sv-vertical-marged-50' />

    </div>
  )
};

TypographPage.displayName = 'TypographPage';

export default TypographPage;
