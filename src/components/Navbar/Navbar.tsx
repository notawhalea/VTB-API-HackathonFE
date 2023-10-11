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
                    <NavLink
                        to="/"
                        end
                        style={{ textDecoration: "none", color: "black", display: "flex" }}
                    >
                        <img src="src/assets/logo.png" alt="Logo" height="80px"/>
                        <h3 className={styles.logo}>Кошелек Добра</h3>
                    </NavLink>
                </div>
                <ul
                    className={mobile ? styles.navLinksMobile : styles.navLinks}
                    onClick={() => setMobile(false)}
                >
                    <li>
                        <Link to="/" style={{ color: "black" }}>
                            Фонды
                        </Link>
                    </li>
                    <li>
                        <Link to="/" style={{ color: "black" }}>
                            Пожертования
                        </Link>
                    </li>
                    <li>
                        <Link to="/" style={{ color: "black" }}>
                            Профиль
                        </Link>
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
