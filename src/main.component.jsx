import React from 'react';
import { PrismCode } from 'react-prism';
import { GridPage } from './pages';
import { Header } from './partials';

// import 'saturn-v/src/grid/_grid.scss';
import 'saturn-v/src/base/_base.scss';
import 'saturn-v/src/colors/_colors.scss';
import 'saturn-v/src/helpers/_helpers.scss';

class MainComponent extends React.Component {
  constructor(props){
    super(props);
  }

  render() {

    return (
      <div>
        <Header />
        <GridPage />
      </div>
    )
  }
}

MainComponent.displayName = 'MainComponent';

export default MainComponent;
