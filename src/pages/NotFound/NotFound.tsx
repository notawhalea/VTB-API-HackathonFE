import React from "react";
import styles from "./NotFound.module.scss";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className={styles.containerNotFound}>
      <div className={styles.notfound}>
        <div className={styles.notfound404}>
          <h3>Oops! Page not found</h3>
          <h1>
            <span>4</span>
            <span>0</span>
            <span>4</span>
          </h1>
        </div>
        <h2>we are sorry, but the page you requested was not found</h2>
        <Link to="/">
          <button>BACK</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
