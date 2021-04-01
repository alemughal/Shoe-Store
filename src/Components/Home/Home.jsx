import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../Home/Home.module.css';
import HomePic from '../../Images/home-pic.png'


function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.pic}>
      </div>
      <img src={HomePic} alt="Shoe-Pic" width="40%"/>
      <h2 className={styles.home} id={styles.heading}>NEW IN</h2>
      <h1 className={styles.head}>YEEZY BOOST <br /> SPLY-350</h1>
      <h2 className={styles.home}>Explore the new collections of sneaker</h2>
      <button><Link to="/product" id={styles.hello}>Explore <br/> Now</Link></button>
      </div>
  )
}

export default Home;