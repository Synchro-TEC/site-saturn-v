import React from 'react';
import {PrismCode} from 'react-prism';

const TablePage = (props) => {

  return(
    <div>
      <a name="table"></a>
      <div className='dm-content'>

        <h2>Responsive Tables</h2>
        <div className="table-responsive-vertical shadow-z-1">

          <table className="table table-hover table-mc-default">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Company</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-title='Id'>Column text</td>
                <td data-title='Name'>Column text</td>
                <td data-title='Company'>Column text</td>
                <td data-title='Action'>Column text</td>
              </tr>
              <tr>
                <td data-title='Id'>Column text</td>
                <td data-title='Name'>Column text</td>
                <td data-title='Company'>Column text</td>
                <td data-title='Action'>Column text</td>
              </tr>
              <tr>
                <td data-title='Id'>Column text</td>
                <td data-title='Name'>Column text</td>
                <td data-title='Company'>Column text</td>
                <td data-title='Action'>Column text</td>
              </tr>
            </tbody>
          </table>
        </div>
        <pre className="line-numbers" data-start="1">
          <PrismCode className="language-html">
            {require('!raw-loader!./demo.html')}
          </PrismCode>
        </pre>
      </div>
    </div>
  );
}

TablePage.displayName = 'TablePage';

export default TablePage;
