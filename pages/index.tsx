import Link from "next/link";
import Head from "next/head";
import Button from "@material-ui/core/Button";
import { fetchWeaponsThunk, Weapon } from "../slice";
import { NextPage } from "next";

const s = {
  aboutButton: {
    margin: 10
  }
};

type Props = {
  name: string;
  weapons: Array<Weapon>;
};

const Page: NextPage<Props> = ({ name, weapons }) => (
  <div>
    <Head>
      <title>Test App | Index</title>
    </Head>
    Home view, hello {name}!
    <div>{weapons && weapons.map(w => <p>{w.name}</p>)}</div>
    <Link href="/about" prefetch>
      <Button style={s.aboutButton} variant="outlined" color="primary">
        About
      </Button>
    </Link>
  </div>
);

Page.getInitialProps = async ctx => {
  const { dispatch } = ctx.store;

  const res = await dispatch(fetchWeaponsThunk());
  const weapons: Weapon[] = res.payload;

  return {
    name: "Jairo",
    weapons
  };
};

export default Page;
