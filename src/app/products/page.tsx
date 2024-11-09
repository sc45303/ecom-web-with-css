import Image from "next/image";
import Link from "next/link";
import styles from "./products.module.css";

const products = [
  {
    id: 1,
    name: "Cozy Sofa",
    price: 999.99,
    image: "/images/ch1.png", // Correct the path to start with a leading slash
  },
  {
    id: 2,
    name: "Elegant Dining Table",
    price: 599.99,
    image: "/images/download3.png", // Correct the path
  },
  {
    id: 3,
    name: "Comfortable Bed",
    price: 799.99,
    image: "/images/ch3.png", // Correct the path
  },
  {
    id: 4,
    name: "Stylish Bookshelf",
    price: 299.99,
    image: "/images/ch4.png", // Correct the path
  },
  {
    id: 5,
    name: "Modern Coffee Table",
    price: 199.99,
    image: "/images/ch5.png", // Correct the path
  },
  {
    id: 6,
    name: "Ergonomic Office Chair",
    price: 249.99,
    image: "/images/ch6.png", // Correct the path
  },
];

export default function Products() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Our Products</h1>
      <div className={styles.productGrid}>
        {products.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={300}
            />
            <h2>{product.name}</h2>
            <p className={styles.price}>${product.price.toFixed(2)}</p>
            <Link href={`/products/${product.id}`} className={styles.button}>
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
