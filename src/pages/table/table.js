import React from 'react';
import {PrismCode} from 'react-prism';
import ShowCode from '../../components/ShowCode.jsx';

const TablePage = (props) => {
  return (
    <div className='dm-content'>
      <h4 className='sv-color-blue-grey-800 sv-header'>Tables</h4>
      <p>A tabela no Saturn-V possui diversas variantes, inclusive um modelo de tabela responsíva, podemos ainda usar essas variações
        em conjunto. Veja abaixo todas as variantes.</p>
      <div className='sv-vertical-marged-50'></div>
      <h5>Tabela Comum</h5>
      <table className='sv-table'>
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
          {require('!raw-loader!./table-01.html')}
        </PrismCode>
      </ShowCode>

      <div className='sv-vertical-marged-50'></div>

      <h5 className='sv-color-blue-grey-800'>Tabela com efeito de hover nas linhas</h5>
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
          {require('!raw-loader!./table-02.html')}
        </PrismCode>
      </ShowCode>

      <div className='sv-vertical-marged-50'></div>

      <h5 className='sv-color-blue-grey-800'>Tabela com bordas</h5>
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
          {require('!raw-loader!./table-03.html')}
        </PrismCode>
      </ShowCode>

      <div className='sv-vertical-marged-50'></div>

      <h5 className='sv-color-blue-grey-800'>Table com bordas e sombra</h5>
      <table className='sv-table with--borders with--shadow'>
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
          {require('!raw-loader!./table-04.html')}
        </PrismCode>
      </ShowCode>

      <div className='sv-vertical-marged-50'></div>

      <h5 className='sv-color-blue-grey-800'>Tabela condensada, com borda e efeito de hover</h5>
      <table className='sv-table--condensed with--hover with--borders'>
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
          {require('!raw-loader!./table-06.html')}
        </PrismCode>
      </ShowCode>

      <div className='sv-vertical-marged-50'></div>

      <h5 className='sv-color-blue-grey-800'>Tabela zebreada com borda e efeito de hover</h5>
      <table className='sv-table with--borders with--stripes'>
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
          {require('!raw-loader!./table-04.html')}
        </PrismCode>
      </ShowCode>

      <div className='sv-vertical-marged-50'></div>

      <h5 className='sv-color-blue-grey-800'>Tabela Responsiva</h5>
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
          {require('!raw-loader!./demo.html')}
        </PrismCode>
      </ShowCode>
    </div>
  );
};

TablePage.displayName = 'TablePage';

export default TablePage;
