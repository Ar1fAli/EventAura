import { Header } from "./Header";
// import styles from "./styles/Login2.module.css";
import styles from "./styles/Login2.module.css";

// import "./Login2.css";
import imag from "./Background.jpg";
import { Footer } from "./Footer";
import { useState } from "react";
export function Login2() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneno: "",
    password: "",
    cufpassword: "",
    maleStatus: "",
    femaleStatus: "",
    otherStatus: "",
  });
  const [data, setdata] = useState();
  const firstname = (e) => {
    // console.log(e.target.value);
    console.log(user.firstName);
    setUser({ ...user, firstName: e.target.value });
  };
  const lastName = (e) => {
    // console.log(e.target.value);
    console.log(user.lastName);
    setUser({ ...user, lastName: e.target.value });
  };
  const email = (e) => {
    // console.log(e.target.value);
    console.log(user.email);
    setUser({ ...user, email: e.target.value });
  };
  const phoneno = (e) => {
    // console.log(e.target.value);
    console.log(user.phoneno);
    setUser({ ...user, phoneno: e.target.value });
  };
  const password = (e) => {
    // console.log(e.target.value);
    console.log(user.password);
    setUser({ ...user, password: e.target.value });
  };
  const cufpassword = (e) => {
    // console.log(e.target.value);
    console.log(user.cufpassword);
    setUser({ ...user, cufpassword: e.target.value });
  };
  const maleStatus = (e) => {
    // console.log(e.target.value);
    console.log(user.maleStatus);
    setUser({ ...user, maleStatus: e.target.value });
  };
  const femaleStatus = (e) => {
    // console.log(e.target.value);
    console.log(user.femaleStatus);
    setUser({ ...user, femaleStatus: e.target.value });
  };
  const otherStatus = (e) => {
    // console.log(e.target.value);
    console.log(user.otherStatus);
    setUser({ ...user, otherStatus: e.target.value });
  };

  // const user2 = {
  //   username: "Arif Ali",
  //   email: "arifali@gmai.com",
  //   phone: "9102629415",
  //   password: "arifpas",
  // };
  const test = async (e) => {
    e.preventDefault();
    // console.log(JSON.stringify(user));
    const testf = fetch("http://localhost:3001/", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(user),
    });
    // .then((res) => res.json())
    // .then((data) => console.log(data));
    console.log((await testf).json());

    // const response2 = fetch("http://localhost:3001/")
    //   .then((res) => res.json())
    //   .then((d) => console.log(d));
    // setUser(JSON.stringify(response.formData));
  };
  return (
    <>
      <div className={styles.hdr}>
        <Header />
      </div>
      <form onSubmit={test}>
        <div className={styles.header}>
          <div className={styles.sigp}>
            {/* <div className="sinlg"></div> */}
            <p className={styles.sup}>Sign Up</p>
            <div className={styles.fn}>
              {/* <label>Gmail </label> */}
              <input
                className={styles.fni}
                placeholder="First Name"
                onChange={firstname}
              />
            </div>
            <div className={styles.fn}>
              {/* <label>Gmail </label> */}
              <input
                className={styles.fni}
                placeholder="Last Name"
                onChange={lastName}
              />
            </div>
            <div className={styles.fn}>
              {/* <label>Gmail </label> */}
              <input
                className={styles.fni}
                placeholder="E-Mail"
                onChange={email}
              />
            </div>
            <div className={styles.fn}>
              {/* <label>Gmail </label> */}
              <input
                className={styles.fni}
                placeholder="Phone Number"
                onChange={phoneno}
              />
            </div>
            <div className={styles.fn}>
              {/* <label>Gmail </label> */}
              <input
                className={styles.fni}
                placeholder="Password"
                onChange={password}
              />
            </div>
            <div className={styles.fn}>
              {/* <label>Gmail </label> */}
              <input
                className={styles.fni}
                placeholder="Confirms Password"
                onChange={cufpassword}
              />
            </div>
            {/* <p className={styles.gdt}"gdt">Gender</p> */}
            <div className={styles.gd}>
              {/* <label>Gender </label> */}
              <input type="radio" name="gd" onChange={maleStatus} />
              <label>Male </label>

              <input type="radio" name="gd" onChange={femaleStatus} />
              <label>Female </label>

              <input type="radio" name="gd" onChange={otherStatus} />
              <label>Other</label>
            </div>
            <div>
              <button className={styles.subbtn} type="submit">
                Submit
              </button>
              {/* <div>{user}</div> */}
            </div>
          </div>
        </div>
      </form>
      <Footer />
    </>
  );
}
