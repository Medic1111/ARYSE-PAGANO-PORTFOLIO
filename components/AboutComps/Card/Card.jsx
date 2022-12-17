import classes from "./Card.module.css";
import Me from "../../../public/Me/me.png";
import Image from "next/image";

const Card = () => {
  return (
    <section className={classes.section}>
      <p className={classes.p}>ARYSE PAGANO</p>
      <p className={classes.pDes}>
        Practical, peculiar, solution focused, determined and objective.
      </p>

      <p className={classes.pDes}>No non-sense.</p>

      <hr className={classes.hr} />
      <a
        className={classes.resume}
        href="https://www.icloud.com/iclouddrive/0dfe58iygUum4XFDI8kl4xkYg#ARYSE-PAGANO_RESUME_PDF"
        target="_blank"
      >
        Resume
      </a>
    </section>
  );
};
export default Card;
