import styles from './Modal.module.scss'
import React from "react";
const Modal = ({ closeModal }) => {
    return <div className={styles.mainContainer}>
        <img src="src/assets/logo.png" alt="Logo" height="200"/>
        <p className={styles.walletTitleGap}>Кошелек добра</p>
        <p className={styles.walletTitle}>Сделай первый шаг на пути к добру</p>
        <p className={styles.subTitle}>Мы расскажем как можно начать помогать даже если денег нет </p>
        <button className={styles.buttonRegister} onClick={closeModal}>Регистрация</button>
        <a className={styles.linkLogin}>Войти</a>
    </div>
}
export default Modal