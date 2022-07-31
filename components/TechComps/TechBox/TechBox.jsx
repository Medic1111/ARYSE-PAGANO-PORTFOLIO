import TechCard from "../TechCard/TechCard";
import classes from "./TechBox.module.css";
const TechBox = () => {
  return (
    <section className={classes.section}>
      <TechCard techName="Jira" />
      <TechCard techName="Agile/SCRUM" />
      <TechCard techName="Git" />
      <TechCard techName="Github" />
      <TechCard techName="HTML" />
      <TechCard techName="CSS" />
      <TechCard techName="JS" />
      <TechCard techName="NodeJS" />
      <TechCard techName="Express" />
      <TechCard techName="MongoDB" />
      <TechCard techName="Postman" />
      <TechCard techName="Jest" />
      <TechCard techName="React" />
      <TechCard techName="React-Redux" />
      <TechCard techName="NextJS" />
    </section>
  );
};
export default TechBox;
