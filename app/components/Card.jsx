import styles from "../styles/card.module.css";

export default function Card({ title, desc }) {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}