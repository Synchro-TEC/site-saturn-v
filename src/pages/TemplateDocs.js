import React from 'react';
import HeaderSite from '../components/HeaderSite';
import { Link } from 'react-router';

function TemplateDocs(props) {
  return (
    <div>
      <HeaderSite />

      <aside className='dm-sidebar'>

        <ul>
          <li><Link activeClassName='active' to='docs/buttons'>Buttons</Link></li>
          <li><Link activeClassName='active' to='docs/cards'>Cards</Link></li>
          <li><Link activeClassName='active' to='docs/colors'>Colors</Link></li>
          <li><Link activeClassName='active' to='docs/components'>Components</Link></li>
          <li><Link activeClassName='active' to='docs/forms'>Forms</Link></li>
          <li><Link activeClassName='active' to='docs/grid'>Grid</Link></li>
          <li><Link activeClassName='active' to='docs/helpers'>Helpers</Link></li>
          <li><Link activeClassName='active' to='docs/layouts'>Layouts</Link></li>
          <li><Link activeClassName='active' to='docs/patterns'>Patterns</Link></li>
          <li><Link activeClassName='active' to='docs/tables'>Tables</Link></li>
          <li><Link activeClassName='active' to='docs/typograph'>Typograph</Link></li>
        </ul>

        <div className='dm-syntec'>
          <a href='https://github.com/Synchro-TEC' rel='noopen' target='_blank'>
            <img height='auto' src='logo-synchro.png' width='100'/>
          </a>
          <br />
          <a href='https://github.com/Synchro-TEC' rel='noopen' target='_blank'>
            <img height='40' src='syntec.svg' width='auto'/>
          </a>
        </div>

      </aside>

      <section className='dm-main'>
        {props.children}
      </section>
    </div>
  );
}
export default TemplateDocs;