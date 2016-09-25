import React from 'react';
import {PrismCode} from 'react-prism';
import ShowCode from '../../components/ShowCode.jsx';

const mainColors = ['blue', 'green', 'red', 'yellow', 'orange', 'brow', 'gray', 'blue-gray'];
const intensety = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'];


const ColorsPage = (props) => {
  return (
    <div className='dm-content'>
      <h4 className='sv-title'>Colors</h4>
      <p>
        All colors can be used in 3 ways, <b>Font Color</b>, <b>Background Color</b> and <b>Border Color</b>.
        To define font color, use the prefix <code>sv-color</code> + <code>--color-name</code>, for example: <code>sv-color--blue-50</code>.
        To use as background color use <code>sv-bg-color</code> prefix and to border <code>sv-bd-color</code>.</p>
      <div className='sv-row'>
        <div className='sv-column'>
          <h6 className='sv-title'>Blue</h6>

          <div className='sv-bg-color--blue-50 dm-color  sv-color--gray-800'>
            --blue-50
          </div>
          <div className='sv-bg-color--blue-100 dm-color sv-color--gray-800'>
          --blue-100<br/>
          </div>
          <div className='sv-bg-color--blue-200 dm-color sv-color--gray-800'>
          --blue-200<br/>
          </div>
          <div className='sv-bg-color--blue-300 dm-color sv-color--gray-800'>
          --blue-300<br/>
          </div>
          <div className='sv-bg-color--blue-400 dm-color sv-color--gray-800'>
          --blue-400<br/>
          </div>
          <div className='sv-bg-color--blue-500 dm-color sv-color--white-1'>
          --blue-500<br/>
          </div>
          <div className='sv-bg-color--blue-600 dm-color sv-color--white-1'>
          --blue-600<br/>
          </div>
          <div className='sv-bg-color--blue-700 dm-color sv-color--white-1'>
          --blue-700<br/>
          </div>
          <div className='sv-bg-color--blue-800 dm-color sv-color--white-1'>
          --blue-800<br/>
          </div>
          <div className='sv-bg-color--blue-900 dm-color sv-color--white-1'>
          --blue-900<br/>
          </div>
        </div>
        <div className='sv-column'>
          <h6 className='sv-title'>Green</h6>
          <div className='sv-bg-color--green-50 dm-color  sv-color--gray-800'>
          --green-50<br/>
          </div>
          <div className='sv-bg-color--green-100 dm-color sv-color--gray-800'>
          --green-100<br/>
          </div>
          <div className='sv-bg-color--green-200 dm-color sv-color--gray-800'>
          --green-200<br/>
          </div>
          <div className='sv-bg-color--green-300 dm-color sv-color--gray-800'>
          --green-300<br/>
          </div>
          <div className='sv-bg-color--green-400 dm-color sv-color--gray-800'>
          --green-400<br/>
          </div>
          <div className='sv-bg-color--green-500 dm-color sv-color--white-1'>
          --green-500<br/>
          </div>
          <div className='sv-bg-color--green-600 dm-color sv-color--white-1'>
          --green-600<br/>
          </div>
          <div className='sv-bg-color--green-700 dm-color sv-color--white-1'>
          --green-700<br/>
          </div>
          <div className='sv-bg-color--green-800 dm-color sv-color--white-1'>
          --green-800<br/>
          </div>
          <div className='sv-bg-color--green-900 dm-color sv-color--white-1'>
          --green-900<br/>
          </div>
        </div>
        <div className='sv-column'>
          <h6 className='sv-title'>Red</h6>
          <div className='sv-bg-color--red-50 dm-color  sv-color--gray-800'>
          --red-50<br/>
          </div>
          <div className='sv-bg-color--red-100 dm-color sv-color--gray-800'>
          --red-100<br/>
          </div>
          <div className='sv-bg-color--red-200 dm-color sv-color--gray-800'>
          --red-200<br/>
          </div>
          <div className='sv-bg-color--red-300 dm-color sv-color--gray-800'>
          --red-300<br/>
          </div>
          <div className='sv-bg-color--red-400 dm-color sv-color--gray-800'>
          --red-400<br/>
          </div>
          <div className='sv-bg-color--red-500 dm-color sv-color--white-1'>
          --red-500<br/>
          </div>
          <div className='sv-bg-color--red-600 dm-color sv-color--white-1'>
          --red-600<br/>
          </div>
          <div className='sv-bg-color--red-700 dm-color sv-color--white-1'>
          --red-700<br/>
          </div>
          <div className='sv-bg-color--red-800 dm-color sv-color--white-1'>
          --red-800<br/>
          </div>
          <div className='sv-bg-color--red-900 dm-color sv-color--white-1'>
          --red-900<br/>
          </div>
        </div>
        <div className='sv-column'>
          <h6 className='sv-title'>Yellow</h6>
          <div className='sv-bg-color--yellow-50 dm-color  sv-color--gray-800'>
          --yellow-50<br/>
          </div>
          <div className='sv-bg-color--yellow-100 dm-color sv-color--gray-800'>
          --yellow-100<br/>
          </div>
          <div className='sv-bg-color--yellow-200 dm-color sv-color--gray-800'>
          --yellow-200<br/>
          </div>
          <div className='sv-bg-color--yellow-300 dm-color sv-color--gray-800'>
          --yellow-300<br/>
          </div>
          <div className='sv-bg-color--yellow-400 dm-color sv-color--gray-800'>
          --yellow-400<br/>
          </div>
          <div className='sv-bg-color--yellow-500 dm-color sv-color--gray-800'>
          --yellow-500<br/>
          </div>
          <div className='sv-bg-color--yellow-600 dm-color sv-color--gray-800'>
          --yellow-600<br/>
          </div>
          <div className='sv-bg-color--yellow-700 dm-color sv-color--gray-800'>
          --yellow-700<br/>
          </div>
          <div className='sv-bg-color--yellow-800 dm-color sv-color--gray-800'>
          --yellow-800<br/>
          </div>
          <div className='sv-bg-color--yellow-900 dm-color sv-color--gray-800'>
          --yellow-900<br/>
          </div>
        </div>
      </div>

      <div className='sv-row'>
        <div className='sv-column'>
          <h6 className='sv-title'>Orange</h6>
          <div className='sv-bg-color--orange-50 dm-color  sv-color--gray-800'>
          --orange-50<br/>
          </div>
          <div className='sv-bg-color--orange-100 dm-color sv-color--gray-800'>
          --orange-100<br/>
          </div>
          <div className='sv-bg-color--orange-200 dm-color sv-color--gray-800'>
          --orange-200<br/>
          </div>
          <div className='sv-bg-color--orange-300 dm-color sv-color--gray-800'>
          --orange-300<br/>
          </div>
          <div className='sv-bg-color--orange-400 dm-color sv-color--gray-800'>
          --orange-400<br/>
          </div>
          <div className='sv-bg-color--orange-500 dm-color sv-color--white-1'>
          --orange-500<br/>
          </div>
          <div className='sv-bg-color--orange-600 dm-color sv-color--white-1'>
          --orange-600<br/>
          </div>
          <div className='sv-bg-color--orange-700 dm-color sv-color--white-1'>
          --orange-700<br/>
          </div>
          <div className='sv-bg-color--orange-800 dm-color sv-color--white-1'>
          --orange-800<br/>
          </div>
          <div className='sv-bg-color--orange-900 dm-color sv-color--white-1'>
          --orange-900<br/>
          </div>
        </div>
        <div className='sv-column'>
          <h6 className='sv-title'>Steel</h6>
          <div className='sv-bg-color--steel-50 dm-color  sv-color--gray-800'>
          --steel-50<br/>
          </div>
          <div className='sv-bg-color--steel-100 dm-color sv-color--gray-800'>
          --steel-100<br/>
          </div>
          <div className='sv-bg-color--steel-200 dm-color sv-color--gray-800'>
          --steel-200<br/>
          </div>
          <div className='sv-bg-color--steel-300 dm-color sv-color--gray-800'>
          --steel-300<br/>
          </div>
          <div className='sv-bg-color--steel-400 dm-color sv-color--gray-800'>
          --steel-400<br/>
          </div>
          <div className='sv-bg-color--steel-500 dm-color sv-color--gray-800'>
          --steel-500<br/>
          </div>
          <div className='sv-bg-color--steel-600 dm-color sv-color--white-1'>
          --steel-600<br/>
          </div>
          <div className='sv-bg-color--steel-700 dm-color sv-color--white-1'>
          --steel-700<br/>
          </div>
          <div className='sv-bg-color--steel-800 dm-color sv-color--white-1'>
          --steel-800<br/>
          </div>
          <div className='sv-bg-color--steel-900 dm-color sv-color--white-1'>
          --steel-900<br/>
          </div>
        </div>
        <div className='sv-column'>
          <h6 className='sv-title'>Gray</h6>
          <div className='sv-bg-color--gray-50 dm-color  sv-color--gray-800'>
          --gray-50<br/>
          </div>
          <div className='sv-bg-color--gray-100 dm-color sv-color--gray-800'>
          --gray-100<br/>
          </div>
          <div className='sv-bg-color--gray-200 dm-color sv-color--gray-800'>
          --gray-200<br/>
          </div>
          <div className='sv-bg-color--gray-300 dm-color sv-color--gray-800'>
          --gray-300<br/>
          </div>
          <div className='sv-bg-color--gray-400 dm-color sv-color--gray-800'>
          --gray-400<br/>
          </div>
          <div className='sv-bg-color--gray-500 dm-color sv-color--white-1'>
          --gray-500<br/>
          </div>
          <div className='sv-bg-color--gray-600 dm-color sv-color--white-1'>
          --gray-600<br/>
          </div>
          <div className='sv-bg-color--gray-700 dm-color sv-color--white-1'>
          --gray-700<br/>
          </div>
          <div className='sv-bg-color--gray-800 dm-color sv-color--white-1'>
          --gray-800<br/>
          </div>
          <div className='sv-bg-color--gray-900 dm-color sv-color--white-1'>
          --gray-900<br/>
          </div>
        </div>

        <div className='sv-column'>
          <h6 className='sv-title'>Blue Gray</h6>
          <div className='sv-bg-color--blue-gray-50 dm-color  sv-color--gray-800'>
          --blue-gray-50 <br />
          </div>
          <div className='sv-bg-color--blue-gray-100 dm-color sv-color--gray-800'>
          --blue-gray-100<br />
          </div>
          <div className='sv-bg-color--blue-gray-200 dm-color sv-color--gray-800'>
          --blue-gray-200<br />
          </div>
          <div className='sv-bg-color--blue-gray-300 dm-color sv-color--gray-800'>
          --blue-gray-300<br />
          </div>
          <div className='sv-bg-color--blue-gray-400 dm-color sv-color--white-1'>
          --blue-gray-400<br />
          </div>
          <div className='sv-bg-color--blue-gray-500 dm-color sv-color--white-1'>
          --blue-gray-500<br />
          </div>
          <div className='sv-bg-color--blue-gray-600 dm-color sv-color--white-1'>
          --blue-gray-600<br />
          </div>
          <div className='sv-bg-color--blue-gray-700 dm-color sv-color--white-1'>
          --blue-gray-700<br />
          </div>
          <div className='sv-bg-color--blue-gray-800 dm-color sv-color--white-1'>
          --blue-gray-800<br />
          </div>
          <div className='sv-bg-color--blue-gray-900 dm-color sv-color--white-1'>
            --blue-gray-900<br />
          </div>
        </div>
      </div>
      <ShowCode>
        <PrismCode className='language-html'>
          {require('!raw-loader!./colors.html')}
        </PrismCode>
      </ShowCode>
    </div>
  );

};


ColorsPage.displayName = 'ColorsPage';

export default ColorsPage;
