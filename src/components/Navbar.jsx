// import { NavLink } from "react-router-dom";
// import Logo from "./Logo";
// import { navLinks } from "../constants";
// import Button from "./Button";
// import styles from "../styles/NavBar.module.css";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { useRef } from "react";

// function Navbar() {
//   const navRef = useRef();
//   const showNavbar = () => {
//     // Check if navRef.current is not null before accessing its properties
//     if (navRef.current) {
//       navRef.current.classList.toggle("responsive_nav");
//     }
//   };

//   return (
//     <header className={styles.header}>
//       <div className={styles.logo}>
//         <Logo />
//       </div>
//       <nav className={styles.nav} ref={navRef}>
//         <MenuItems showNavbar={showNavbar} />
//       </nav>
//       <button className="nav-btn" onClick={showNavbar}>
//         <FaBars />
//       </button>
//     </header>
//   );
// }

// function MenuItems() {
//   return (
//     <ul className={styles.ul}>
//       <div className="flex outfit-medium text-white font-normal">
//         {navLinks.map((navLink) => (
//           <li key={navLink.link} className="md:ml-10 ">
//             <NavLink to={navLink.link}>{navLink.label}</NavLink>
//           </li>
//         ))}
//       </div>
//       <div>
//         <Button type="cta" label="Book Now" />
//       </div>
//       <button className="nav-btn nav-close-btn">
//         <FaTimes />
//       </button>
//     </ul>
//   );
// }

// export default Navbar;

import { useRef } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { navLinks } from "../constants";
import Logo from "./Logo";
import Button from "./Button";
import "../styles/main.css";
import styles from "../styles/NavBar.module.css";

function Navbar() {
  return (
    <>
      <header className="justify-evenly max-lg:hidden">
        <div className={styles.logo}>
          <Logo />
        </div>
        <nav>
          {navLinks.map((navLink) => (
            <li key={navLink.link} className="list-none text-sm">
              <NavLink to={navLink.link}>{navLink.label}</NavLink>
            </li>
          ))}
        </nav>
        <div className="">
          <Button type="cta" label="Book Now" />
        </div>
      </header>
      <MobileNavigation />
    </>
  );
}

function MobileNavigation() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <header className="justify-between px-10 lg:hidden">
      <div className={styles.logo}>
        <Logo />
      </div>
      <nav ref={navRef}>
        {navLinks.map((navLink) => (
          <li key={navLink.link} className="list-none text-sm">
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
