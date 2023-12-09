import { Outlet, Link } from "react-router-dom";
import styles from "./header.module.css";

function Header() {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.logo}>LOGO</div>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link to="/details/EUR-USD">EUR-USD Details</Link>
            </li>
            <li>
              <Link to="/details/EUR-USD">EUR-USD Details</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default Header;
