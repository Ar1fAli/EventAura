import styles from "./styles/Header.module.css";
import { Link } from "react-router-dom";
import logo from "./photo_2024-11-10_01-51-13.jpg";
import logo1 from "./photo_2024-11-10_01-51-18.jpg";
import logo2 from "./photo_2024-11-10_01-51-22.jpg";
import logo3 from "./photo_2024-11-10_01-51-26.jpg";
import logo4 from "./sc1.png";
import { useRef } from "react";

export function Header() {
  const logorf = useRef();
  // const eventshnd = () => {
  //   logorf.current.style.backgroundColor = "#FFFFFF";
  //   logorf.current.style.position = "initial";
  //   logorf.current.style.color = "#000000";

  //   // logorf.current.style.backgroundColor = "black";
  //   console.log(logorf);
  // };
  return (
    <>
      <nav>
        <div className={styles.logo} ref={logorf}>
          <div className={styles.flexx}>
            <img
              src={logo4}
              alt="testing image"
              // width={100}
              className={styles.img}
            />
            <div className={styles.in2}>
              <p className={styles.appname}>Event Aura</p>
              <p className={styles.apna}>Event Management</p>
            </div>
          </div>
          <div className={styles.navi}>
            <button className={styles.in}>
              <Link to="/" className={styles.nl}>
                Home
              </Link>
            </button>
            <button className={styles.in}>
              <Link to="/" className={styles.nl}>
                About
              </Link>
            </button>
            <button className={styles.in}>
              <Link to="/events" className={styles.nl}>
                Event
              </Link>
            </button>
            <button className={styles.in}>
              <Link to="/" className={styles.nl}>
                Blogs
              </Link>
            </button>
            <button className={styles.in}>
              <Link to="/" className={styles.nl}>
                Contacts
              </Link>
            </button>
          </div>
          <div className={styles.btndiv1}>
            <Link to="/signup" className={styles.nl2}>
              <button className={styles.btn5}>Signup</button>
            </Link>
            <Link to="/login" className={styles.nl2}>
              <button className={styles.btn5}>Login</button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
