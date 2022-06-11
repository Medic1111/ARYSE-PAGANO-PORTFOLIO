import classes from "./Projects.module.css";
import projData from "../../data/projData";
import Image from "next/image";
import React from "react";

const ProjectsComp = () => {
  return (
    <section className={classes.flexParent}>
      {projData.map((obj, index) => {
        return (
          <div className={classes.div}>
            <p className={classes.pTitle}>{obj.name}</p>
            <div className={classes.block}>
              <Image
                className={classes.pic}
                src={obj.img1}
                layout="responsive"
              />
            </div>
            <p className={classes.tech}>{obj.tech}</p>
            <a className={classes.anchor} href={obj.url} target="_blank">
              Live version here
            </a>
            <a className={classes.anchor} href={obj.repo} target="_blank">
              Source code
            </a>

            <p className={classes.p}>{obj.description}</p>
          </div>
        );
      })}
    </section>
  );
};
export default ProjectsComp;
