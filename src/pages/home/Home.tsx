import React from 'react';
import styles from './style.module.css';

const Home: React.FC = () => (
  <div className={styles.home}>
    <h1>Welcome to the Admin Panel</h1>
    <p>Manage products, categories, and orders efficiently.</p>
  </div>
);

export default Home;
