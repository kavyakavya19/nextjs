// components/shared/Card.jsx
import styles from "../../styles/module.module.css";

const Card = ({ title, children }) => {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
};

export default Card;