import classes from "./Nav.module.css";
import Link from "next/link";
import NavMenuBtn from "../NavMenuBtn/NavMenuBtn";

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <h1 className={classes.h1}>AT</h1>
      <ul className={classes.ul}>
        <Link href="/">
          <li className={classes.li}>Home</li>
        </Link>
        <Link href="/about">
          <li className={classes.li}>Aryse</li>
        </Link>
        <Link href="/tech">
          <li className={classes.li}>Tech/tools</li>
        </Link>
        <Link href="/projects">
          <li className={classes.li}>Projects</li>
        </Link>
        <Link href="/contact">
          <li className={classes.li}>Contact</li>
        </Link>
      </ul>
      <NavMenuBtn />
    </nav>
  );
};
export default Nav;
