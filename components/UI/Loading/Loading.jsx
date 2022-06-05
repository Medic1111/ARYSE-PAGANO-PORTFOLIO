import classes from "./Loading.module.css";

const Loading = () => {
  return (
    <section className={classes.section}>
      <div className={classes.loaderWrapper}>
        <div className={classes.loader}>
          <div className={classes.loader}></div>
          <div className={classes.loaderInner}></div>
        </div>
      </div>
    </section>
  );
};
export default Loading;
