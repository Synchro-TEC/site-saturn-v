import React from 'react';
import {PrismCode} from 'react-prism';

const TablePage = (props) => {

  return(
    <div>
      <a name="table"></a>
      <div className='dm-content'>
        <h2>Table</h2>
        <table className="table">
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
            <td data-title='Id'>12</td>
            <td data-title='Name'>Jhon Doe</td>
            <td data-title='Company'>Seven</td>
            <td data-title='Action'>Edit</td>
          </tr>
          <tr>
            <td data-title='Id'>13</td>
            <td data-title='Name'>Tony MacLaren</td>
            <td data-title='Company'>SamySu</td>
            <td data-title='Action'>Edit</td>
          </tr>
          <tr>
            <td data-title='Id'>14</td>
            <td data-title='Name'>Mary of Neighborhood</td>
            <td data-title='Company'>OnMyTv SA</td>
            <td data-title='Action'>Edit</td>
          </tr>
          </tbody>
        </table>

        <pre className="line-numbers" data-start="1">
          <PrismCode className="language-html">
            {require('!raw-loader!./table-01.html')}
          </PrismCode>
        </pre>

        <div className="sv-vertical-marged-50"></div>

        <h2>Table with hover</h2>
        <table className="table table-hover">
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
            <td data-title='Id'>12</td>
            <td data-title='Name'>Jhon Doe</td>
            <td data-title='Company'>Seven</td>
            <td data-title='Action'>Edit</td>
          </tr>
          <tr>
            <td data-title='Id'>13</td>
            <td data-title='Name'>Tony MacLaren</td>
            <td data-title='Company'>SamySu</td>
            <td data-title='Action'>Edit</td>
          </tr>
          <tr>
            <td data-title='Id'>14</td>
            <td data-title='Name'>Mary of Neighborhood</td>
            <td data-title='Company'>OnMyTv SA</td>
            <td data-title='Action'>Edit</td>
          </tr>
          </tbody>
        </table>

        <pre className="line-numbers" data-start="1">
          <PrismCode className="language-html">
            {require('!raw-loader!./table-02.html')}
          </PrismCode>
        </pre>

        <div className="sv-vertical-marged-50"></div>

        <h2>Table with borders</h2>
        <table className="table table-hover table-bordered">
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
            <td data-title='Id'>12</td>
            <td data-title='Name'>Jhon Doe</td>
            <td data-title='Company'>Seven</td>
            <td data-title='Action'>Edit</td>
          </tr>
          <tr>
            <td data-title='Id'>13</td>
            <td data-title='Name'>Tony MacLaren</td>
            <td data-title='Company'>SamySu</td>
            <td data-title='Action'>Edit</td>
          </tr>
          <tr>
            <td data-title='Id'>14</td>
            <td data-title='Name'>Mary of Neighborhood</td>
            <td data-title='Company'>OnMyTv SA</td>
            <td data-title='Action'>Edit</td>
          </tr>
          </tbody>
        </table>

        <pre className="line-numbers" data-start="1">
          <PrismCode className="language-html">
            {require('!raw-loader!./table-03.html')}
          </PrismCode>
        </pre>

        <div className="sv-vertical-marged-50"></div>

        <h2>Table with borders and shadow</h2>
        <table className="table table-hover table-mc-default table-bordered with-shadow">
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
            <td data-title='Id'>12</td>
            <td data-title='Name'>Jhon Doe</td>
            <td data-title='Company'>Seven</td>
            <td data-title='Action'>Edit</td>
          </tr>
          <tr>
            <td data-title='Id'>13</td>
            <td data-title='Name'>Tony MacLaren</td>
            <td data-title='Company'>SamySu</td>
            <td data-title='Action'>Edit</td>
          </tr>
          <tr>
            <td data-title='Id'>14</td>
            <td data-title='Name'>Mary of Neighborhood</td>
            <td data-title='Company'>OnMyTv SA</td>
            <td data-title='Action'>Edit</td>
          </tr>
          </tbody>
        </table>

        <pre className="line-numbers" data-start="1">
          <PrismCode className="language-html">
            {require('!raw-loader!./table-04.html')}
          </PrismCode>
        </pre>

        <div className="sv-vertical-marged-50"></div>

        <h2>Table Condensed</h2>
        <table className="table table-condensed table-hover table-mc-default table-bordered">
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
            <td data-title='Id'>12</td>
            <td data-title='Name'>Jhon Doe</td>
            <td data-title='Company'>Seven</td>
            <td data-title='Action'>Edit</td>
          </tr>
          <tr>
            <td data-title='Id'>13</td>
            <td data-title='Name'>Tony MacLaren</td>
            <td data-title='Company'>SamySu</td>
            <td data-title='Action'>Edit</td>
          </tr>
          <tr>
            <td data-title='Id'>14</td>
            <td data-title='Name'>Mary of Neighborhood</td>
            <td data-title='Company'>OnMyTv SA</td>
            <td data-title='Action'>Edit</td>
          </tr>
          </tbody>
        </table>

        <pre className="line-numbers" data-start="1">
          <PrismCode className="language-html">
            {require('!raw-loader!./table-04.html')}
          </PrismCode>
        </pre>

        <div className="sv-vertical-marged-50"></div>

        <h2>Responsive Tables</h2>
        <div className="table-responsive-vertical with-shadow">

          <table className="table table-hover table-bordered">
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
                <td data-title='Id'>12</td>
                <td data-title='Name'>Jhon Doe</td>
                <td data-title='Company'>Seven</td>
                <td data-title='Action'>Edit</td>
              </tr>
              <tr>
                <td data-title='Id'>13</td>
                <td data-title='Name'>Tony MacLaren</td>
                <td data-title='Company'>SamySu</td>
                <td data-title='Action'>Edit</td>
              </tr>
              <tr>
                <td data-title='Id'>14</td>
                <td data-title='Name'>Mary of Neighborhood</td>
                <td data-title='Company'>OnMyTv SA</td>
                <td data-title='Action'>Edit</td>
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
