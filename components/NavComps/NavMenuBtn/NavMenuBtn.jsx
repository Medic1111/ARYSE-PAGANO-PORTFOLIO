import classes from "./NavMenuBtn.module.css";
import { useContext } from "react";
import { menuModalContext } from "../../../contexts/menuModal-context";
const NavMenuBtn = () => {
  const menuCtx = useContext(menuModalContext);
  const openMenuModalHandler = () => {
    menuCtx.setIsMenu((prev) => !prev);
  };
  return (
    <button className={classes.cta} onClick={openMenuModalHandler}>
      <span className={classes.hoverUnderlineAnimation}> Menu </span>
      <svg
        className={classes.svg}
        id="arrow-horizontal"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="10"
        viewBox="0 0 46 16"
      >
        <path
          id="Path_10"
          data-name="Path 10"
          d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
          transform="translate(30)"
        ></path>
      </svg>
    </button>
  );
};

export default NavMenuBtn;
