import React from "react";
import App, { AppProps, AppContext } from "next/app";
import withRedux from "next-redux-wrapper";

import Layout from "../components/Layout";
import makeStore from "../store";

interface MyAppProps extends AppProps {}

class MyApp extends App<MyAppProps> {
  static async getInitialProps({ Component, ctx }: AppContext) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }
}

export default withRedux(makeStore)(MyApp);
