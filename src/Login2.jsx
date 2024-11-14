import { Header } from "./Header";
// import styles from "./styles/Login2.module.css";
import styles from "./styles/Login2.module.css";

// import "./Login2.css";
import imag from "./Background.jpg";
export function Login2() {
  return (
    <>
      <div className={styles.hdr}>
        <Header />
      </div>
      <div className={styles.header}>
        <div className={styles.sigp}>
          {/* <div className="sinlg"></div> */}
          <p className={styles.sup}>Sign Up</p>
          <div className={styles.fn}>
            {/* <label>Gmail </label> */}
            <input className={styles.fni} placeholder="First Name" />
          </div>
          <div className={styles.fn}>
            {/* <label>Gmail </label> */}
            <input className={styles.fni} placeholder="Last Name" />
          </div>
          <div className={styles.fn}>
            {/* <label>Gmail </label> */}
            <input className={styles.fni} placeholder="E-Mail" />
          </div>
          <div className={styles.fn}>
            {/* <label>Gmail </label> */}
            <input className={styles.fni} placeholder="Phone Number" />
          </div>
          <div className={styles.fn}>
            {/* <label>Gmail </label> */}
            <input className={styles.fni} placeholder="Password" />
          </div>
          <div className={styles.fn}>
            {/* <label>Gmail </label> */}
            <input className={styles.fni} placeholder="Confirms Password" />
          </div>
          {/* <p className={styles.gdt}"gdt">Gender</p> */}
          <div className={styles.gd}>
            {/* <label>Gender </label> */}
            <input type="radio" name="gd" />
            <label>Male </label>

            <input type="radio" name="gd" />
            <label>Female </label>

            <input type="radio" name="gd" />
            <label>Other</label>
          </div>
          <div>
            <button className={styles.subbtn}>Submit</button>
          </div>
        </div>
      </div>
    </>
  );
}
