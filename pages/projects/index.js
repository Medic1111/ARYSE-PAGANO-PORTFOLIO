import React, { lazy, Suspense } from "react";
import Loading from "../../components/UI/Loading/Loading";
import Head from "next/head";
const ProjectsComp = lazy(() =>
  import("../../components/ProjectsComps/Projects")
);
const Projects = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Projects by Aryse</title>
        <meta
          name="description"
          content="These are some of Aryse's projects..."
        ></meta>
      </Head>
      <Suspense fallback={<Loading />}>
        <div className="divBox">
          <ProjectsComp />
        </div>
      </Suspense>
    </React.Fragment>
  );
};
export default Projects;
