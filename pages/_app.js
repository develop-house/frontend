import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { END } from 'redux-saga';
import CssBaseline from '@material-ui/core/CssBaseline';

import globalStyles from '../globalStyles';
import wrapper from '../store/configureStore';

const App = ({ Component, pageProps }) => (
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
      <CssBaseline />
      <Component {...pageProps} />
    </>
  );

App.getInitialProps = async ({ Component, ctx }) => {
  const pageProps = {
    ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
  };
  if (ctx.req) {
    ctx.store.dispatch(END);
    await ctx.store.sagaTask.toPromise();
  }
  return {
    pageProps,
  };
};

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.any,
};

export default wrapper.withRedux(App);
