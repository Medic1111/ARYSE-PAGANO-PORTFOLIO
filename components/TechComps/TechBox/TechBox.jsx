import TechCard from "../TechCard/TechCard";
import classes from "./TechBox.module.css";
const TechBox = () => {
  return (
    <section className={classes.section}>
      <TechCard techName="HTML" />
      <TechCard techName="CSS" />
      <TechCard techName="JS" />
      <TechCard techName="NodeJS" />
      <TechCard techName="Express" />
      <TechCard techName="EJS" />
      <TechCard techName="MongoDB" />
      <TechCard techName="Mongoose" />
      <TechCard techName="Mongo Atlas" />
      <TechCard techName="Postman" />
      <TechCard techName="Robo3t" />
      <TechCard techName="React" />
      <TechCard techName="React-Redux" />
      <TechCard techName="Redux-Toolkit" />
      <TechCard techName="NextJS" />
    </section>
  );
};
export default TechBox;
