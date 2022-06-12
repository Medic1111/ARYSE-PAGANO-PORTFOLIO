import Card from "../Card/Card";
import classes from "./CardBox.module.css";

const CardBox = () => {
  return (
    <section className={classes.section}>
      <Card />
    </section>
  );
};
export default CardBox;
