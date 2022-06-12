import { useState } from "react";
import classes from "./Form.module.css";
import axios from "axios";

const Form = ({ setHasSubmitted }) => {
  const [isInvalid, setIsInvalid] = useState(false);

  const [userInfo, setUserInfo] = useState({
    email: "",
    name: "",
  });
  const changeUserInfo = (event) => {
    setIsInvalid(false);
    const { name, value } = event.target;
    setUserInfo((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    if (
      userInfo.email.length >= 6 &&
      userInfo.name.length >= 2 &&
      userInfo.email.includes("@") &&
      userInfo.email.includes(".co")
    ) {
      await axios
        .post("/api/submit-form", { userInfo })
        .then((serverRes) => {
          if (serverRes.status === 200) {
            setHasSubmitted((prev) => !prev);
          }
        })
        .catch((err) => console.log(err));
      setUserInfo({ email: "", name: "" });
    } else {
      setIsInvalid(true);
    }
  };
  return (
    <form className={classes.box}>
      <div className={classes.content}>
        <h2 className={classes.contactH2}>Alô?</h2>
        <input
          onChange={changeUserInfo}
          value={userInfo.email}
          type="email"
          placeholder="Email"
          className={classes.email}
          name="email"
          autoComplete="off"
        ></input>
        <input
          onChange={changeUserInfo}
          value={userInfo.name}
          type="text"
          placeholder="Name"
          className={classes.email}
          name="name"
          autoComplete="off"
        ></input>
        {isInvalid && (
          <p className={classes.contactP}>
            Invalid Email Address or Name field is empty
          </p>
        )}

        <button onClick={submitHandler} className={classes.button}>
          <span className={classes.span}>Send</span>
        </button>
        <p className={classes.contactP}>
          Or reach me via email directly: medictansy@gmail.com
        </p>
        <p className={classes.contactP}>WhatsApp: 7543670607</p>
        <p className={classes.contactP}>GITHUB: medic1111</p>
      </div>
    </form>
  );
};

export default Form;
