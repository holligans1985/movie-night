import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router-dom';
import store, { history } from '../../redux/store';
import SearchSection from '../SearchSection';
import Loader from '../../Components/Loader';
import AppWrapper from './styles';

const LazyMovieDetails = React.lazy(() => import('../MovieDetails'));

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <AppWrapper>
          <Suspense fallback={<Loader size="large" text="Loading route..." />}>
            <Switch>
              <Route exact path="/" component={SearchSection} />
              <Route route="/movie-details/:id" component={LazyMovieDetails} />
            </Switch>
          </Suspense>
        </AppWrapper>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
