import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Pages
import Layout from './components/layouts/Layout';
import ShowTemperature from './components/ShowTemperature';

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <ShowTemperature />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
