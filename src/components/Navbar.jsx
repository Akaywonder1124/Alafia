import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { navLinks } from "../constants";
import Button from "./Button";
import styles from "../styles/NavBar.module.css";

function Navbar() {
  return (
    <header className="">
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <MenuDesktop />
      </nav>
    </header>
  );
}

function MenuDesktop() {
  return (
    <ul className={styles.ul}>
      <div className="flex outfit-medium text-white font-normal max-lg:hidden">
        {navLinks.map((navLink) => (
          <li key={navLink.link} className="md:ml-10 ">
            <NavLink to={navLink.link}>{navLink.label}</NavLink>
          </li>
        ))}
      </div>
      <div className={`${styles.openLinks} lg:hidden`}>&#8801;</div>
      <div>
        <Button type="cta" label="Book Now" />
      </div>
    </ul>
  );
}

export default Navbar;
