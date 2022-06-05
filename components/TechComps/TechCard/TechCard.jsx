import classes from "./TechCard.module.css";
const TechCard = ({ techName }) => {
  return (
    <article className={classes.article}>
      <p className={classes.p}>{techName}</p>
    </article>
  );
};
export default TechCard;
