import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../NavBar/NavBar.module.css'

const NavBar = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <h1 className={styles.main}>Shoe Store</h1>
        <ul className={styles.lists}>
          <li className={styles.list}><Link to="/" className={styles.links}>Home</Link></li>
          <li className={styles.list}><Link to="/product" className={styles.links}>Product</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar;
