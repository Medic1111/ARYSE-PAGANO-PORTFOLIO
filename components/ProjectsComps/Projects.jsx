import classes from "./Projects.module.css";
import projData from "../../data/projData";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

const ProjectsComp = () => {
  return (
    <section className={classes.flexParent}>
      {projData.map((obj, index) => {
        return (
          <div className={classes.div}>
            {/* TEST */}
            <p className={classes.pTitle}>{obj.name}</p>
            {/* TESTEND */}
            {/* <Link href={`projects/${obj.path}`}> */}
            <div className={classes.block}>
              <Image
                className={classes.pic}
                src={obj.images[0]}
                layout="responsive"
              />
            </div>
            {/* </Link> */}
            {/* TEST */}

            <p className={classes.tech}>{obj.tech}</p>
            <a className={classes.anchor} href={obj.url} target="_blank">
              Live version here
            </a>
            <a className={classes.anchor} href={obj.repo} target="_blank">
              Source code
            </a>

            <p className={classes.p}>{obj.description}</p>

            {/* TESTEND */}
          </div>
        );
      })}
    </section>
  );
};
export default ProjectsComp;
