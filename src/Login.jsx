import { Header } from "./Header";
// import styles from "./styles/Login2.module.css";
import styles from "./styles/Login2.module.css";

// import "./Login2.css";
import imag from "./Background.jpg";
export function Login() {
  return (
    <>
      <div className={styles.hdr}>
        <Header />
      </div>
      <div className={styles.header}>
        <div className={styles.sigp}>
          {/* <div className="sinlg"></div> */}
          <p className={styles.sup}>Login</p>

          <div className={styles.fn}>
            {/* <label>Gmail </label> */}
            <input className={styles.fni} placeholder="E-Mail" />
          </div>

          <div className={styles.fn}>
            {/* <label>Gmail </label> */}
            <input className={styles.fni} placeholder="Password" />
          </div>

          {/* <p className={styles.gdt}"gdt">Gender</p> */}

          <div>
            <button className={styles.subbtn}>Login</button>
          </div>
        </div>
      </div>
    </>
  );
}
