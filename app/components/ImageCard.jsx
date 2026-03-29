import Image from "next/image";
import styles from "../styles/image.module.css";

export default function ImageCard({ src, title }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={src}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <h3>{title}</h3>
    </div>
  );
}