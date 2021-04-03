import React from 'react';
import Shoes from '../../Shoes.json';
import Error from '../Error/Error';
import styles from '../ProductItem/ProductItem.module.css';
import { useParams } from 'react-router';


function ProductItem() {
  const { id } = useParams();
  const shoe = Shoes[id];

  if (!shoe)
    return <Error />
  else {
    return (
      <section className={styles.productContainer, styles.productDetail}>
        <div className={styles.productHeader}>
          <h1 className={styles.productTitle}>{shoe.name}</h1>
        </div>
        <div className={styles.content}>
          (STILL) DESIGNED TO KEEP YOU ON THE RUN.{" "}
          <p>
            The <strong>{shoe.name}</strong> continues to help keep
              you running. A refreshed upper uses Flywire technology that combines <br/>
              with Flyknit for support and breathability where you need it. The <br/>
              high foam heights provide soft responsiveness and long-lasting
              comfort. It's still one of our most-tested shoes, designed to help
              you feel the potential when your foot hits the pavement.
            </p>{" "}
          <p>
            Ventilated Where Needed <br /> An advanced Flyknit upper provides
              breathability where you need it most. It's strong and durable,
              helping to keep your foot secure with every mile. Flywire technology
              offers extra support and stability through the midfoot. <br/>
            </p>
            <br/>
          <p>
            {" "}
              Smooth Ride Nike React technology is a lightweight, durable foam
              that delivers a smooth, responsive ride. Shaped like a rocker, the
              foam provides support for the 3 phases of a runner's stride. It
              offers flexibility when your foot rises off the ground, a smooth
              ride when your foot is moving forwards and cushioning at ground
              contact. <br />
              Cushioned Feel, Higher Stacks <br /> Less material between the
              insole and midsole means you're closer to the foam. This helps
              create a more responsive experience. The foam itself has a higher
              height, providing a plush feel.
            </p>
          <ul>
            Benefits
              <li>
              Increased rubber on the outsole helps deliver traction and
              durability.
              </li>
            <li>Cushioned collar provides soft comfort.</li>
            <li>
              A wide shape provides a more stable ride, helping release energy
              with every step.
              </li>
            <li> Loop at the heel for easy on and off.</li>
              Product Details Weight
              <li>Weight (women's size 8): 244g (approx.) </li>
            <li>Offset: 8.4mm (Forefoot: 22.3mm, Heel: 30.7mm)</li>
            <li>Not intended for use as Personal Protective Equipment (PPE)</li>
            <li>Colour Shown: Violet Dust/Black/Cyber/Elemental Pink</li> 
          </ul>
        </div>
        <img src={shoe.img} alt="Picture" />
      </section>
    );
  }
}

export default ProductItem;