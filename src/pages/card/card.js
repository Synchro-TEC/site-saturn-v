import React from 'react';
import {PrismCode} from 'react-prism';
import ShowCode from '../../components/ShowCode.jsx';

const CardPage = (props) => {
  return (
    <div className='dm-content'>
      <h4 className='sv-title'>Cards</h4>


      <p>A simple card</p>
      <div className='sv-card'>
        <header><h4>My Card</h4></header>
        <main>
          Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis,
          filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo.
          Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss
          quisso pudia ce receita de bolis, mais bolis eu num gostis.
        </main>
        <footer>Do it</footer>
      </div>

      <ShowCode>
        <PrismCode className='language-html'>
          {require('!raw-loader!./card1.html')}
        </PrismCode>
      </ShowCode>

      <div className='sv-vertical-marged-50'/>

      <div className='sv-card'>
        <header className='sv-bg-color-gray-50'>
          <h4 className='sv-color-blue-gray-700'>My Card</h4>
        </header>
        <main>
          Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis,
          filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo.
          Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss
          quisso pudia ce receita de bolis, mais bolis eu num gostis.
        </main>
        <footer>Do it</footer>
      </div>

      <ShowCode>
        <PrismCode className='language-html'>
          {require('!raw-loader!./card2.html')}
        </PrismCode>
      </ShowCode>

      <div className='sv-vertical-marged-50'/>

      <div className='sv-card'>
        <header className='big-header sv-bg-color-steel-400'>
          <h3 className='sv-color-steel-700'>A Card with big header</h3>
        </header>
        <main>
          Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis,
          filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo.
          Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss
          quisso pudia ce receita de bolis, mais bolis eu num gostis.
        </main>
        <footer>Do it</footer>
      </div>

      <ShowCode>
        <PrismCode className='language-html'>
          {require('!raw-loader!./card3.html')}
        </PrismCode>
      </ShowCode>

      <div className='sv-vertical-marged-50'/>

      <div className='sv-card'>
        <header>
          <h5>Table inside card</h5>
        </header>
        <main>
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
            </tbody>
          </table>
        </main>
      </div>

      <ShowCode>
        <PrismCode className='language-html'>
          {require('!raw-loader!./card-table.html')}
        </PrismCode>
      </ShowCode>

    </div>
  );

};

CardPage.displayName = 'CardPage';

export default CardPage;
