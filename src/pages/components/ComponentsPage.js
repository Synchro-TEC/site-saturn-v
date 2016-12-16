import React from 'react';
import {PrismCode} from 'react-prism';
import ShowCode from '../../components/ShowCode.jsx';

const ComponentsPage = (props) => {

  return(
    <div className='dm-content'>
      <h4 className='sv-title'>Components</h4>

      <h5>Loader</h5>

      <p>Default loader: <br /><span className='sv-bar-loader'/></p>
      <p>Large loader: <br /><span className='sv-bar-loader large'/></p>

      <ShowCode>
        <PrismCode className='language-html'>
          {require('!raw-loader!./loaders.html')}
        </PrismCode>
      </ShowCode>

      <div className='sv-vertical-marged-25'></div>

      <h5>Breadcrumbs</h5>

      <ul className='sv-breadcrumb'>
        <li><a href='#'><i className='fa fa-home fa-fw' /></a></li>
        <li><a href='#'><i className='fa fa-male fa-fw' /> Users</a></li>
        <li><a href='#'><i className='fa fa-database fa-fw' /> Items</a></li>
        <li><a href='#'><i className='fa fa-cog fa-fw' /> Config</a></li>
      </ul>

      <ul className='sv-breadcrumb'>
        <li><a href='#'><i className='fa fa-home fa-fw' /></a></li>
        <li><a href='#'>Users</a></li>
        <li><a href='#'>Items</a></li>
        <li><a href='#'>Config</a></li>
      </ul>

      <ShowCode>
        <PrismCode className='language-html'>
          {require('!raw-loader!./breadcrumbs.html')}
        </PrismCode>
      </ShowCode>

      <div className='sv-vertical-marged-25'/>

      <h5>Tags</h5>

      <div className='sv-tag default'>
        <span className='sv-tag__close'>×</span>
        <span className='sv-tag__content'>Tag Text Default</span>
      </div>

      <div className='sv-tag primary'>
        <span className='sv-tag__close'>×</span>
        <span className='sv-tag__content'>Tag Text Primary</span>
      </div>

      <div className='sv-tag danger'>
        <span className='sv-tag__close'>×</span>
        <span className='sv-tag__content'>Tag Text Danger</span>
      </div>

      <div className='sv-tag info'>
        <span className='sv-tag__close'>×</span>
        <span className='sv-tag__content'>Tag Text Info</span>
      </div>

      <div className='sv-tag warning'>
        <span className='sv-tag__close'>×</span>
        <span className='sv-tag__content'>Tag Text Warning</span>
      </div>

      <ShowCode>
        <PrismCode className='language-html'>
          {require('!raw-loader!./tags.html')}
        </PrismCode>
      </ShowCode>

      <div className='sv-vertical-marged-25'/>

      <h5>Message Box</h5>

      <div className='browser-mockup sv-padd-25'>

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
      </div>

      <ShowCode>
        <PrismCode className='language-html'>
          {require('!raw-loader!./messages.html')}
        </PrismCode>
      </ShowCode>


    </div>
  )
};

ComponentsPage.displayName = 'ComponentsPage';

export default ComponentsPage;
