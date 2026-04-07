// components/layout/Sidebar.jsx
import styles from "../../styles/module.module.css";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <ul>
        <li>Home</li>
        <li>About</li>
      </ul>
    </aside>
  );
};

export default Sidebar;