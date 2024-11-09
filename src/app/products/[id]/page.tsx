import Image from "next/image";
import styles from "./product.module.css";

const products = [
  {
    id: 1,
    name: "Cozy Sofa",
    price: 999.99,
    image: "/images/ch1.png",
    description: "A comfortable sofa perfect for your living room.",
  },
  {
    id: 2,
    name: "Elegant Dining Table",
    price: 599.99,
    image: "/images/ch5.png",
    description: "A stylish dining table for family gatherings.",
  },
  {
    id: 3,
    name: "Comfortable Bed",
    price: 799.99,
    image: "/images/ch3.png",
    description: "Sleep in luxury with our comfortable bed.",
  },
  {
    id: 4,
    name: "Stylish Bookshelf",
    price: 299.99,
    image: "//images/ch4.png",
    description: "Organize your books in style with our modern bookshelf.",
  },
  {
    id: 5,
    name: "Modern Coffee Table",
    price: 199.99,
    image: "/images/ch5.png",
    description: "A sleek coffee table for your living room.",
  },
  {
    id: 6,
    name: "Ergonomic Office Chair",
    price: 249.99,
    image: "/images/ch6.png",
    description:
      "Stay comfortable while working with our ergonomic office chair.",
  },
];

export default function ProductDetail({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === parseInt(params.id));

  if (!product) {
    return <div className={styles.container}>Product not found</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.productDetail}>
        <div className={styles.imageContainer}>
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
          />
        </div>
        <div className={styles.info}>
          <h1 className={styles.title}>{product.name}</h1>
          <p className={styles.price}>${product.price.toFixed(2)}</p>
          <p className={styles.description}>{product.description}</p>
          <button className={styles.addToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
