import styles from "./Funds.module.scss";
import { OidcSecure } from "@axa-fr/react-oidc";
import React from "react";

const Funds = () => {
  return (
    <OidcSecure>
      <div className={styles.mainContainer}>
        <p className={styles.fundsTitle}>Фонды</p>
        <p className={styles.selectedFunds}>Выбранные фонды</p>
        <p className={styles.selectedFundsSub}>
          По умолчанию все пожертвования распределяются между всеми фондами
        </p>
      </div>
    </OidcSecure>
  );
};

export default Funds;
