import React from "react";
import { OidcSecure } from "@axa-fr/react-oidc";
import styles from "./Home.module.scss";
import { useOidcUser } from "@axa-fr/react-oidc";
import { Link } from "react-router-dom";
const Home = () => {
  const { oidcUser } = useOidcUser();
  return (
    <OidcSecure>
      <div className={styles.mainContainer}>
        <p className={styles.goodDay}>Добрый день, {oidcUser?.given_name}!</p>
        <div className={styles.donationsInfo}>
          <p className={styles.totalMoney}>Всего пожертвовано: </p>
          <div>
            <p className={styles.totalMoneyValue}>209 143 ₽</p>
            <Link to="/donations">
              <button className={styles.buttonDonations}>История</button>
            </Link>
          </div>
        </div>
        <div>
          <p className={styles.settings}>Настройки</p>
          <p className={styles.incercled}>
            Округляй свои покупки и отправляй разницу в выбранные фонды
          </p>
          <div className={styles.btnContainer}>
            <button>25₽</button>
            <button className={styles.btnActive}>50₽</button>
            <button>100₽</button>
            <button>Умный шаг</button>
          </div>
        </div>
        <p className={styles.howIt}>Как работает округление?</p>
        <p className={styles.howIt}>Как работает умный шаг?</p>
        <div>
          <p className={styles.settings}>Благотворительные фонды</p>
          <p className={styles.incercled}>
            По умолчанию все пожертвования распределяются между всеми фондами
          </p>
          <Link to="/funds">
            <button className={styles.buttonSetting}>Настроить</button>
          </Link>
        </div>
      </div>
    </OidcSecure>
  );
};

export default Home;
