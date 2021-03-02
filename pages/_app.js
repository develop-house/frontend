import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { END } from 'redux-saga';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';

import globalStyles from '../globalStyles';
import wrapper from '../store/configureStore';

library.add(fab, faCheckSquare, faCoffee);

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>devhoust</title>
      </Head>
      {globalStyles}
      <Component {...pageProps} />
    </>
  );
};

App.getInitialProps = async ({ Component, ctx }) => {
  // 1. Wait for all page actions to dispatch
  const pageProps = {
    ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
  };

  // 2. Stop the saga if on server
  if (ctx.req) {
    ctx.store.dispatch(END);
    await ctx.store.sagaTask.toPromise();
  }

  // 3. Return props
  return {
    pageProps,
  };
};

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.any,
};

export default wrapper.withRedux(App);
