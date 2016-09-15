import React from 'react';
import {Link} from 'react-router';

function Template(props) {
  return (
    <div>
      <header className='dm-header'>
        <Link title='Back to home'  to='/'><img height='auto' src='logo-text.svg' width='134px'/></Link>
      </header>


      {/*<aside className='dm-sidebar'>*/}

        {/*<ul>*/}
          {/*<li><Link activeClassName='active' to='install'>Install</Link></li>*/}
          {/*<li><Link activeClassName='active' to='grid'>Grid</Link></li>*/}
          {/*<li><Link activeClassName='active' to='tables'>Tables</Link></li>*/}
          {/*<li><Link activeClassName='active' to='cards'>Cards</Link></li>*/}
          {/*<li><Link activeClassName='active' to='forms'>Forms</Link></li>*/}
          {/*<li><Link activeClassName='active' to='buttons'>Buttons</Link></li>*/}
          {/*<li><Link activeClassName='active' to='typograph'>Typograph</Link></li>*/}
          {/*<li><Link activeClassName='active' to='colors'>Colors</Link></li>*/}
          {/*<li><Link activeClassName='active' to='helpers'>Helpers</Link></li>*/}
          {/*<li><Link activeClassName='active' to='layouts'>Layouts</Link></li>*/}
          {/*<li><Link activeClassName='active' to='components'>Components</Link></li>*/}
        {/*</ul>*/}
        {/*<div className='dm-syntec'>*/}
          {/*<a href='https://github.com/Synchro-TEC' rel='noopen' target='_blank'>*/}
            {/*<img height='auto' src='logo-synchro.png' width='100'/>*/}
          {/*</a>*/}
          {/*<br />*/}
          {/*<a href='https://github.com/Synchro-TEC' rel='noopen' target='_blank'>*/}
            {/*<img height='40' src='syntec.svg' width='auto'/>*/}
          {/*</a>*/}
        {/*</div>*/}
      {/*</aside>*/}
      {/*<section className='dm-main'>*/}
        {props.children}
      {/* </section> */}
    </div>
  );
}
export default Template;