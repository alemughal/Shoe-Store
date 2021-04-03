import React from 'react';
import Shoes from '../../Shoes.json';
import { Link } from 'react-router-dom';
import styles from '../Product/Product.module.css';


function Product() {
    return (
        <div className={styles.product}>
            <h1 id={styles.proHead}>Products</h1>
            <div className={styles.container}>
                {Object.keys(Shoes).map(keyName => {
                    const shoe = Shoes[keyName];
                    return (<div key={keyName} >
                        <h2>{shoe.name}</h2>
                        <h2>{shoe.price}</h2>
                        <img src={shoe.img} alt="shoes" width="200px"/>
                        <br/>
                        <button><Link to={`/product/${keyName}`} id={styles.btn}>Details</Link></button>
                    </div>)
                }
                )}
            </div>
        </div>
    )
}

export default Product;