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
    </section>
  );
};
export default Card;
