import React, { lazy, Suspense } from "react";
import Loading from "../../components/UI/Loading/Loading";
import Head from "next/head";
const TechBox = lazy(() =>
  import("../../components/TechComps/TechBox/TechBox")
);

const Tech = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Techs used by Aryse</title>
        <meta
          name="description"
          content="These are the technologies used by Aryse Tansy to make things happen!"
        ></meta>
      </Head>
      <Suspense fallback={<Loading />}>
        <div className="divBox">
          <TechBox />
        </div>
      </Suspense>
    </React.Fragment>
  );
};
export default Tech;
