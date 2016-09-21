import React from 'react';
import {PrismCode} from 'react-prism';
import ShowCode from '../../components/ShowCode.jsx';

const mainColors = ['blue', 'green', 'red', 'yellow', 'orange', 'brow', 'gray', 'blue-gray'];
const intensety = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'];


const ColorsPage = (props) => {
  // let colors = mainColors.map((color) => {
  //
  //   let intense = intensety.map((i) => {
  //     let fontColor = i > 400 ? '#fff' : '#424242';
  //     if (color === 'yellow') {
  //       fontColor = '#424242';
  //     }
  //     return (
  //       <div className={`sv-bg-color-${color}-${i} dm-color`} key={`${color}-${i}`} style={{color: fontColor}}>
  //         {`sv-color-${color}-${i}`} <br />
  //         {`sv-bg-color-${color}-${i}`} <br />
  //         {`sv-bd-color-${color}-${i}`}
  //       </div>
  //     );
  //   });
  //
  //   return (
  //     <div className='dm-color-column' key={`${color}`}>
  //       {intense}
  //     </div>
  //   );

  // });
  return (
    <div className='dm-content'>
      <h4 className='sv-title'>Colors</h4>
      <div className='sv-row'>
        <div className='sv-column'>
          <h6 className='sv-title'>Blue</h6>
          <div className='sv-bg-color-blue-50 dm-color  sv-color-gray-800'>
            sv-bg-color-blue-50<br/>
            sv-bd-color-blue-50<br/>
            sv-color-blue-50<br/>
          </div>
          <div className='sv-bg-color-blue-100 dm-color sv-color-gray-800'>
            sv-bg-color-blue-100<br/>
            sv-bd-color-blue-100<br/>
            sv-color-blue-100<br/>
          </div>
          <div className='sv-bg-color-blue-200 dm-color sv-color-gray-800'>
            sv-bg-color-blue-200<br/>
            sv-bd-color-blue-200<br/>
            sv-color-blue-200<br/>
          </div>
          <div className='sv-bg-color-blue-300 dm-color sv-color-gray-800'>
            sv-bg-color-blue-300<br/>
            sv-bd-color-blue-300<br/>
            sv-color-blue-300<br/>
          </div>
          <div className='sv-bg-color-blue-400 dm-color sv-color-gray-800'>
            sv-bg-color-blue-400<br/>
            sv-bd-color-blue-400<br/>
            sv-color-blue-400<br/>
          </div>
          <div className='sv-bg-color-blue-500 dm-color sv-color-white-1'>
            sv-bg-color-blue-500<br/>
            sv-bd-color-blue-500<br/>
            sv-color-blue-500<br/>
          </div>
          <div className='sv-bg-color-blue-600 dm-color sv-color-white-1'>
            sv-bg-color-blue-600<br/>
            sv-bd-color-blue-600<br/>
            sv-color-blue-600<br/>
          </div>
          <div className='sv-bg-color-blue-700 dm-color sv-color-white-1'>
            sv-bg-color-blue-700<br/>
            sv-bd-color-blue-700<br/>
            sv-color-blue-700<br/>
          </div>
          <div className='sv-bg-color-blue-800 dm-color sv-color-white-1'>
            sv-bg-color-blue-800<br/>
            sv-bd-color-blue-800<br/>
            sv-color-blue-800<br/>
          </div>
          <div className='sv-bg-color-blue-900 dm-color sv-color-white-1'>
            sv-bg-color-blue-900<br/>
            sv-bd-color-blue-900<br/>
            sv-color-blue-900<br/>
          </div>
        </div>
        <div className='sv-column'>
          <h6 className='sv-title'>Green</h6>
          <div className='sv-bg-color-green-50 dm-color  sv-color-gray-800'>
            sv-bg-color-green-50<br/>
            sv-bd-color-green-50<br/>
            sv-color-green-50<br/>
          </div>
          <div className='sv-bg-color-green-100 dm-color sv-color-gray-800'>
            sv-bg-color-green-100<br/>
            sv-bd-color-green-100<br/>
            sv-color-green-100<br/>
          </div>
          <div className='sv-bg-color-green-200 dm-color sv-color-gray-800'>
            sv-bg-color-green-200<br/>
            sv-bd-color-green-200<br/>
            sv-color-green-200<br/>
          </div>
          <div className='sv-bg-color-green-300 dm-color sv-color-gray-800'>
            sv-bg-color-green-300<br/>
            sv-bd-color-green-300<br/>
            sv-color-green-300<br/>
          </div>
          <div className='sv-bg-color-green-400 dm-color sv-color-gray-800'>
            sv-bg-color-green-400<br/>
            sv-bd-color-green-400<br/>
            sv-color-green-400<br/>
          </div>
          <div className='sv-bg-color-green-500 dm-color sv-color-white-1'>
            sv-bg-color-green-500<br/>
            sv-bd-color-green-500<br/>
            sv-color-green-500<br/>
          </div>
          <div className='sv-bg-color-green-600 dm-color sv-color-white-1'>
            sv-bg-color-green-600<br/>
            sv-bd-color-green-600<br/>
            sv-color-green-600<br/>
          </div>
          <div className='sv-bg-color-green-700 dm-color sv-color-white-1'>
            sv-bg-color-green-700<br/>
            sv-bd-color-green-700<br/>
            sv-color-green-700<br/>
          </div>
          <div className='sv-bg-color-green-800 dm-color sv-color-white-1'>
            sv-bg-color-green-800<br/>
            sv-bd-color-green-800<br/>
            sv-color-green-800<br/>
          </div>
          <div className='sv-bg-color-green-900 dm-color sv-color-white-1'>
            sv-bg-color-green-900<br/>
            sv-bd-color-green-900<br/>
            sv-color-green-900<br/>
          </div>
        </div>
        <div className='sv-column'>
          <h6 className='sv-title'>Red</h6>
          <div className='sv-bg-color-red-50 dm-color  sv-color-gray-800'>
            sv-bg-color-red-50<br/>
            sv-bd-color-red-50<br/>
            sv-color-red-50<br/>
          </div>
          <div className='sv-bg-color-red-100 dm-color sv-color-gray-800'>
            sv-bg-color-red-100<br/>
            sv-bd-color-red-100<br/>
            sv-color-red-100<br/>
          </div>
          <div className='sv-bg-color-red-200 dm-color sv-color-gray-800'>
            sv-bg-color-red-200<br/>
            sv-bd-color-red-200<br/>
            sv-color-red-200<br/>
          </div>
          <div className='sv-bg-color-red-300 dm-color sv-color-gray-800'>
            sv-bg-color-red-300<br/>
            sv-bd-color-red-300<br/>
            sv-color-red-300<br/>
          </div>
          <div className='sv-bg-color-red-400 dm-color sv-color-gray-800'>
            sv-bg-color-red-400<br/>
            sv-bd-color-red-400<br/>
            sv-color-red-400<br/>
          </div>
          <div className='sv-bg-color-red-500 dm-color sv-color-white-1'>
            sv-bg-color-red-500<br/>
            sv-bd-color-red-500<br/>
            sv-color-red-500<br/>
          </div>
          <div className='sv-bg-color-red-600 dm-color sv-color-white-1'>
            sv-bg-color-red-600<br/>
            sv-bd-color-red-600<br/>
            sv-color-red-600<br/>
          </div>
          <div className='sv-bg-color-red-700 dm-color sv-color-white-1'>
            sv-bg-color-red-700<br/>
            sv-bd-color-red-700<br/>
            sv-color-red-700<br/>
          </div>
          <div className='sv-bg-color-red-800 dm-color sv-color-white-1'>
            sv-bg-color-red-800<br/>
            sv-bd-color-red-800<br/>
            sv-color-red-800<br/>
          </div>
          <div className='sv-bg-color-red-900 dm-color sv-color-white-1'>
            sv-bg-color-red-900<br/>
            sv-bd-color-red-900<br/>
            sv-color-red-900<br/>
          </div>
        </div>
        <div className='sv-column'>
          <h6 className='sv-title'>Yellow</h6>
          <div className='sv-bg-color-yellow-50 dm-color  sv-color-gray-800'>
            sv-bg-color-yellow-50<br/>
            sv-bd-color-yellow-50<br/>
            sv-color-yellow-50<br/>
          </div>
          <div className='sv-bg-color-yellow-100 dm-color sv-color-gray-800'>
            sv-bg-color-yellow-100<br/>
            sv-bd-color-yellow-100<br/>
            sv-color-yellow-100<br/>
          </div>
          <div className='sv-bg-color-yellow-200 dm-color sv-color-gray-800'>
            sv-bg-color-yellow-200<br/>
            sv-bd-color-yellow-200<br/>
            sv-color-yellow-200<br/>
          </div>
          <div className='sv-bg-color-yellow-300 dm-color sv-color-gray-800'>
            sv-bg-color-yellow-300<br/>
            sv-bd-color-yellow-300<br/>
            sv-color-yellow-300<br/>
          </div>
          <div className='sv-bg-color-yellow-400 dm-color sv-color-gray-800'>
            sv-bg-color-yellow-400<br/>
            sv-bd-color-yellow-400<br/>
            sv-color-yellow-400<br/>
          </div>
          <div className='sv-bg-color-yellow-500 dm-color sv-color-gray-800'>
            sv-bg-color-yellow-500<br/>
            sv-bd-color-yellow-500<br/>
            sv-color-yellow-500<br/>
          </div>
          <div className='sv-bg-color-yellow-600 dm-color sv-color-gray-800'>
            sv-bg-color-yellow-600<br/>
            sv-bd-color-yellow-600<br/>
            sv-color-yellow-600<br/>
          </div>
          <div className='sv-bg-color-yellow-700 dm-color sv-color-gray-800'>
            sv-bg-color-yellow-700<br/>
            sv-bd-color-yellow-700<br/>
            sv-color-yellow-700<br/>
          </div>
          <div className='sv-bg-color-yellow-800 dm-color sv-color-gray-800'>
            sv-bg-color-yellow-800<br/>
            sv-bd-color-yellow-800<br/>
            sv-color-yellow-800<br/>
          </div>
          <div className='sv-bg-color-yellow-900 dm-color sv-color-gray-800'>
            sv-bg-color-yellow-900<br/>
            sv-bd-color-yellow-900<br/>
            sv-color-yellow-900<br/>
          </div>
        </div>
      </div>

      <div className='sv-row'>
        <div className='sv-column'>
          <h6 className='sv-title'>Orange</h6>
          <div className='sv-bg-color-orange-50 dm-color  sv-color-gray-800'>
            sv-bg-color-orange-50<br/>
            sv-bd-color-orange-50<br/>
            sv-color-orange-50<br/>
          </div>
          <div className='sv-bg-color-orange-100 dm-color sv-color-gray-800'>
            sv-bg-color-orange-100<br/>
            sv-bd-color-orange-100<br/>
            sv-color-orange-100<br/>
          </div>
          <div className='sv-bg-color-orange-200 dm-color sv-color-gray-800'>
            sv-bg-color-orange-200<br/>
            sv-bd-color-orange-200<br/>
            sv-color-orange-200<br/>
          </div>
          <div className='sv-bg-color-orange-300 dm-color sv-color-gray-800'>
            sv-bg-color-orange-300<br/>
            sv-bd-color-orange-300<br/>
            sv-color-orange-300<br/>
          </div>
          <div className='sv-bg-color-orange-400 dm-color sv-color-gray-800'>
            sv-bg-color-orange-400<br/>
            sv-bd-color-orange-400<br/>
            sv-color-orange-400<br/>
          </div>
          <div className='sv-bg-color-orange-500 dm-color sv-color-white-1'>
            sv-bg-color-orange-500<br/>
            sv-bd-color-orange-500<br/>
            sv-color-orange-500<br/>
          </div>
          <div className='sv-bg-color-orange-600 dm-color sv-color-white-1'>
            sv-bg-color-orange-600<br/>
            sv-bd-color-orange-600<br/>
            sv-color-orange-600<br/>
          </div>
          <div className='sv-bg-color-orange-700 dm-color sv-color-white-1'>
            sv-bg-color-orange-700<br/>
            sv-bd-color-orange-700<br/>
            sv-color-orange-700<br/>
          </div>
          <div className='sv-bg-color-orange-800 dm-color sv-color-white-1'>
            sv-bg-color-orange-800<br/>
            sv-bd-color-orange-800<br />
            sv-color-orange-800<br />
          </div>
          <div className='sv-bg-color-orange-900 dm-color sv-color-white-1'>
            sv-bg-color-orange-900<br/>
            sv-bd-color-orange-900<br />
            sv-color-orange-900<br />
          </div>
        </div>
        <div className='sv-column'>
          <h6 className='sv-title'>Steel</h6>
          <div className='sv-bg-color-steel-50 dm-color  sv-color-gray-800'>
            sv-bg-color-steel-50<br/>
            sv-bd-color-steel-50<br/>
            sv-color-steel-50<br/>
          </div>
          <div className='sv-bg-color-steel-100 dm-color sv-color-gray-800'>
            sv-bg-color-steel-100<br/>
            sv-bd-color-steel-100<br/>
            sv-color-steel-100<br/>
          </div>
          <div className='sv-bg-color-steel-200 dm-color sv-color-gray-800'>
            sv-bg-color-steel-200<br/>
            sv-bd-color-steel-200<br/>
            sv-color-steel-200<br/>
          </div>
          <div className='sv-bg-color-steel-300 dm-color sv-color-gray-800'>
            sv-bg-color-steel-300<br/>
            sv-bd-color-steel-300<br/>
            sv-color-steel-300<br/>
          </div>
          <div className='sv-bg-color-steel-400 dm-color sv-color-gray-800'>
            sv-bg-color-steel-400<br/>
            sv-bd-color-steel-400<br/>
            sv-color-steel-400<br/>
          </div>
          <div className='sv-bg-color-steel-500 dm-color sv-color-white-1'>
            sv-bg-color-steel-500<br/>
            sv-bd-color-steel-500<br/>
            sv-color-steel-500<br/>
          </div>
          <div className='sv-bg-color-steel-600 dm-color sv-color-white-1'>
            sv-bg-color-steel-600<br/>
            sv-bd-color-steel-600<br/>
            sv-color-steel-600<br/>
          </div>
          <div className='sv-bg-color-steel-700 dm-color sv-color-white-1'>
            sv-bg-color-steel-700<br/>
            sv-bd-color-steel-700<br/>
            sv-color-steel-700<br/>
          </div>
          <div className='sv-bg-color-steel-800 dm-color sv-color-white-1'>
            sv-bg-color-steel-800<br/>
            sv-bd-color-steel-800<br/>
            sv-color-steel-800<br/>
          </div>
          <div className='sv-bg-color-steel-900 dm-color sv-color-white-1'>
            sv-bg-color-steel-900<br/>
            sv-bd-color-steel-900<br/>
            sv-color-steel-900<br/>
          </div>
        </div>
        <div className='sv-column'>
          <h6 className='sv-title'>Gray</h6>
          <div className='sv-bg-color-gray-50 dm-color  sv-color-gray-800'>
            sv-bg-color-gray-50<br/>
            sv-bd-color-gray-50<br/>
            sv-color-gray-50<br/>
          </div>
          <div className='sv-bg-color-gray-100 dm-color sv-color-gray-800'>
            sv-bg-color-gray-100<br/>
            sv-bd-color-gray-100<br/>
            sv-color-gray-100<br/>
          </div>
          <div className='sv-bg-color-gray-200 dm-color sv-color-gray-800'>
            sv-bg-color-gray-200<br/>
            sv-bd-color-gray-200<br/>
            sv-color-gray-200<br/>
          </div>
          <div className='sv-bg-color-gray-300 dm-color sv-color-gray-800'>
            sv-bg-color-gray-300<br/>
            sv-bd-color-gray-300<br/>
            sv-color-gray-300<br/>
          </div>
          <div className='sv-bg-color-gray-400 dm-color sv-color-gray-800'>
            sv-bg-color-gray-400<br/>
            sv-bd-color-gray-400<br/>
            sv-color-gray-400<br/>
          </div>
          <div className='sv-bg-color-gray-500 dm-color sv-color-white-1'>
            sv-bg-color-gray-500<br/>
            sv-bd-color-gray-500<br/>
            sv-color-gray-500<br/>
          </div>
          <div className='sv-bg-color-gray-600 dm-color sv-color-white-1'>
            sv-bg-color-gray-600<br/>
            sv-bd-color-gray-600<br/>
            sv-color-gray-600<br/>
          </div>
          <div className='sv-bg-color-gray-700 dm-color sv-color-white-1'>
            sv-bg-color-gray-700<br/>
            sv-bd-color-gray-700<br/>
            sv-color-gray-700<br/>
          </div>
          <div className='sv-bg-color-gray-800 dm-color sv-color-white-1'>
            sv-bg-color-gray-800<br/>
            sv-bd-color-gray-800<br/>
            sv-color-gray-800<br/>
          </div>
          <div className='sv-bg-color-gray-900 dm-color sv-color-white-1'>
            sv-bg-color-gray-900<br/>
            sv-bd-color-gray-900<br/>
            sv-color-gray-900<br/>
          </div>
        </div>

        <div className='sv-column'>
          <h6 className='sv-title'>Blue Gray</h6>
          <div className='sv-bg-color-blue-gray-50 dm-color  sv-color-gray-800'>
            sv-bg-color-blue-gray-50 <br />
            sv-bg-color-blue-gray-50 <br />
            sv-bg-color-blue-gray-50 <br />
          </div>
          <div className='sv-bg-color-blue-gray-100 dm-color sv-color-gray-800'>
            sv-bg-color-blue-gray-100<br />
            sv-bg-color-blue-gray-100<br />
            sv-bg-color-blue-gray-100<br />
          </div>
          <div className='sv-bg-color-blue-gray-200 dm-color sv-color-gray-800'>
            sv-bg-color-blue-gray-200<br />
            sv-bd-color-blue-gray-200<br />
            sv-color-blue-gray-200<br />
          </div>
          <div className='sv-bg-color-blue-gray-300 dm-color sv-color-gray-800'>
            sv-bg-color-blue-gray-300<br />
            sv-bd-color-blue-gray-300<br />
            sv-color-blue-gray-300<br />
          </div>
          <div className='sv-bg-color-blue-gray-400 dm-color sv-color-gray-800'>
            sv-bg-color-blue-gray-400<br />
            sv-bd-color-blue-gray-400<br />
            sv-color-blue-gray-400<br />
          </div>
          <div className='sv-bg-color-blue-gray-500 dm-color sv-color-white-1'>
            sv-bg-color-blue-gray-500<br />
            sv-bd-color-blue-gray-500<br />
            sv-color-blue-gray-500<br />
          </div>
          <div className='sv-bg-color-blue-gray-600 dm-color sv-color-white-1'>
            sv-bg-color-blue-gray-600<br />
            sv-bd-color-blue-gray-600<br />
            sv-color-blue-gray-600<br />
          </div>
          <div className='sv-bg-color-blue-gray-700 dm-color sv-color-white-1'>
            sv-bg-color-blue-gray-700<br />
            sv-bd-color-blue-gray-700<br />
            sv-color-blue-gray-700<br />
          </div>
          <div className='sv-bg-color-blue-gray-800 dm-color sv-color-white-1'>
            sv-bg-color-blue-gray-800<br />
            sv-bd-color-blue-gray-800<br />
            sv-color-blue-gray-800<br />
          </div>
          <div className='sv-bg-color-blue-gray-900 dm-color sv-color-white-1'>
            sv-bg-color-blue-gray-900<br />
            sv-bd-color-blue-gray-900<br />
            sv-color-blue-gray-900<br />
          </div>
        </div>
      </div>

    </div>
  );

};


ColorsPage.displayName = 'ColorsPage';

export default ColorsPage;
