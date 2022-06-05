import classes from "./MenuModal.module.css";
import { useContext } from "react";
import { menuModalContext } from "../../../contexts/menuModal-context";
import Link from "next/link";
const MenuModal = () => {
  const modalCtx = useContext(menuModalContext);
  const closeModalHandler = () => {
    modalCtx.setIsMenu((prev) => !prev);
  };

  return (
    <article className={classes.article}>
      <ul className={classes.ul}>
        <Link href="/">
          <li onClick={closeModalHandler} className={classes.li}>
            Home
          </li>
        </Link>
        <Link href="/about">
          <li onClick={closeModalHandler} className={classes.li}>
            Aryse
          </li>
        </Link>
        <Link href="/tech">
          <li onClick={closeModalHandler} className={classes.li}>
            Tech/tools
          </li>
        </Link>
        <Link href="/projects">
          <li onClick={closeModalHandler} className={classes.li}>
            Projects
          </li>
        </Link>
        <Link href="/contact">
          <li onClick={closeModalHandler} className={classes.li}>
            Contact
          </li>
        </Link>
      </ul>
    </article>
  );
};

export default MenuModal;
