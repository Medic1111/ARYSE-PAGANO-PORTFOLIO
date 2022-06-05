import HeroText from "../components/HomeComps/HeroText/HeroText";
import Head from "next/head";
import React from "react";
const Home = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Aryse Tansy Web Development</title>
        <meta
          name="description"
          content="Full stack web developer utilizing MERN to make things happen."
        ></meta>
      </Head>
      <div className="heroDiv">
        <HeroText />
      </div>
    </React.Fragment>
  );
};
export default Home;
