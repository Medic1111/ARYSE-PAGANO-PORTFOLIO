import classes from "./Confirm.module.css";
const Confirm = ({ setHasSubmitted }) => {
  const closeConfirm = (event) => {
    event.preventDefault();
    setHasSubmitted((prev) => !prev);
  };

  return (
    <form className={classes.box}>
      <div className={classes.content}>
        <h2 className={classes.contactH2}>Confirmed</h2>
        <p className={classes.contactP}>
          Thank you for reaching out. I will get in touch soon.
        </p>

        <button onClick={closeConfirm} className={classes.button}>
          <span className={classes.span}>Close</span>
        </button>
      </div>
    </form>
  );
};

export default Confirm;
