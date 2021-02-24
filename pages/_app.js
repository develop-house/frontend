import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import globalStyles from '../globalStyles';
import rootReducer, { rootSaga } from '../store';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"
        ></meta>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
      </Head>
      {globalStyles}
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
};

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.any,
};

export default App;
