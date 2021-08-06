import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header/Header';
import Drivers from './Drivers/Drivers';
import DriverDetail from '../pages/Driver/DriverDetail';
import Search from './Search/Search';
import LandingPage from './LandingPage/LandingPage';
import NotFound from '../pages/BadRequests/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/search" component={Search} />
        <Route exact={true} path="/drivers" component={Drivers} />
        <Route
          exact={true}
          path="/drivers/:driverId"
          component={DriverDetail}
        />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
