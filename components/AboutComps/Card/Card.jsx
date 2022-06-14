import classes from "./Card.module.css";
import Me from "../../../public/Me/me.png";
import Image from "next/image";

const Card = () => {
  return (
    <section className={classes.section}>
      <p className={classes.p}>ARYSE TANSY</p>
      <p className={classes.pDes}>
        Practical, peculiar, solution focused, determined and objective.
      </p>

      <p className={classes.pDes}>No non-sense.</p>

      <hr className={classes.hr} />
      <a
        className={classes.resume}
        href="https://www.icloud.com/pages/0308deaxC0HL0RI3eKd3W4FkQ#Aryse_Tansy-_Resume"
        target="_blank"
      >
        Resume
      </a>
    </section>
  );
};
export default Card;
