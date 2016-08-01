import React from 'react';
import {PrismCode} from 'react-prism';
import ShowCode from '../../components/ShowCode.jsx';

const mainColors = ['blue', 'green', 'red', 'yellow', 'orange', 'brow', 'gray', 'blue-gray'];
const intensety = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'];


const ColorsPage = (props) => {
  let colors = mainColors.map((color) => {

    let intense = intensety.map((i) => {
      return (
        <div className='sv-grid-3 sv-grid-6-md sv-grid-12-xs sv-text-center' key={`${color}-${i}`}>
          <div className='sv-segment'>
            <div className={`sv-bg-color-${color}-${i} col-spaced dm-color`}></div>
            <p className='dm-color--item'>{`sv-bg-color-${color}-${i}`}</p>
          </div>
        </div>
      );
    });

    return (
      <div className='sv-container spaced' key={`${color}`}>
        {intense}
      </div>
    );

  });
  return (
    <div className='dm-content'>
      <h4 className='sv-title'>Colors</h4>

      <h5>Blue Palette</h5>
      {colors}

    </div>
  );

};

// white-1               :#fff,
// black-1               :#000,
//
// red-1                 :#f44336,
// red-50                :#ffebee,
// red-100               :#ffcdd2,
// red-200               :#ef9a9a,
// red-300               :#e57373,
// red-400               :#ef5350,
// red-500               :#f44336,
// red-600               :#e53935,
// red-700               :#d32f2f,
// red-800               :#c62828,
// red-900               :#b71c1c,
//

// green-1               :#4caf50,
// green-50              :#e8f5e9,
// green-100             :#c8e6c9,
// green-200             :#a5d6a7,
// green-300             :#81c784,
// green-400             :#66bb6a,
// green-500             :#4caf50,
// green-600             :#43a047,
// green-700             :#388e3c,
// green-800             :#2e7d32,
// green-900             :#1b5e20,
//
// yellow-1              :#ffeb3b,
// yellow-50             :#fffde7,
// yellow-100            :#fff9c4,
// yellow-200            :#fff59d,
// yellow-300            :#fff176,
// yellow-400            :#ffee58,
// yellow-500            :#ffeb3b,
// yellow-600            :#fdd835,
// yellow-700            :#fbc02d,
// yellow-800            :#f9a825,
// yellow-900            :#f57f17,
//
// orange-1              :#ff9800,
// orange-50             :#fff3e0,
// orange-100            :#ffe0b2,
// orange-200            :#ffcc80,
// orange-300            :#ffb74d,
// orange-400            :#ffa726,
// orange-500            :#ff9800,
// orange-600            :#fb8c00,
// orange-700            :#f57c00,
// orange-800            :#ef6c00,
// orange-900            :#e65100,
//
// brow-1                :#795548,
// brow-50               :#efebe9,
// brow-100              :#d7ccc8,
// brow-200              :#bcaaa4,
// brow-300              :#a1887f,
// brow-400              :#8d6e63,
// brow-500              :#795548,
// brow-600              :#6d4c41,
// brow-700              :#5d4037,
// brow-800              :#4e342e,
// brow-900              :#3e2723,
//
// gray-1                :#9e9e9e,
// gray-50               :#fafafa,
// gray-100              :#f5f5f5,
// gray-200              :#eeeeee,
// gray-300              :#e0e0e0,
// gray-400              :#bdbdbd,
// gray-500              :#9e9e9e,
// gray-600              :#757575,
// gray-700              :#616161,
// gray-800              :#424242,
// gray-900              :#212121,
//
// blue-gray-1           :#607d8b,
// blue-gray-50          :#eceff1,
// blue-gray-100         :#cfd8dc,
// blue-gray-200         :#b0bec5,
// blue-gray-300         :#90a4ae,
// blue-gray-400         :#78909c,
// blue-gray-500         :#607d8b,
// blue-gray-600         :#546e7a,
// blue-gray-700         :#455a64,
// blue-gray-800         :#37474f,
// blue-gray-900         :#263238,
//
// blue-synchro          :#0060aa,


ColorsPage.displayName = 'ColorsPage';

export default ColorsPage;
