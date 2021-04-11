import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router-dom';
import store, { history } from './redux/store';
import SearchSection from './containers/SearchSection';

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <SearchSection />
            </Route>
            <Route path="/movie-details/:id">
              <p>test</p>
            </Route>
          </Switch>
        </div>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
