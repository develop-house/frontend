import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import globalStyles from '../globalStyles';

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
      <Component {...pageProps} />
    </>
  );
};

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.any,
};

export default App;
