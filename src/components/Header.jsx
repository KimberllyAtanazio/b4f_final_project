import React, { useState, useEffect } from 'react';
import styles from '../styles/Header.module.css';

export default function Header(){
  return (
    <div className={styles.container}>
      <div className={styles.phase}>
        <p className={styles.text}>Who roams the world?</p>
        <h2 className={styles.subtext}>Girls!</h2>
      </div>
    </div>
  );
};


