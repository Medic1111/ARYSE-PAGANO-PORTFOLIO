import classes from "./Wrapper.module.css";
const Wrapper = (props) => {
  return <main className={classes.main}>{props.children}</main>;
};
export default Wrapper;
