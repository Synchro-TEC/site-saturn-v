import React from 'react';
import {PrismCode} from 'react-prism';
import ShowCode from '../../components/ShowCode.jsx';

const TablePage = (props) => {
  return (
    <div className='dm-content'>
      <h4 className='sv-title'>Tables</h4>
      <p>
        There are many options for table on Saturn-V, all can be responsive, just put table inside a container with
        a <code>sv-table-responsive-vertical</code> class and use <code>data-title</code> attributes.
      </p>
      <p>Avaliable Options:</p>
      <dl>
        <dt><code>with--borders</code></dt>
        <dd>Add borders on lines</dd>

        <dt><code>with--stripes</code></dt>
        <dd>Make a zebra table</dd>

        <dt><code>with--shadow</code></dt>
        <dd>Add shadow on table</dd>

        <dt><code>with--hover</code></dt>
        <dd>Hover efect</dd>

        <dt><code>with--space</code></dt>
        <dd>Spaced line (big tables)</dd>

        <dt><code>with--condensed</code></dt>
        <dd>Condensed table, (compact tables)</dd>

      </dl>
      <p>All options can be used together.</p>

      <div className='sv-vertical-marged-50'></div>

      <h5>Zebra Table</h5>

      <table className='sv-table with--stripes'>
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

      <ShowCode>
        <PrismCode className='language-html'>
          {require('!raw-loader!./TableStriped.html')}
        </PrismCode>
      </ShowCode>

      <div className='sv-vertical-marged-50'></div>

      <h5>Zebra table with shadow</h5>

      <table className='sv-table with--stripes with--shadow'>
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

      <ShowCode>
        <PrismCode className='language-html'>
          {require('!raw-loader!./TableBorderStripesShadow.html')}
        </PrismCode>
      </ShowCode>

      <div className='sv-vertical-marged-50'></div>


      <h5>Table with hover</h5>
      <table className='sv-table with--hover'>
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

      <ShowCode>
        <PrismCode className='language-html'>
          {require('!raw-loader!./TableHover.html')}
        </PrismCode>
      </ShowCode>

      <div className='sv-vertical-marged-50'></div>


      <h5>Table with hover and shadow</h5>
      <table className='sv-table with--hover with--shadow'>
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

      <ShowCode>
        <PrismCode className='language-html'>
          {require('!raw-loader!./TableHoverShadow.html')}
        </PrismCode>
      </ShowCode>

      <div className='sv-vertical-marged-50'></div>

      <h5>Table with borders</h5>
      <table className='sv-table with--borders'>
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

      <ShowCode>
        <PrismCode className='language-html'>
          {require('!raw-loader!./TableBorder.html')}
        </PrismCode>
      </ShowCode>

      <div className='sv-vertical-marged-50'></div>

      <h5>Table with bordere, hover and shadow</h5>
      <table className='sv-table with--borders with--shadow with--hover'>
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

      <ShowCode>
        <PrismCode className='language-html'>
          {require('!raw-loader!./TableBorderHoverShadow.html')}
        </PrismCode>
      </ShowCode>

      <div className='sv-vertical-marged-50'></div>


      <h5 className='sv-color-blue-grey-800'>Zebra table with border and hover</h5>
      <table className='sv-table with--borders with--stripes with--hover'>
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
      <ShowCode>
        <PrismCode className='language-html'>
          {require('!raw-loader!./TableBorderStripesHover.html')}
        </PrismCode>
      </ShowCode>

      <div className='sv-vertical-marged-50'></div>

      <h5 className='sv-color-blue-grey-800'>Responsible Table</h5>
      <div className='sv-table-responsive-vertical'>

        <table className='sv-table with--hover with--borders'>
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

      <ShowCode>
        <PrismCode className='language-html'>
          {require('!raw-loader!./TableResponsive.html')}
        </PrismCode>
      </ShowCode>


      <div className='sv-vertical-marged-50'></div>


      <h5 className='sv-color-blue-grey-800'>Spaced table, with border and hover</h5>

      <table className='sv-table with--space with--hover with--borders'>
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

      <ShowCode>
        <PrismCode className='language-html'>
          {require('!raw-loader!./TableSpaced.html')}
        </PrismCode>
      </ShowCode>

      <div className='sv-vertical-marged-50'></div>


      <h5 className='sv-color-blue-grey-800'>Condensed Table with border and hover</h5>

      <table className='sv-table with--condensed with--hover with--borders'>
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
      <ShowCode>
        <PrismCode className='language-html'>
          {require('!raw-loader!./TableCondensed.html')}
        </PrismCode>
      </ShowCode>

      <div className='sv-vertical-marged-50'></div>

      <h5 className='sv-color-blue-grey-800'>Table with sortable columns</h5>
      <table className='sv-table with--stripes with--shadow'>
        <thead>
          <tr>
            <th><i className='fa fa-sort sv-sort'/>Id</th>
            <th><i className='fa fa-sort-asc sv-sort is--active' />Name</th>
            <th><i className='fa fa-sort-desc sv-sort is--active'/>Company</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>12</td>
            <td>Jhon Doe</td>
            <td>Seven</td>
            <td>Edit</td>
          </tr>
          <tr>
            <td>13</td>
            <td>Tony MacLaren</td>
            <td>SamySu</td>
            <td>Edit</td>
          </tr>
          <tr>
            <td>14</td>
            <td>Mary of Neighborhood</td>
            <td>OnMyTv SA</td>
            <td>Edit</td>
          </tr>
          <tr>
            <td>15</td>
            <td>Chapolin Colorado</td>
            <td>OnMyTv SA</td>
            <td>Edit</td>
          </tr>
        </tbody>
      </table>
      <ShowCode>
        <PrismCode className='language-html'>
          {require('!raw-loader!./TableWithSortableColumn.html')}
        </PrismCode>
      </ShowCode>
    </div>
  );
};

TablePage.displayName = 'TablePage';

export default TablePage;
