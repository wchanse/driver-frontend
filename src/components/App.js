import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header/Header';
import Drivers from './Drivers/Drivers';
import Search from './Search/Search';
import LandingPage from './LandingPage/LandingPage';
import NotFound from '../pages/BadRequests/NotFound';
import Report from './Report/Report';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/search" component={Search} />
        <Route path="/drivers" component={Drivers} />
        <Route path="/report" component={Report} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
