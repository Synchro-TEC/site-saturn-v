import React from 'react';
import {PrismCode} from 'react-prism';
import ShowCode from '../../components/ShowCode.jsx';

const TablePage = (props) => {
  return (
    <div className='dm-content'>
      <h4 className='sv-title'>Tables</h4>
      <p>
        Tabela no Saturn-V possui diversas variantes, todas podem ter o comportamento responsivo, bastando apenas inserir a tabela
        em um container com a classe, <code>sv-table-responsive-vertical</code>.
      </p>
      <p>As variações são:</p>
      <dl>
        <dt><code>with--borders</code></dt>
        <dd>Adiciona bordas nas linas</dd>

        <dt><code>with--stripes</code></dt>
        <dd>Transforma em tabela zebrada</dd>

        <dt><code>with--shadow</code></dt>
        <dd>Sombra no container da tabela</dd>

        <dt><code>with--hover</code></dt>
        <dd>Efeito de hover nas linhas</dd>

        <dt><code>with--space</code></dt>
        <dd>Espaçamento maior na linha</dd>

        <dt><code>with--condensed</code></dt>
        <dd>Efeito de hover nas linhas</dd>

      </dl>
      <p>Lembrando que as variações podem ser usadas em conjunto.</p>
      <div className='sv-vertical-marged-50'></div>
      <h5>Tabela zebrada</h5>

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

      <h5>Tabela zebrada com bordas e sombra</h5>

      <table className='sv-table with--borders with--stripes with--shadow'>
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


      <h5>Tabela com efeito hover.</h5>
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


      <h5>Tabela com efeito hover e sombra.</h5>
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

      <h5>Tabela com bordas</h5>
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

      <h5>Table com bordas, efeito hover e sombra</h5>
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



      <h5 className='sv-color-blue-grey-800'>Tabela zebreada com borda e efeito de hover</h5>
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
          {require('!raw-loader!./TableResponsive.html')}
        </PrismCode>
      </ShowCode>


      <div className='sv-vertical-marged-50'></div>


      <h5 className='sv-color-blue-grey-800'>Tabela espaçada, com borda e efeito de hover</h5>

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


      <h5 className='sv-color-blue-grey-800'>Tabela condensada, com borda e efeito de hover</h5>

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

    </div>
  );
};

TablePage.displayName = 'TablePage';

export default TablePage;
