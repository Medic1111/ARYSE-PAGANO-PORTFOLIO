import React from "react";
import CardBox from "../../components/AboutComps/CardBox/CardBox";
import Head from "next/head";
const About = () => {
  return (
    <React.Fragment>
      <Head>
        <title>About Aryse Tansy</title>
        <meta name="description" content="Who's she?"></meta>
      </Head>
      <div className="divBox">
        <CardBox />
      </div>
    </React.Fragment>
  );
};
export default About;
