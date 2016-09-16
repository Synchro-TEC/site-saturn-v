import React from 'react';
import {PrismCode} from 'react-prism';
import ShowCode from '../../components/ShowCode.jsx';

const GridPage = (props) => {
  return (
    <div className='dm-content'>
      <div className='dm-grid-show'>

        <h4 className='sv-title'>Grid System</h4>
        <p>Ridiculous simple grid system</p>

        <div className='sv-row'>
          <div className='sv-column sv-bg-color-blue-100'>Column</div>
        </div>

        <div className='sv-row'>
          <div className='sv-column sv-bg-color-blue-100'>Column</div>
          <div className='sv-column sv-bg-color-blue-200'>Column</div>
        </div>

        <div className='sv-row'>
          <div className='sv-column sv-bg-color-blue-100'>Column</div>
          <div className='sv-column sv-bg-color-blue-200'>Column</div>
          <div className='sv-column sv-bg-color-blue-300'>Column</div>
        </div>

        <div className='sv-row'>
          <div className='sv-column sv-bg-color-blue-100'>Column</div>
          <div className='sv-column sv-bg-color-blue-200'>Column</div>
          <div className='sv-column sv-bg-color-blue-300'>Column</div>
          <div className='sv-column sv-bg-color-blue-400'>Column</div>
        </div>

        <div className='sv-row'>
          <div className='sv-column sv-bg-color-blue-100'>Column</div>
          <div className='sv-column sv-bg-color-blue-200'>Column</div>
          <div className='sv-column sv-bg-color-blue-300'>Column</div>
          <div className='sv-column sv-bg-color-blue-400'>Column</div>
          <div className='sv-column sv-bg-color-blue-500'>Column</div>
        </div>

        <div className='sv-row'>
          <div className='sv-column sv-bg-color-blue-100'>Column</div>
          <div className='sv-column sv-bg-color-blue-200'>Column</div>
          <div className='sv-column sv-bg-color-blue-300'>Column</div>
          <div className='sv-column sv-bg-color-blue-400'>Column</div>
          <div className='sv-column sv-bg-color-blue-500'>Column</div>
          <div className='sv-column sv-bg-color-blue-600'>Column</div>
        </div>


        <ShowCode>
          <PrismCode className='language-html'>
            {require('!raw-loader!./simpleGrid.html')}
          </PrismCode>
        </ShowCode>

        <h4 className='sv-title'>Grid Tricks</h4>

        <p>Saturn V grid has few tricks to help you adjust columns sizes, you can use some values that represent a
          percentage</p>

        <p>Implemented values: 20, 25, 40, 60, 75 and 80 percent; To use it, just add a class with _ + value, ex: _20 to
          create a column with 20%</p>


        <div className='sv-row'>
          <div className='sv-column sv-bg-color-blue-1 _20'>_20</div>
          <div className='sv-column sv-bg-color-yellow-300 _80'>_80</div>
        </div>

        <div className='sv-row'>
          <div className='sv-column sv-bg-color-blue-1 _25'>_25</div>
          <div className='sv-column sv-bg-color-yellow-300 _75'>_75</div>
        </div>

        <div className='sv-row'>
          <div className='sv-column sv-bg-color-blue-1 _20'>_20</div>
          <div className='sv-column sv-bg-color-yellow-300 _20'>_20</div>
          <div className='sv-column sv-bg-color-green-300 _60'>_60</div>
        </div>

        <div className='sv-row'>
          <div className='sv-column sv-bg-color-blue-1 _40'>_40</div>
          <div className='sv-column sv-bg-color-green-300 _60'>_60</div>
        </div>

        <div className='sv-row'>
          <div className='sv-column sv-bg-color-blue-1 _100--fixed'>aaa</div>
          <div className='sv-column sv-bg-color-green-400 _300--fixed'>xxxx</div>
          <div className='sv-column sv-bg-color-blue-200'>bbbb</div>
          <div className='sv-column sv-bg-color-blue-300'>cccc</div>
        </div>

        <div className='sv-row'>
          <div className='sv-column sv-bg-color-blue-1 _200--fixed sv-no-padd'>aaa</div>
          <div className='sv-column sv-bg-color-blue-300'>cccc</div>
        </div>

        <div className='sv-row'>
          <div className='sv-column sv-bg-color-blue-1'>a</div>
          <div className='sv-column sv-bg-color-blue-200'>b</div>
          <div className='sv-column sv-bg-color-blue-300'>c</div>
          <div className='sv-column sv-bg-color-blue-400'>d</div>
          <div className='sv-column sv-bg-color-blue-500'>e</div>
        </div>

        <div className='sv-row'>
          <div className='sv-column sv-bg-color-blue-1'>a</div>
          <div className='sv-column sv-bg-color-blue-200'>b</div>
          <div className='sv-column sv-bg-color-blue-300'>c</div>
          <div className='sv-column sv-bg-color-blue-400'>d</div>
          <div className='sv-column sv-bg-color-blue-500'>e</div>
          <div className='sv-column sv-bg-color-blue-600'>f</div>
          <div className='sv-column sv-bg-color-blue-700'>g</div>
        </div>


        <ShowCode>
          <PrismCode className='language-html'>
            {require('!raw-loader!./demo.html')}
          </PrismCode>
        </ShowCode>
      </div>
    </div>
  );
};

GridPage.displayName = 'GridPage';

export default GridPage;
