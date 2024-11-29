import logo from "./resource/EventAura.png";
import logo2 from "./AppDet.svg";
// import "./Header.css";
import { Header } from "./Header";
// import "./Frontpage.css";
import styles from "./styles/Frontpage.module.css";

// styles.nl = { background-color:#000000 };

export function FrontPage() {
  return (
    <>
      <div className={styles.detail}>
        <div className={styles.hdr1}>
          <Header />
        </div>
        <div className={styles.center}>
          {/* <p className="appdat">Event Aura</p> */}
          <div className={styles.pagedat}>
            <button className={styles.btn2}> About Us</button>
            <button className={styles.btn2}>Get Started</button>
          </div>
          <div className={styles.logo2}>
            <img src={logo2} />
            <p className={styles.quote}>
              First Impression Is The Last Impression
            </p>
          </div>
        </div>
      </div>

      {/* <nav>
        <div className="logo">
          <div className="flexx">
            <img src={logo} alt="testing image" width={100} className="img" />
            <div className="in2">
              <p className="appname">Event Aura</p>
              <p className="apna">Event Management</p>
            </div>
          </div>
          <div className="navi">
            <p className="in">Home</p>
            <p className="in">About</p>
            <p className="in">Event</p>
            <p className="in">Blocks</p>
            <p className="in">Contacts</p>
            <input
              type="text"
              className="in search"
              placeholder="         Search...."
            />
            <button className="in btn">Signup/Login</button>
          </div>
        </div>
      </nav> */}
    </>
  );
}
