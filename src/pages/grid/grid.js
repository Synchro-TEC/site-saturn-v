import React from 'react';
import {PrismCode} from 'react-prism';

const GridPage = (props) => {

  return(
    <div className='dm-content'>
      <a name="grid"></a>
      <div className='dm-grid-show'>

          <h4 className='sv-color-blue-grey-800'>Grid System</h4>

          <p>The grid system in saturn-v is a 12 columns grid, made by flex-box. </p>

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
            <div className='sv-grid-2'><div className='col'>G2</div></div>
            <div className='sv-grid-4'><div className='col'>G4</div></div>
            <div className='sv-grid-2'><div className='col'>G2</div></div>
            <div className='sv-grid-2'><div className='col'>G2</div></div>
            <div className='sv-grid-2'><div className='col'>G2</div></div>
          </div>

          <div className='sv-container'>
            <div className='sv-grid-6'><div className='col'>G6</div></div>
            <div className='sv-grid-6'><div className='col'>G6</div></div>
          </div>

          <div className='sv-container'>
            <div className='sv-grid-4'><div className='col'>G4</div></div>
            <div className='sv-grid-4'><div className='col'>G4</div></div>
            <div className='sv-grid-4'><div className='col'>G4</div></div>
          </div>

          <div className='sv-container'>
            <div className='sv-grid-3'><div className='col'>G3</div></div>
            <div className='sv-grid-3'><div className='col'>G3</div></div>
            <div className='sv-grid-3'><div className='col'>G3</div></div>
            <div className='sv-grid-3'><div className='col'>G3</div></div>
          </div>

          <div className='sv-container'>
            <div className='sv-grid-2'><div className='col'>G2</div></div>
            <div className='sv-grid-2'><div className='col'>G2</div></div>
            <div className='sv-grid-2'><div className='col'>G2</div></div>
            <div className='sv-grid-2'><div className='col'>G2</div></div>
            <div className='sv-grid-2'><div className='col'>G2</div></div>
            <div className='sv-grid-2'><div className='col'>G2</div></div>
          </div>

          <div className='sv-container'>
            <div className='sv-grid-1 sv-grid-2-md sv-grid-6-xs'><div className='col'>G1</div></div>
            <div className='sv-grid-1 sv-grid-2-md sv-grid-6-xs'><div className='col'>G1</div></div>
            <div className='sv-grid-1 sv-grid-2-md sv-grid-6-xs'><div className='col'>G1</div></div>
            <div className='sv-grid-1 sv-grid-2-md sv-grid-6-xs'><div className='col'>G1</div></div>
            <div className='sv-grid-1 sv-grid-2-md sv-grid-6-xs'><div className='col'>G1</div></div>
            <div className='sv-grid-1 sv-grid-2-md sv-grid-6-xs'><div className='col'>G1</div></div>
            <div className='sv-grid-1 sv-grid-2-md sv-grid-6-xs'><div className='col'>G1</div></div>
            <div className='sv-grid-1 sv-grid-2-md sv-grid-6-xs'><div className='col'>G1</div></div>
            <div className='sv-grid-1 sv-grid-2-md sv-grid-6-xs'><div className='col'>G1</div></div>
            <div className='sv-grid-1 sv-grid-2-md sv-grid-6-xs'><div className='col'>G1</div></div>
            <div className='sv-grid-1 sv-grid-2-md sv-grid-6-xs'><div className='col'>G1</div></div>
            <div className='sv-grid-1 sv-grid-2-md sv-grid-6-xs'><div className='col'>G1</div></div>
          </div>

          <div className='sv-container'>
            <div className='sv-grid-5'><div className='col'>G5</div></div>
            <div className='sv-grid-7'><div className='col'>G7</div></div>
          </div>

          <pre className="line-numbers" data-start="1">
            <PrismCode className="language-html">
              {require('!raw-loader!./demo.html')}
            </PrismCode>
          </pre>
      </div>
    </div>
  );

};

GridPage.displayName = 'GridPage';

export default GridPage;
