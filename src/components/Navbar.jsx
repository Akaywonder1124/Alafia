import { useRef } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { navLinks } from "../constants";
import Logo from "./Logo";
import Button from "./Button";
import "../styles/main.css";
import styles from "../styles/NavBar.module.css";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <div className={styles.logo}>
        <Logo />
      </div>
      <nav ref={navRef}>
        {navLinks.map((navLink) => (
          <li key={navLink.link} className="list-none">
            <NavLink to={navLink.link}>{navLink.label}</NavLink>
          </li>
        ))}
        <div className="">
          <Button type="cta" label="Book Now" />
        </div>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>

      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
