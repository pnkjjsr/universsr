import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter, StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from './routes';

const App = ({ store, isServer = false, location, context }) => {
  return (
    <Provider store={store}>
      {isServer ? (
        <StaticRouter location={location} context={context}>
          {renderRoutes(routes)}
        </StaticRouter>
      ) : (
        <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
      )}
    </Provider>
  );
};

App.propTypes = {
  store: PropTypes.object.isRequired,
  isServer: PropTypes.bool,
  location: PropTypes.string,
  context: PropTypes.object
};

export default App;
