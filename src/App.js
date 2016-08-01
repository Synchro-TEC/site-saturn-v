import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import Template from './pages/Template';

import HomePage from './pages/home/Home';
import GridPage from './pages/grid/Grid';
import TablePage from './pages/table/table';
import CardPage from './pages/card/card';
import FormPage from './pages/form/form';
import ButtonsPage from './pages/buttons/buttons';
import TypographPage from './pages/typograph/Typograph';
import HelpersPage from './pages/helpers/HelpersPage';
import ColorsPage from './pages/colors/ColorsPage';
import InstallPage from './pages/install/InstallPage';
import LayoutsPage from './pages/layouts/LayoutsPage';
import ComponentsPage from './pages/components/ComponentsPage';

const App = () => (
  <Router history={hashHistory}>
    <Route component={Template} path='/'>
      <IndexRoute component={HomePage} />
      <Route component={GridPage} path='/grid' />
      <Route component={TablePage} path='/tables' />
      <Route component={CardPage} path='/cards' />
      <Route component={FormPage} path='/forms' />
      <Route component={ButtonsPage} path='/buttons' />
      <Route component={TypographPage} path='/typograph' />
      <Route component={ColorsPage} path='/colors' />
      <Route component={HelpersPage} path='/helpers' />
      <Route component={InstallPage} path='/install' />
      <Route component={LayoutsPage} path='/layouts' />
      <Route component={ComponentsPage} path='/components' />


      {/*<Route path='dashboards'>*/}
        {/*<IndexRoute components={{header: IndexHeaderDashboardPage, main: IndexDashboardPage}} />*/}
        {/*<Route components={{header: ShowHeaderDashboardPage, main: ShowDashboardPage}} path=':dashboardId' />*/}
      {/*</Route>*/}

      {/*<Route path='analises'>*/}
        {/*<IndexRoute components={{header: IndexHeaderAnalisesPage, main: IndexAnalisesPage}}/>*/}
        {/*<Route components={{header: ShowHeaderAnalisesPage, main: ShowAnalisesPage}} path=':reportId' />*/}
      {/*</Route>*/}

      {/*<Route path='apresentacoes'>*/}
        {/*<IndexRoute components={{header: IndexHeaderPresentationPage, main: IndexPresentationPage}}/>*/}
      {/*</Route>*/}

    </Route>

    {/*<Route component={Player} path='apresentacao/:presentationId' />*/}


  </Router>
);

App.displayName = 'App';

export default App;