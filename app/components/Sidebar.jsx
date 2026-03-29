import styles from "../styles/sidebar.module.css";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <h3>Menu</h3>
      <ul>
        <li>Overview</li>
        <li>Users</li>
        <li>Bookings</li>
      </ul>
    </aside>
  );
}