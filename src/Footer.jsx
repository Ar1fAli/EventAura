import style from "./styles/Footer.module.css";
import location from "./location-pin-alt-1-svgrepo-com.svg";
import email from "./email-1573-svgrepo-com.svg";
import call from "./viber-svgrepo-com.svg";

export function Footer() {
  return (
    <>
      <div className={style.footerdt}>
        <div className={style.footer}>
          <div className={style.footerdv}>
            <div>
              <h3>ABOUT US</h3>
            </div>
            <div>
              <h3>GET IN TOUCH</h3>
              <div className={style.imgflx}>
                <img src={location} className={style.imgbtm} />
                <p className={style.para}>90 Street Ahmadabad</p>
              </div>
              <div className={style.imgflx}>
                <img src={call} className={style.imgbtm} />
                <p className={style.para}>91 910254390</p>
              </div>
              <div className={style.imgflx}>
                <img src={email} className={style.imgbtm} />
                <p className={style.para}>anything@gmail.com</p>
              </div>
            </div>
            <div>
              <h3>LATEST EVENTS</h3>
            </div>
            <div>
              <h3>SUBSCRIBE</h3>
              <div>
                <input
                  type="email"
                  className={style.emailin}
                  placeholder="Enter Your Email"
                ></input>
              </div>
              <button className={style.subbtn}>SUBSCRIBE</button>
            </div>
          </div>
        </div>
        <div className={style.copyrt}>
          <p className={style.cpyrgt}>
            © 2024 Events. All rights reserved | Developed by{" "}
            <span>Arif Ali</span>
          </p>
        </div>
      </div>
    </>
  );
}
