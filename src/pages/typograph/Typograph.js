import React from 'react';
import {PrismCode} from 'react-prism';

const TypographPage = (props) => {

  return(
    <div className='dm-content'>
      <h4 className='sv-title'>Typograph</h4>


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

    </div>
  )
};

TypographPage.displayName = 'TypographPage';

export default TypographPage;
