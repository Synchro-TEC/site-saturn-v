import React from 'react';
import { PrismCode } from 'react-prism';
import { ButtonsPage, FormPage, GridPage, TablePage, CardPage } from './pages';
import { Header } from './partials';


class MainComponent extends React.Component {
  constructor(props){
    super(props);
  }

  render() {

    return (
      <div>
        <aside className='dm-sidebar'>
          <header className='sv-bg-color-blue-800 sv-text-center'>
            <img height='auto' src='logo.svg' width='160' />
          </header>
          <ul>
            <li><a href='#grid'>Grid</a></li>
            <li><a href='#table'>Tables</a></li>
            <li><a href='#card'>Cards</a></li>
            <li><a href='#form'>Forms</a></li>
            <li><a href='#buttons'>Buttons</a></li>
            <li><a href='#grid'>Typograph</a></li>
            <li><a href='#grid'>Colors</a></li>
            <li><a href='#grid'>Helpes</a></li>
          </ul>
        </aside>
        <section className='dm-main'>
          <p className='sv-text-center'>
            <img src='hero.svg' style={{width: '75%', height: 'auto'}} />
          </p>
          <div className='dm-about'>
            <h2 className='dm-banner sv-text-center sv-thin-text'>A CSS Framework thought to launch Web Applications.</h2>
          </div>
          <GridPage />

          <TablePage />

          <CardPage />

          <FormPage />

          <ButtonsPage />


        </section>
      </div>
    )
  }
}

MainComponent.displayName = 'MainComponent';

export default MainComponent;
