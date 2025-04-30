import React from 'react';
import styles from './style.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p>Made by Maxat</p>
      </div>
    </footer>
  );
};

export default Footer;
