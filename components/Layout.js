import Head from "next/head";

const navBarHeigh = 40;

const s = {
  navbar: {
    backgroundColor: "blue",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: navBarHeigh,
    color: "white"
  },
  title: {
    margin: 10,
    fontSize: "1.2em"
  },
  content: {
    marginTop: navBarHeigh
  }
};

export default ({ children }) => (
  <div>
    <Head>
      <title>Test App</title>
      <link
        href="https://fonts.googleapis.com/css?family=Lato"
        rel="stylesheet"
      />
    </Head>
    <style jsx global>{`
        html { 
          font-family: 'Lato', sans-serif;
        }
      `}</style>
    <div style={s.navbar}>
      <div style={s.title}>Title</div>
    </div>
    <div style={s.content}>{children}</div>
  </div>
);
