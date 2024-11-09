import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1>Welcome to Comforty</h1>
        <p>Discover comfort and style for your home</p>
        <Link href="/products" className={styles.cta}>
          Shop Now
        </Link>
      </section>

      <section className={styles.featured}>
        <h2>Featured Products</h2>
        <div className={styles.productGrid}>
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className={styles.productCard}>
              <Image
                src={`/images/ch${i}.png`}
                alt={`Product ${i}`}
                width={200}
                height={200}
              />
              <h3>Comfortable Chair</h3>
              <p>$199.99</p>
              <Link href={`/products/${i}`} className={styles.button}>
                View Details
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.about}>
        <h2>About Comforty</h2>
        <p>
          At Comforty, we believe that everyone deserves a comfortable and
          stylish home. Our carefully curated collection of furniture pieces
          combines aesthetics with functionality to enhance your living spaces.
        </p>
        <Link href="/about" className={styles.button}>
          Learn More
        </Link>
      </section>
    </div>
  );
}
