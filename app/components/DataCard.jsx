"use client";

import styles from "../styles/data.module.css";

export default function DataCard({ item }) {
  return (
    <div className={styles.card}>
      <h3>{item.title || item.name}</h3>
      <p>{item.desc || "No description"}</p>
    </div>
  );
}