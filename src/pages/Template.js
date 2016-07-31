import React from 'react';
import {Link} from 'react-router';

function Template(props) {
  return (
    <div>
      <aside className='dm-sidebar'>
        <header className='sv-text-center'>
          <Link to='/'><img height='auto' src='sv-logo.svg' width='200'/></Link>
        </header>
        <ul>
          <li><Link activeClassName='active' to='grid'>Grid</Link></li>
          <li><Link activeClassName='active' to='tables'>Tables</Link></li>
          <li><Link activeClassName='active' to='cards'>Cards</Link></li>
          <li><Link activeClassName='active' to='forms'>Forms</Link></li>
          <li><Link activeClassName='active' to='buttons'>Buttons</Link></li>
          <li><a href='#grid'>Typograph</a></li>
          <li><a href='#grid'>Colors</a></li>
          <li><a href='#grid'>Helpers</a></li>
        </ul>
        <div className='dm-syntec'>
          <a href='https://github.com/Synchro-TEC' target='_blank' rel='noopen'>
            <img height='auto' src='logo-synchro.png' width='100'/>
          </a>
          <br />
          <a href='https://github.com/Synchro-TEC' target='_blank' rel='noopen'>
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
export default Template;