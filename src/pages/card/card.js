import React from 'react';
import {PrismCode} from 'react-prism';

const CardPage = (props) => {

  return(
    <div>
      <a name="card"></a>
      <div className='dm-content'>
        <h2>Cards</h2>

        <div className='sv-container spaced'>

          <div className='grid-3 grid-6-md grid-12-xs col-spaced'>

              <div className='sv-card'>
                <header><h4>My Card</h4></header>
                <main>
                  Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.
                </main>
                <footer>Do it</footer>
              </div>

          </div>

          <div className='grid-9 grid-6-md grid-12-xs col-spaced'>

              <h4>A simple card</h4>
              <pre className="line-numbers" data-start="1">
                <PrismCode className="language-html">
                  {require('!raw-loader!./card1.html')}
                </PrismCode>
              </pre>

          </div>

        </div>

        <div className='sv-container spaced'>
          <div className='grid-3 grid-6-md grid-12-xs col-spaced'>
            <div className='sv-card'>
              <header className='sv-bg-color-orange-50'><h4 className='sv-color-orange-900'>My Card</h4></header>
              <main>
                Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.
              </main>
              <footer>Do it</footer>
            </div>
          </div>

          <div className='grid-9 grid-6-md grid-12-xs col-spaced'>
            <h4>A simple card decorated</h4>
            <pre className="line-numbers" data-start="1">
              <PrismCode className="language-html">
                {require('!raw-loader!./card2.html')}
              </PrismCode>
            </pre>
          </div>

        </div>

        <div className='sv-container spaced'>
          <div className='grid-3 grid-6-md grid-12-xs col-spaced'>
            <div className='sv-card'>
              <header className='big-header sv-bg-color-indigo-500'><h2 className='sv-color-white'>My Card</h2></header>
              <main>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia...</main>
              <footer>Do it</footer>
            </div>
          </div>
          <div className='grid-9 grid-6-md grid-12-xs col-spaced'>
            <h4>A big header card</h4>
            <pre className="line-numbers" data-start="1">
              <PrismCode className="language-html">
                {require('!raw-loader!./card3.html')}
              </PrismCode>
            </pre>
          </div>

        </div>


      </div>
    </div>
  );

};

CardPage.displayName = 'CardPage';

export default CardPage;
