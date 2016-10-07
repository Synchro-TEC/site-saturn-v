import React from 'react';
import {PrismCode} from 'react-prism';
import ShowCode from '../../components/ShowCode.jsx';

const PatternsPage = (props) => {

  return(
    <div className='dm-content'>
      <h4 className='sv-title'>Patterns</h4>
      <p>Patterns are definitions of how to solve often problems.</p>
      <h5>Message Box</h5>

      <div className='sv-messagebox info'>
        <button className='sv-messagebox__close'>&times;</button>
        <header>
          <h6>Info Message</h6>
        </header>
        <main>
          <p>Message to show</p>
        </main>
      </div>

      <div className='sv-messagebox success'>
        <button className='sv-messagebox__close'>&times;</button>
        <header>
          <h6>Success Message</h6>
        </header>
        <main>
          <p>Message to show</p>
        </main>
      </div>

      <div className='sv-messagebox warning'>
        <button className='sv-messagebox__close'>&times;</button>
        <header>
          <h6>Warning Message</h6>
        </header>
        <main>
          <p>Message to show</p>
        </main>
      </div>

      <div className='sv-messagebox error'>
        <button className='sv-messagebox__close'>&times;</button>
        <header>
          <h6>Error Message</h6>
        </header>
        <main>
          <p>Message to show</p>
        </main>
      </div>

      <ShowCode>
        <PrismCode className='language-html'>
          {require('!raw-loader!./messages.html')}
        </PrismCode>
      </ShowCode>
      <div className='sv-vertical-marged-50'/>
      <h5>Search & Result</h5>

      <div className='sv-row'>
        <div className='sv-column '>
          <form className='sv-form'>
            <div className='sv-input-group'>
              <input name='search' placeholder='Search for...' type='text' />
              <button className='sv-button default' type='button'>Search</button>
            </div>
          </form>
        </div>
      </div>
      <div className='sv-vertical-marged-25'/>
      <div className='sv-row'>
        <div className='sv-column'>
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
        </div>
      </div>

      <ShowCode>
        <PrismCode className='language-html'>
          {require('!raw-loader!./searchResult.html')}
        </PrismCode>
      </ShowCode>
      <div className='sv-vertical-marged-25'/>

      <h5></h5>
      <div className='sv-row'>
        <div className='sv-column'></div>
        <div className='sv-column sv-bg-color--gray-50 sv-padd-25'>
          <div className='sv-card sv-padd-15'>
            <p className='bold sv-text-left'>
              <img src='http://placehold.it/50/ff3300/ffffff' className='sv-right-marged-15' />
              John Doe
            </p>
            <p className='small sv-no-margins'>
              Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá, depois divoltis porris,
               paradis. Paisis, filhis, espiritis santis.
            </p>
            <hr className='sv-line sv-bd-color--gray-300' />
          </div>
        </div>
        <div className='sv-column'></div>
      </div>

    </div>
  )
};

PatternsPage.displayName = 'PatternsPage';

export default PatternsPage;
