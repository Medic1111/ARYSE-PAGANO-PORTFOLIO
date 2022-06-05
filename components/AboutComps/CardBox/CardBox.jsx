import Card from "../Card/Card";
import classes from "./CardBox.module.css";

const CardBox = () => {
  return (
    <section className={classes.section}>
      <Card year="1991" description="Born in Sao Paulo, Brazil." />
    </section>
  );
};
export default CardBox;
