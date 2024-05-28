import React from 'react';
import styles from '../styles/ButtonsFP.module.css';

function Buttons({ onLoginClick, onSignupClick }) {
  return (
    <div className={styles.loginPage}>
      <div className={styles.logoImage}>
        <img src="/logo-first-page.png" alt="Logo" />
      </div>

      <div className={styles.buttons}>
        <button
          type="button"
          className={styles.loginButton}
          onClick={onLoginClick}
        >
          Login
        </button>
        <button
          type="button"
          className={styles.registerButton}
          onClick={onSignupClick}
        >
          Create an Account
        </button>
      </div>
    </div>
  );
}

export default Buttons;
