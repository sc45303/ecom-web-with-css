import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.column}>
          <h3>About Comforty</h3>
          <p>
            We provide high-quality, comfortable furniture for your home and
            office.
          </p>
        </div>
        <div className={styles.column}>
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/products">Products</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/terms">Terms & Conditions</a>
            </li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3>Contact Us</h3>
          <p>123 Furniture Street</p>
          <p>Comfort City, CO 12345</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@comforty.com</p>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>&copy; 2023 Comforty. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
