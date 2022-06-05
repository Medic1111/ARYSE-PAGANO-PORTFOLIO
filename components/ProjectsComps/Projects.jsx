import classes from "./Projects.module.css";
import projData from "../../data/projData";
import Link from "next/link";
import Image from "next/image";

const ProjectsComp = () => {
  return (
    <section className={classes.flexParent}>
      {projData.map((obj, index) => {
        return (
          <Link href={`projects/${obj.path}`}>
            <div className={classes.block}>
              <Image
                className={classes.pic}
                src={obj.img1}
                layout="responsive"
              />
            </div>
          </Link>
        );
      })}
    </section>
  );
};
export default ProjectsComp;
