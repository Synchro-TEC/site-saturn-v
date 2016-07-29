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
          <header className='sv-text-center sv-bg-color-gray-100'>
            <img height='auto' src='sv-logo-rocket.svg' width='90' />
          </header>
          <ul>
            <li><a href='#grid'>Grid</a></li>
            <li><a href='#table'>Tables</a></li>
            <li><a href='#card'>Cards</a></li>
            <li><a href='#form'>Forms</a></li>
            <li><a href='#buttons'>Buttons</a></li>
            <li><a href='#grid'>Typograph</a></li>
            <li><a href='#grid'>Colors</a></li>
            <li><a href='#grid'>Helpers</a></li>
          </ul>
          <div className='dm-syntec'>
            <a href='https://github.com/Synchro-TEC' target='_blank' rel='noopen'>
              <img height='40' src='syntec.svg' width='auto' />
            </a>
          </div>
        </aside>
        <section className='dm-main'>
          <p className='sv-text-center'>
            <img src='sv-logo.svg' style={{width: 'auto', height: '95vh'}} />
          </p>
          <div className='dm-about'>
            <h1 className='sv-color-blue-grey-800'>Sobre</h1>
            <p>
              O Saturn-V nasceu da nossa necessidade por um Framework CSS que fosse leve, simples e com o foco apenas no desenvolvimento de
              Web Applications.
            </p>

            <p>
              Tentamos outros frameworks, mas a grande maioria fazem muito mais do que precisamos e além do visual tendencioso entregam
              também componentes JavaScript e com isso, comportamento que nem sempre eram o que precisávamos.
            </p>

            <p>
              No  Saturn-V  optamos pela simplicidade, nosso foco está em nossos produtos (Web Applications) e implementamos apenas o que
              necessitamos, entregando somente o CSS.
            </p>

            <p>
              Optamos por desenvolver separadamente os componentes JS, usando o Saturn-V como base, desta forma, podemos ter componentes
              usando o Saturn-V com React, Angular, Vanilla, etc. O que é fundamental em nosso cenário.
            </p>

            <div className="sv-vertical-marged-50"></div>

            <h3 className='sv-color-blue-grey-800'>Arquitetura</h3>
            <p>
              Optamos por usar uma arquitetura híbrida, usando diversos conceitos e patterns CSS como: <a href="https://smacss.com/">SMACSS</a>,&nbsp;
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
