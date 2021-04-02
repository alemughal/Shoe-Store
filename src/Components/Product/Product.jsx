import React from 'react';
import Shoes from '../../Shoes.json';
import styles from '../Product/Product.module.css';


function Product() {
    console.log(Shoes)
    return (
        <div>
            <h1>Welcome to Product</h1>
            <div>
                {Object.keys(Shoes).map(keyName=>{
                    const shoe = Shoes[keyName];
                    return (<div key={keyName}>
                        <h2>{shoe.name}</h2>
                        <h2>{shoe.price}</h2>
                        <br/>
                        <img src={shoe.img} alt=""/>
                    </div>)
                }
                )}
            </div>
        </div>
    )
}

export default Product;