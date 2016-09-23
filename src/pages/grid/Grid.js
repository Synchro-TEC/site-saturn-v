import React from 'react';
import {PrismCode} from 'react-prism';
import ShowCode from '../../components/ShowCode.jsx';

const GridPage = (props) => {
  return (
    <div className='dm-content'>
      <div className='dm-grid-show'>

        <h4 className='sv-title'>Grid System</h4>
        <p>Ridiculous simple grid system, just declare a <code>sv-row</code> and <code>sv-column</code> inside, just it.</p>

        <div className='sv-row'>
          <div className='sv-column sv-bg-color--blue-50'>Column</div>
        </div>

        <div className='sv-row'>
          <div className='sv-column sv-bg-color--blue-50'>Column</div>
          <div className='sv-column sv-bg-color--blue-100'>Column</div>
        </div>

        <div className='sv-row'>
          <div className='sv-column sv-bg-color--blue-50'>Column</div>
          <div className='sv-column sv-bg-color--blue-100'>Column</div>
          <div className='sv-column sv-bg-color--blue-200'>Column</div>
        </div>

        <div className='sv-row'>
          <div className='sv-column sv-bg-color--blue-50'>Column</div>
          <div className='sv-column sv-bg-color--blue-100'>Column</div>
          <div className='sv-column sv-bg-color--blue-200'>Column</div>
          <div className='sv-column sv-bg-color--blue-300'>Column</div>
        </div>

        <div className='sv-row'>
          <div className='sv-column sv-bg-color--blue-50'>Column</div>
          <div className='sv-column sv-bg-color--blue-100'>Column</div>
          <div className='sv-column sv-bg-color--blue-200'>Column</div>
          <div className='sv-column sv-bg-color--blue-300'>Column</div>
          <div className='sv-column sv-bg-color--blue-400'>Column</div>
        </div>

        <div className='sv-row'>
          <div className='sv-column sv-bg-color--blue-50'>Column</div>
          <div className='sv-column sv-bg-color--blue-100'>Column</div>
          <div className='sv-column sv-bg-color--blue-200'>Column</div>
          <div className='sv-column sv-bg-color--blue-300'>Column</div>
          <div className='sv-column sv-bg-color--blue-400'>Column</div>
          <div className='sv-column sv-bg-color--blue-500'>Column</div>
        </div>


        <ShowCode>
          <PrismCode className='language-html'>
            {require('!raw-loader!./simpleGrid.html')}
          </PrismCode>
        </ShowCode>

        <h4 className='sv-title'>Grid with gutter</h4>

        <div className='sv-row--with-gutter'>
          <div className='sv-column sv-bg-color--blue-50'>Column</div>
          <div className='sv-column sv-bg-color--blue-100'>Column</div>
        </div>

        <div className='sv-row--with-gutter'>
          <div className='sv-column sv-bg-color--blue-50'>Column</div>
          <div className='sv-column sv-bg-color--blue-100'>Column</div>
          <div className='sv-column sv-bg-color--blue-200'>Column</div>
        </div>

        <div className='sv-row--with-gutter'>
          <div className='sv-column sv-bg-color--blue-50'>Column</div>
          <div className='sv-column sv-bg-color--blue-100'>Column</div>
          <div className='sv-column sv-bg-color--blue-200'>Column</div>
          <div className='sv-column sv-bg-color--blue-300'>Column</div>
        </div>

        <h4 className='sv-title'>Grid Tricks</h4>

        <p>Saturn V grid has few tricks to help you adjust columns sizes, you can use some values that represent a
          percentage.<br />

        Implemented values: 20, 25, 40, 60, 75 and 80 percent; To use it, just add a class with _ + value, ex: _20 to
          create a column with 20%.</p>


        <div className='sv-row'>
          <div className='sv-column sv-bg-color--blue-50 _20'>_20</div>
          <div className='sv-column sv-bg-color--blue-200 _80'>_80</div>
        </div>

        <div className='sv-row'>
          <div className='sv-column sv-bg-color--blue-50 _25'>_25</div>
          <div className='sv-column sv-bg-color--blue-200 _75'>_75</div>
        </div>

        <div className='sv-row'>
          <div className='sv-column sv-bg-color--blue-50 _20'>_20</div>
          <div className='sv-column sv-bg-color--blue-200 _20'>_20</div>
          <div className='sv-column sv-bg-color--blue-400 _60'>_60</div>
        </div>

        <div className='sv-row'>
          <div className='sv-column sv-bg-color--blue-50 _40'>_40</div>
          <div className='sv-column sv-bg-color--blue-200 _60'>_60</div>
        </div>

        <h5 className='sv-title'>With Gutter</h5>

        <div className='sv-row--with-gutter'>
          <div className='sv-column sv-bg-color--blue-50 _20'>_20</div>
          <div className='sv-column sv-bg-color--blue-200 _80'>_80</div>
        </div>

        <div className='sv-row--with-gutter'>
          <div className='sv-column sv-bg-color--blue-50 _25'>_25</div>
          <div className='sv-column sv-bg-color--blue-200 _75'>_75</div>
        </div>

        <div className='sv-row--with-gutter'>
          <div className='sv-column sv-bg-color--blue-50 _20'>_20</div>
          <div className='sv-column sv-bg-color--blue-200 _20'>_20</div>
          <div className='sv-column sv-bg-color--blue-400 _60'>_60</div>
        </div>

        <div className='sv-row--with-gutter'>
          <div className='sv-column sv-bg-color--blue-50 _40'>_40</div>
          <div className='sv-column sv-bg-color--blue-200 _60'>_60</div>
        </div>

        <ShowCode>
          <PrismCode className='language-html'>
            {require('!raw-loader!./gridTricks.html')}
          </PrismCode>
        </ShowCode>

        <h5 className='sv-title'>Fixed Columns</h5>

        <p>Saturn V grid has few fixed columns sizes, implemented fixed values: 100, 150, 200, 250 and 300 pixels.
        <br /> To use it, just add a class with _ + value + --fixed, ex: _100--fixed create a column with fixed 100px.</p>

        <div className='sv-row'>
          <div className='sv-column sv-bg-color--blue-50 _100--fixed'>100px</div>
          <div className='sv-column sv-bg-color--blue-200'>column</div>
          <div className='sv-column sv-bg-color--blue-400'>column</div>
        </div>

        <div className='sv-row'>
          <div className='sv-column sv-bg-color--blue-50 _150--fixed'>150px</div>
          <div className='sv-column sv-bg-color--blue-200'>column</div>
        </div>

        <div className='sv-row'>
          <div className='sv-column sv-bg-color--blue-50 _150--fixed'>150px</div>
          <div className='sv-column sv-bg-color--blue-200 _150--fixed'>150px</div>
          <div className='sv-column sv-bg-color--blue-500'>column</div>
        </div>

        <div className='sv-row'>
          <div className='sv-column sv-bg-color--blue-50 _200--fixed'>200px</div>
          <div className='sv-column sv-bg-color--blue-200 _250--fixed'>250px</div>
          <div className='sv-column sv-bg-color--blue-500'>column</div>
        </div>

        <div className='sv-row'>
          <div className='sv-column sv-bg-color--blue-50 _300--fixed'>300px</div>
          <div className='sv-column sv-bg-color--blue-300'>column</div>
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
