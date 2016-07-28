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
          <header className='sv-bg-color-blue-50 sv-text-center'>
            <img height='auto' src='sv-logo.svg' width='160' />
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
            <img src='sv-logo.svg' style={{width: 'auto', height: '99vh'}} />
          </p>
          <div className='dm-about'>
            <h1 className='sv-color-blue-grey-800'>Sobre</h1>
            <p>O <em>Saturn-V</em> <del>foi</del> está sendo criado para ser a base dos produtos desenvolvidos
              por um dos times de desenvolvimento da <em>Synchro</em>, nasceu para ser um facilitador e
              ao mesmo tempo um padrão para nossos produtos.</p>
            <p>Diferente de outros frameworks, que além de um padrão visual entregam também
              compontens JavaScript, no <em>Saturn-V</em> optamos em entregar apenas o padrão visual, <strong>apenas</strong> o
              CSS e um guia semântico de HTML, mostrando como utilizar o mesmo. </p>
            <p>Estamos trabalhando separadamente em componentes JS, inicialmente em React, que
              irão usar o <em>Saturn-V</em> como base.</p>
            <div className="sv-vertical-marged-50"></div>
            <h3 className='sv-color-blue-grey-800'>Arquitetura</h3>
            <p>
              Optamos por usar uma arquitetura híbrida, usando conceitos e patterns CSS como <a href="https://smacss.com/">SMACSS</a>,&nbsp;
                <a href="http://getbem.com/introduction/">BEM</a> e <a href='http://itcss.io/'>ITCSS</a>.
            </p>
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
