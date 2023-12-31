import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const [mobile, setMobile] = useState(false);
  return (
    <>
      <nav className={styles.navbar}>
        <div>
          <NavLink to="/home" end className={styles.navbarLogo}>
            <img src="src/assets/images/logo.png" alt="Logo" height="80px" />
            <p className={styles.logo}>Кошелек Добра</p>
          </NavLink>
        </div>
        <ul
          className={mobile ? styles.navLinksMobile : styles.navLinks}
          onClick={() => setMobile(false)}
        >
          <li>
            <Link to="/funds">Фонды</Link>
          </li>
          <li>
            <Link to="/donations">Пожертвования</Link>
          </li>
          <li>
            <Link to="/profile">Профиль</Link>
          </li>
        </ul>
        <button
          className={styles.mobileMenuIcon}
          onClick={() => setMobile(!mobile)}
        >
          {mobile ? <ImCross /> : <FaBars />}
        </button>
      </nav>
    </>
  );
};
export default Navbar;
