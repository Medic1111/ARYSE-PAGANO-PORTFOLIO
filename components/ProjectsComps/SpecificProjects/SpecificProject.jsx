import classes from "./SpecificProject.module.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import projData from "../../../data/projData";
//
const SpecificProject = () => {
  const router = useRouter();
  const currentUrl = router.query.specific;
  console.log(currentUrl);

  const [currentProject, setCurrentProj] = useState(projData);

  const fetchData = () => {
    setCurrentProj((prev) => {
      return prev.filter((obj) => {
        return obj.path === currentUrl;
      });
    });
    console.log(currentProject[0]);
  };

  useEffect(fetchData, []);

  return (
    <section className={classes.section}>
      {/* <h1 className={classes.title}>{currentProject[0].name}</h1>
      <div className={classes.imgBlock}>
        <Image
          src={currentProject[0].img1}
          width="500px"
          height="250px"
          layout="responsive"
        />
      </div>
      <p className={classes.tech}>Tech: {currentProject[0].tech}</p>
      <p className={classes.description}>{currentProject[0].description}</p>
      <a
        className={classes.anchor}
        href={currentProject[0].url}
        target="_blank"
      >
        Live version here
      </a> */}
      <div className={classes.imgBlock}>
        <Image
          src={currentProject[0].codeOne}
          width="500px"
          height="250px"
          layout="responsive"
        />
      </div>
      <div className={classes.imgBlock}>
        <Image
          src={currentProject[0].codeTwo}
          width="500px"
          height="250px"
          layout="responsive"
        />
      </div>
      <div className={classes.imgBlock}>
        <Image
          src={currentProject[0].codeThree}
          width="500px"
          height="250px"
          layout="responsive"
        />
      </div>
    </section>
  );
};

export default SpecificProject;
