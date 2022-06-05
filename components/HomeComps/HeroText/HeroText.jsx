import classes from "./HeroText.module.css";
import Link from "next/link";
const HeroText = () => {
  return (
    <section className={classes.textBox}>
      <h2 className={classes.mern}>
        Full stack web developer utilizing MERN stack to make things happen...
      </h2>
      <Link href="/projects">
        <li className={classes.button}>
          <span className={classes.span}>Projects</span>
        </li>
      </Link>
    </section>
  );
};

export default HeroText;
