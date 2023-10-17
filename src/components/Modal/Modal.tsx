import styles from "./Modal.module.scss";
import React from "react";
import { Link } from "react-router-dom";
const Modal = () => {
  return (
    <>
      <div className={styles.popup}>
        <div className={styles.popupInner}>
          <div className={styles.mainContainer}>
            <img src="src/assets/images/logo.png" alt="Logo" height="200" />
            <p className={styles.walletTitleGap}>Кошелек добра</p>
            <p className={styles.walletTitle}>
              Сделай первый шаг на пути к добру
            </p>
            <p className={styles.subTitle}>
              Мы расскажем как можно начать помогать даже если денег нет{" "}
            </p>
            <Link to="/home">
              <button className={styles.buttonRegister}>Войти</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Modal;