import Link from "next/link";
import styles from "../styles/button.module.css";

export default function ArrowButton({ text, link }) {
  return (
    <Link href={link} className={styles.arrowBtn}>
      {text} →
    </Link>
  );
}