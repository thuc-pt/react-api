import React from 'react';
import './App.css';
import Header from './components/Header';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import routes from './routes';

function App() {
  function allRoutes(routes) {
    let results = null;
    results = routes.map((route, index) => {
      return <Route key={index} path={route.path} exact={route.exact} component={route.main} />
    })
    return results;
  }

  return (
    <Router>
      <Header />
      <Switch>
        {allRoutes(routes)}
      </Switch>
    </Router>
  );
}

export default App;
