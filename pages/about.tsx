import Link from "next/link";
import Router from "next/router";
import React from "react";
import Head from "next/head";
import Button from "@material-ui/core/Button";

const s = {
  homeButton: {
    margin: 10
  }
};

export default class About extends React.Component {
  static async getInitialProps({ req }) {
    return {
      name: "Jairo"
    };
  }
  componentDidMount() {
    this.timer = setTimeout(() => {
      Router.push("/");
    }, 2000);
  }
  componentWillUnmount() {
    clearTimeout(this.timer);
  }
  render() {
    return (
      <div>
        <Head>
          <title>Test App | About</title>
        </Head>
        About view, hello {this.props.name}
        <Link href="/" prefetch>
          <Button style={s.homeButton} variant="contained" color="primary">
            Home
          </Button>
        </Link>
      </div>
    );
  }
}
