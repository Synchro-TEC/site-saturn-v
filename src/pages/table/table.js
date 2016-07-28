import React from 'react';
import {PrismCode} from 'react-prism';

const TablePage = (props) => {

  return(
    <div className='dm-content'>
      <a name="table"></a>
      <div>
        <h3 className='sv-color-blue-grey-800'>Tables</h3>
        <p>O emos </p>
        <h5>Table</h5>
        <table className="sv-table">
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

        <h5 className='sv-color-blue-grey-800'>Table with hover</h5>
        <table className="sv-table with--hover">
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

        <h5 className='sv-color-blue-grey-800'>Table with borders</h5>
        <table className="sv-table with--borders">
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

        <h5 className='sv-color-blue-grey-800'>Table with borders and shadow</h5>
        <table className="sv-table with--borders with--shadow">
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

        <h5 className='sv-color-blue-grey-800'>Table Condensed with Border and Hover</h5>
        <table className="sv-table--condensed with--hover with--borders">
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

        <h5 className='sv-color-blue-grey-800'>Table Striped with Border and Hover</h5>
        <table className="sv-table with--borders with--stripes">
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
          <tr>
            <td data-title='Id'>15</td>
            <td data-title='Name'>Chapolin Colorado</td>
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

        <h5 className='sv-color-blue-grey-800'>Responsive Tables</h5>
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
